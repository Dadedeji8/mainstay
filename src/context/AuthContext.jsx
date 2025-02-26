import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';


const AuthenticationContext = createContext();

/**

 */
export const AuthProvider = ({ children }) => {

    const endpoint = "https://mainstay-bank.vercel.app/api";

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')) || null);
    const [isAdmin, setIsAdmin] = useState(profile?.isAdmin || false);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const [allUsers, setAllUsers] = useState([])
    const [transactionsHistory, setTransactionsHistory] = useState([])

    const [deposits, setDeposits] = useState([
        {
            "_id": "67b74d30c0af7f5043dc7f23",
            "userId": {
                "_id": "67b609a14ea89d98cc1c108f",
                "fullName": "Josiah Victor"
            },
            "amount": 2000,
            "transactionRef": "1234",
            "status": "approved",
            "createdAt": "2025-02-20T15:41:36.751Z",
            "updatedAt": "2025-02-20T17:21:56.691Z",
            "__v": 0
        },
        {
            "_id": "67b74d39c0af7f5043dc7f26",
            "userId": {
                "_id": "67b609a14ea89d98cc1c108f",
                "fullName": "Josiah Victor"
            },
            "amount": 2000,
            "transactionRef": "1234",
            "status": "rejected",
            "createdAt": "2025-02-20T15:41:45.929Z",
            "updatedAt": "2025-02-20T17:27:57.566Z",
            "__v": 0
        },
        {
            "_id": "67b74d6f5046aca8bb290f6f",
            "userId": {
                "_id": "67b609a14ea89d98cc1c108f",
                "fullName": "Josiah Victor"
            },
            "amount": 2000,
            "transactionRef": "1234",
            "status": "pending",
            "createdAt": "2025-02-20T15:42:39.523Z",
            "updatedAt": "2025-02-20T15:42:39.523Z",
            "__v": 0
        },
        {
            "_id": "67b74dd5c1a0cde9e919ad98",
            "userId": {
                "_id": "67b609a14ea89d98cc1c108f",
                "fullName": "Josiah Victor"
            },
            "amount": 2000,
            "transactionRef": "1234",
            "status": "pending",
            "createdAt": "2025-02-20T15:44:21.122Z",
            "updatedAt": "2025-02-20T15:44:21.122Z",
            "__v": 0
        },
        {
            "_id": "67b75118c1a0cde9e919ad9c",
            "userId": {
                "_id": "67b609a14ea89d98cc1c108f",
                "fullName": "Josiah Victor"
            },
            "amount": 2000,
            "transactionRef": "1234",
            "status": "pending",
            "createdAt": "2025-02-20T15:58:16.491Z",
            "updatedAt": "2025-02-20T15:58:16.491Z",
            "__v": 0
        }
    ])

    const [withdrawals, setWithdrawals] = useState([])

    useEffect(() => {
        // const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    useEffect(() => {
        if (!token) {
            return;
        }
        getProfile();
        getWithdrawals({});
        getTransactions({});
        getDeposits({});
        if (isAdmin) {

            // only admin
            getAllProfile({});
        }
        setLoading(false);
    }, [token]);

    function getProfile() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${endpoint}/user/profile`, requestOptions)
            .then((response) => {
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

                setProfile(result); //  Update state
                setIsAdmin(result.isAdmin)
                localStorage.setItem("profile", JSON.stringify(result));
            })
            .catch((error) => console.error("Error fetching profile:", error));
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
            .then((result) => setProfile(result))
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

            const result = await response.json(); // Parse JSON first

            if (!response.ok) {
                throw new Error(result.error || 'Failed to log in'); // Use API error message if available
            }
            // return console.log({ result })

            localStorage.setItem('token', result.token);
            localStorage.setItem('profile', result.user);
            setToken(result.token);
            setProfile(result.user);
            setIsAdmin(result.user.isAdmin);



            console.log('Login successful. Token:', result.token);
            return { success: true, data: result }; // Return success status

        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to log in');
            return { success: false, error: error.message }; // Return error for handling
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

        fetch("https://mainstay-bank.vercel.app/api/bank/deposit", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        setToken(null);
        setProfile(null);
        setIsAdmin(false);
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
            .then((result) => console.log(result))
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
            updateProfile,
            setTransactionsHistory,
            deposits,
            profile,
            loading,
            setDeposits,
            makeDeposit,
            withdrawals,
            setWithdrawals,
            allUsers, adminApproveWithdrawals, adminApproveDeposits, adminUpdateUserWallet
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired, };

export const useAuth = () => {
    return useContext(AuthenticationContext);
};
