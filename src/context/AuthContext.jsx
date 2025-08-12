import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired, validateStoredToken, clearAuthData } from '../utils/authUtils';


const AuthenticationContext = createContext();

/**

 */
export const AuthProvider = ({ children }) => {

    const endpoint = "https://mainstay-bank.vercel.app/api";

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')) || null);
    const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem("profile"))?.isAdmin || false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [notifications, setNotifications] = useState([])
    const [singleUser, setSingleUser] = useState(null)

    const [error, setError] = useState(null)
    const [allUsers, setAllUsers] = useState([])
    const [transactionsHistory, setTransactionsHistory] = useState([])

    const [deposits, setDeposits] = useState([])

    const [withdrawals, setWithdrawals] = useState([])

    const navigate = useNavigate();

    // Check token validity on mount and set authentication state
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedProfile = JSON.parse(localStorage.getItem("profile"));

        if (storedToken && !isTokenExpired(storedToken)) {
            setToken(storedToken);
            if (storedProfile) {
                setProfile(storedProfile);
                setIsAdmin(storedProfile.isAdmin || false);
                setIsAuthenticated(true);
            }
        } else {
            // Clear invalid or expired token
            clearAuthData();
            setToken(null);
            setProfile(null);
            setIsAdmin(false);
            setIsAuthenticated(false);
            // Redirect to login if not already there
            if (!window.location.pathname.includes('sign-in') && !window.location.pathname.includes('sign-up')) {
                navigate('/authentication/sign-in');
            }
        }
        setLoading(false);
    }, [navigate]);

    useEffect(() => {
        console.log({ isAdmin })
        console.log(allUsers)
    }, [isAdmin]); // Runs only on mount

    // get all users
    // useEffect(() => {

    //     console.log(allUsers)
    // }, [allUsers]);

    useEffect(() => {
        if (!token) {
            return;
        }
        getProfile();
        getWithdrawals({});
        getTransactions({});
        getDeposits({});
        getNotification();

        if (isAdmin) {

            // only admin
            getAllProfile({});
        }
        setLoading(false);

    }, [token]);

    // Helper function to validate token before making API calls
    const validateAndGetHeaders = () => {
        if (!token || isTokenExpired(token)) {
            clearAuthData();
            setToken(null);
            setProfile(null);
            setIsAuthenticated(false);
            navigate('/authentication/sign-in');
            throw new Error('Session expired. Please log in again.');
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        return myHeaders;
    };

    // Helper function to handle authenticated API requests
    const makeAuthenticatedRequest = async (url, options = {}) => {
        try {
            const myHeaders = validateAndGetHeaders();
            const defaultOptions = {
                headers: myHeaders,
                redirect: 'follow',
                ...options,
                headers: {
                    ...myHeaders,
                    ...(options.headers || {})
                }
            };

            const response = await fetch(url, defaultOptions);

            if (response.status === 401) {
                clearAuthData();
                setToken(null);
                setProfile(null);
                setIsAuthenticated(false);
                navigate('/authentication/sign-in');
                throw new Error('Session expired. Please log in again.');
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }

            return response;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    };

    function getProfile(id) {
        try {
            const myHeaders = validateAndGetHeaders();

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            return fetch(`${endpoint}/user/profile${id ? '?id=' + id : ''}`, requestOptions)
                .then((response) => {
                    if (response.status === 401) {
                        // Unauthorized - token is invalid or expired
                        clearAuthData();
                        setToken(null);
                        setProfile(null);
                        setIsAuthenticated(false);
                        navigate('/authentication/sign-in');
                        throw new Error('Session expired. Please log in again.');
                    }

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => {
                    console.log("Fetched profile result:", result);

                    if (!result || Object.keys(result).length === 0) {
                        throw new Error("Received empty response from API");
                    }

                    if (id) {
                        setSingleUser(result);
                        console.log('single user fetched', result);
                        return result;
                    }

                    // Update profile and admin status
                    setProfile(result);
                    setIsAdmin(result.isAdmin || false);
                    setIsAuthenticated(true);

                    // Save to localStorage
                    localStorage.setItem("profile", JSON.stringify(result));

                    return result;
                })
                .catch((error) => {
                    console.error('Error in getProfile:', error);
                    if (error.message.includes('Session expired') || error.message.includes('401')) {
                        clearAuthData();
                        setToken(null);
                        setProfile(null);
                        setIsAuthenticated(false);
                        navigate('/authentication/sign-in');
                    }
                    throw error;
                });
        } catch (error) {
            console.error('Error in getProfile:', error);
            throw error;
        }
    }
    async function updateProfile(data, onSuccess, onError) {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `${token}`);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: "follow",
        };

        await fetch(`${endpoint}/user/profile`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((err) => {
                        throw new Error(`Error ${response.status}: ${err.message || "Unknown error"}`);
                    });
                }
                return response.json();
            })
            .then((result) => {
                console.log("Profile updated successfully:", result);
                if (onSuccess) onSuccess(result);
            })
            .catch((error) => {
                console.error("Error updating profile:", error.message);
                if (onError) onError(error);
            });
    }



    function getAllProfile({ userId }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let api = `${endpoint}/user`;
        const queryParams = new URLSearchParams();

        if (userId) {
            queryParams.append("userId", userId);
        }
        if (queryParams.toString()) {
            api = `${api}?${queryParams.toString()}`;
        }
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(api, requestOptions)
            .then((response) => response.json())
            .then((result) => setAllUsers(result.users))
            .catch((error) => console.error(error));
    }

    function getTransactions({ id, userId }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let api = `${endpoint}/bank/history`;
        const queryParams = new URLSearchParams();
        if (id) {
            queryParams.append("id", id);
        }
        if (userId) {
            queryParams.append("userId", userId);
        }
        if (queryParams.toString()) {
            api = `${api}?${queryParams.toString()}`;
        }
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(api, requestOptions)
            .then((response) => response.json())
            .then((result) => setTransactionsHistory(result.transactions))
            .catch((error) => console.error(error));
    }

    function getWithdrawals({ id, userId }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let api = `${endpoint}/bank/withdrawal`;
        const queryParams = new URLSearchParams();
        if (id) {
            queryParams.append("id", id);
        }
        if (userId) {
            queryParams.append("userId", userId);
        }
        if (queryParams.toString()) {
            api = `${api}?${queryParams.toString()}`;
        }
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(api, requestOptions)
            .then((response) => response.json())
            .then((result) => setWithdrawals(result.withdrawals))
            .catch((error) => console.error(error));
    }

    function adminApproveWithdrawals({ id, status, reason }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "status": status,
            "message": reason
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        fetch(`${endpoint}/bank/withdrawal/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                getWithdrawals({})
            })
            .catch((error) => console.error(error));
    }

    function adminApproveDeposits({ id, status }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "status": status,
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        fetch(`${endpoint}/bank/deposit/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                getDeposits({})
            })
            .catch((error) => console.error(error));
        return
    }

    function adminUpdateUserWallet({ id, amount }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "amount": amount,
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        fetch(`${endpoint}/bank/balance/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                getAllProfile({})
            })
            .catch((error) => console.error(error));
        return
    }

    function adminDisableUser({ id }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            targetUserId: id
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        fetch(`${endpoint}/user`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                getAllProfile({})
            })
            .catch((error) => console.error(error));
        return
    }

    function getDeposits({ id, userId }) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let api = `${endpoint}/bank/deposit`;
        const queryParams = new URLSearchParams();
        if (id) {
            queryParams.append("id", id);
        }
        if (userId) {
            queryParams.append("userId", userId);
        }
        if (queryParams.toString()) {
            api = `${api}?${queryParams.toString()}`;
        }
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(api, requestOptions)
            .then((response) => response.json())
            .then((result) => setDeposits(result.deposits))
            .catch((error) => console.error(error));
    }

    const login = async (data) => {
        console.log('This is the data being submitted for login:', data);

        try {
            const response = await fetch(`${endpoint}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                // Clear any existing auth data on failed login
                clearAuthData();
                setToken(null);
                setProfile(null);
                setIsAuthenticated(false);

                throw new Error(result.error || 'Failed to log in. Please check your credentials.');
            }

            // Validate the received token
            if (!result.token || !result.user) {
                throw new Error('Invalid response from server');
            }

            // Store the new token and profile
            localStorage.setItem('token', result.token);
            localStorage.setItem('profile', JSON.stringify(result.user));

            // Update state
            setToken(result.token);
            setProfile(result.user);
            setIsAdmin(result.user.isAdmin || false);
            setIsAuthenticated(true);

            console.log('Login successful');
            return { success: true, data: result };

        } catch (error) {
            console.error('Error logging in:', error);
            // Ensure all auth data is cleared on error
            clearAuthData();
            setToken(null);
            setProfile(null);
            setIsAuthenticated(false);

            return {
                success: false,
                error: error.message || 'An error occurred during login. Please try again.'
            };
        }
    };


    const registerUser = async (data) => {
        try {
            const response = await fetch(`${endpoint}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json(); // Parse JSON first

            if (!response.ok) {
                throw new Error(result.error || 'Failed to register'); // Use API error message if available
            }

            console.log('User registered successfully:', result);
            return { success: true, data: result }; // Return success status

        } catch (error) {
            console.error('Error registering user:', error);
            return { success: false, error: error.message }; // Return error for handling
        }
    };

    // making new deposit below
    const makeDeposit = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "amount": data.amount,
            "transactionRef": data.refNo,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${endpoint}/bank/deposit`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                getDeposits({})
            })
            .catch((error) => console.error(error));
    }
    // making new deposit below
    const makeWithdrawel = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "amount": data.amount,
            "description": data.description,
            "account": {
                "bank": data.bank,
                "number": data.number,
                "name": data.name
            },
            'password': data.password
        });
        console.log('this is the form  the withdraw', raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${endpoint}/bank/withdrawal`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                getWithdrawals({})
            })
            .catch((error) => console.error(error));
    }

    const logout = () => {
        try {
            // Clear all authentication data from localStorage
            clearAuthData();

            // Reset all auth-related state
            setToken(null);
            setProfile(null);
            setIsAdmin(false);
            setIsAuthenticated(false);

            // Clear any stored notifications or user data
            setNotifications([]);
            setAllUsers([]);
            setTransactionsHistory([]);
            setDeposits([]);
            setWithdrawals([]);

            // Redirect to login page
            navigate('/authentication/sign-in');

            console.log('User logged out successfully');
        } catch (error) {
            console.error('Error during logout:', error);
            // Even if there's an error, we still want to clear the auth state
            clearAuthData();
            setToken(null);
            setProfile(null);
            setIsAuthenticated(false);
            navigate('/authentication/sign-in');
        }
    };
    const getNotification = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        fetch(`${endpoint}/notification`, requestOptions)
            .then((response) => { return response.json() })
            .then((result) => { setNotifications(result?.notifications) })
            .catch((error) => console.error(error));
    }
    const newNotification = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify({
                userId: data.id || null,
                message: data.message
            })

        };

        fetch(`${endpoint}/notification`, requestOptions)
            .then((response) => { return response.json() })
            .then((result) => { setNotifications(result?.notifications) }

            )
            .catch((error) => console.error(error));
    }
    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated, isAdmin,
            getNotification,

            registerUser,
            login,
            logout,
            token,
            endpoint,
            transactionsHistory,
            getProfile,
            adminDisableUser,
            updateProfile,
            setTransactionsHistory,
            deposits,
            profile,
            loading,
            setDeposits,
            makeDeposit,
            makeWithdrawel,
            withdrawals,
            notifications,
            newNotification,
            setWithdrawals,
            singleUser, allUsers, adminApproveWithdrawals, adminApproveDeposits, adminUpdateUserWallet
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired, };

export const useAuth = () => {
    return useContext(AuthenticationContext);
};
