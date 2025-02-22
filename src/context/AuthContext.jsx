import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthenticationContext = createContext();

/**

 */
export const AuthProvider = ({ children }) => {

    const endpoint = "http://localhost:5000/api";

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profile, setProfile] = useState(null);
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1SWQiOiI2N2I2MDlhMTRlYTg5ZDk4Y2MxYzEwOGYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3NDAwNjAwODcsImV4cCI6MTc0MDY2NDg4N30.YVd25PW6lVzMW7Ym3MrU17Y7M2rSAvLH466vQ45d6-8");

    const [allUsers, setAllUsers] = useState([
        {
            "account": {
                "balance": 10000
            },
            "_id": "67b609a14ea89d98cc1c108f",
            "fullName": "Josiah Victor",
            "email": "victorjosiahm3@gmail.com",
            "gender": "Male",
            "country": "Nigeria",
            "age": 25,
            "username": "Jovick",
            "__v": 0,
            "isAdmin": true,
            "emailVaried": false
        },
        {
            "account": {
                "balance": 5000
            },
            "_id": "67b609a14ea89d98cc1c1090",
            "fullName": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "gender": "Female",
            "country": "USA",
            "age": 30,
            "username": "AliceJ",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 3000
            },
            "_id": "67b609a14ea89d98cc1c1100",
            "fullName": "Bob Smith",
            "email": "bob.smith@example.com",
            "gender": "Male",
            "country": "Canada",
            "age": 28,
            "username": "BobS",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 7000
            },
            "_id": "67b609a14ea89d98cc1c1110",
            "fullName": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "gender": "Male",
            "country": "UK",
            "age": 35,
            "username": "CharlieB",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 8000
            },
            "_id": "67b609a14ea89d98cc1c1120",
            "fullName": "Diana Prince",
            "email": "diana.prince@example.com",
            "gender": "Female",
            "country": "France",
            "age": 27,
            "username": "DianaP",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 6000
            },
            "_id": "67b609a14ea89d98cc1c1130",
            "fullName": "Eve Adams",
            "email": "eve.adams@example.com",
            "gender": "Female",
            "country": "Germany",
            "age": 32,
            "username": "EveA",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 9000
            },
            "_id": "67b609a14ea89d98cc1c1140",
            "fullName": "Frank Miller",
            "email": "frank.miller@example.com",
            "gender": "Male",
            "country": "Australia",
            "age": 29,
            "username": "FrankM",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        },
        {
            "account": {
                "balance": 4000
            },
            "_id": "67b609a14ea89d98cc1c1150",
            "fullName": "Grace Lee",
            "email": "grace.lee@example.com",
            "gender": "Female",
            "country": "South Korea",
            "age": 26,
            "username": "GraceL",
            "__v": 0,
            "isAdmin": false,
            "emailVaried": true
        }
    ])
    const [transactionsHistory, setTransactionsHistory] = useState([
        {
            _id: '67b764b4f476567a415aab6c',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: 2000,
            type: 'deposit',
            createdAt: '2025-02-20T17:21:56.714Z',
            updatedAt: '2025-02-20T17:21:56.714Z',
            __v: 0,
        },
        {
            _id: '67b76ab1e4cf5aa972817faf',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: 100,
            type: 'manual update',
            createdAt: '2025-02-20T17:47:29.939Z',
            updatedAt: '2025-02-20T17:47:29.939Z',
            __v: 0,
        },
        {
            _id: '67b76b6b5e7db1c181a34229',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: 100,
            type: 'manual update',
            createdAt: '2025-02-20T17:50:35.878Z',
            updatedAt: '2025-02-20T17:50:35.878Z',
            __v: 0,
        },
        {
            _id: '67b76b7e5e7db1c181a3422e',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: -100,
            type: 'manual update',
            createdAt: '2025-02-20T17:50:54.225Z',
            updatedAt: '2025-02-20T17:50:54.225Z',
            __v: 0,
        },
        {
            _id: '67b76b8c5e7db1c181a34233',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: -100,
            type: 'manual update',
            createdAt: '2025-02-20T17:51:08.179Z',
            updatedAt: '2025-02-20T17:51:08.179Z',
            __v: 0,
        },
        {
            _id: '67b89869e9450203901f6d4f',
            userId: {
                _id: '67b609a14ea89d98cc1c108f',
                fullName: 'Josiah Victor',
            },
            amount: 10000,
            type: 'manual update',
            createdAt: '2025-02-21T15:14:49.472Z',
            updatedAt: '2025-02-21T15:14:49.472Z',
            __v: 0,
        },
    ])

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

    const [withdrawals, setWithdrawals] = useState([
        {
            account: {
                number: 8137297150,
                name: "Josiah Victor",
                bank: "Opay"
            },
            _id: "67b8989ee9450203901f6d57",
            userId: {
                _id: "67b609a14ea89d98cc1c108f",
                fullName: "Josiah Victor"
            },
            amount: 2000,
            status: "rejected",
            createdAt: "2025-02-21T15:15:42.157Z",
            updatedAt: "2025-02-21T15:16:26.212Z",
            __v: 0
        },
        {
            account: {
                number: 1234567890,
                name: "Alice Johnson",
                bank: "Chase"
            },
            _id: "67b8989ee9450203901f6d58",
            userId: {
                _id: "67b609a14ea89d98cc1c1090",
                fullName: "Alice Johnson"
            },
            amount: 5000,
            status: "approved",
            createdAt: "2025-03-01T10:20:30.157Z",
            updatedAt: "2025-03-01T10:25:30.212Z",
            __v: 0
        },
        {
            account: {
                number: 9876543210,
                name: "Bob Smith",
                bank: "Wells Fargo"
            },
            _id: "67b8989ee9450203901f6d59",
            userId: {
                _id: "67b609a14ea89d98cc1c1100",
                fullName: "Bob Smith"
            },
            amount: 3000,
            status: "pending",
            createdAt: "2025-03-05T12:30:45.157Z",
            updatedAt: "2025-03-05T12:35:45.212Z",
            __v: 0
        }
    ])

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
        // only admin
        getAllProfile({});
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
            .then((response) => response.json())
            .then((result) => setProfile(result))
            .catch((error) => console.error(error));
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
            .then((result) => setProfile(result))
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
            .then((result) => setProfile(result))
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
        return console.log({ api })
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
            .then((result) => setProfile(result))
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
            .then((result) => setProfile(result))
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
            .then((result) => setProfile(result))
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
            .then((result) => setProfile(result))
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

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated, login, logout, token, endpoint, transactionsHistory,
            setTransactionsHistory,
            deposits,
            setDeposits,
            withdrawals,
            setWithdrawals,
            allUsers, adminApproveWithdrawals, adminApproveDeposits, adminUpdateUserWallet, adminDisableUser
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired, };

export const useAuth = () => {
    return useContext(AuthenticationContext);
};
