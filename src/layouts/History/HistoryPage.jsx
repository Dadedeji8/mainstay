import Footer from 'examples/Footer'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import DataTable from 'examples/Tables/DataTable'
import React, { useState } from 'react'
import moment from 'moment'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

const HistoryPage = () => {
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

  const formattedTransactions = transactionsHistory.map((transaction) => ({
    ...transaction,
    createdAt: moment(transaction.createdAt).format('DD MMM yyy'),
  }))

  const formattedDeposits = deposits.map((deposit) => ({
    ...deposit,
    createdAt: moment(deposit.createdAt).format('DD MMM yyy'),
    action: <DepositActionMenu />,
  }))
  const formattedWithdrawal = withdrawals.map((withdrawal) => ({
    ...withdrawal,
    createdAt: moment(withdrawal.createdAt).format('DD MMM yyy'),
    action: <DepositActionMenu />,
  }))
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="flex flex-col gap-[30px] pt-10">
        <div className="">
          <div className=" text-[26px] pb-2 font-bold ">Transactions History</div>
          <DataTable
            canSearch={true}
            table={{
              columns: [
                { Header: 'User', accessor: 'userId.fullName', width: '35%' },
                { Header: 'Amount', accessor: 'amount', width: '20%' },
                { Header: 'Type', accessor: 'type' },
                { Header: 'Date', accessor: 'createdAt', width: '12%' },
              ],
              rows: [...formattedTransactions],
            }}
          />
        </div>
        <div className="">
          <div className=" text-[26px] pb-2 font-bold ">Deposits</div>
          <DataTable
            canSearch={true}
            table={{
              columns: [
                { Header: 'User', accessor: 'userId.fullName', width: '35%' },
                { Header: 'Amount', accessor: 'amount', width: '20%' },
                { Header: 'Status', accessor: 'status' },
                { Header: 'Date', accessor: 'createdAt', width: '12%' },
                { Header: 'Action', accessor: 'action', width: '10%' },
              ],
              rows: [...formattedDeposits],
            }}
          />
        </div>
        <div className="">
          <div className=" text-[26px] pb-2 font-bold ">Withdrawal</div>
          <DataTable
            canSearch={true}
            table={{
              columns: [
                { Header: 'User', accessor: 'userId.fullName', width: '35%' },
                { Header: 'Amount', accessor: 'amount', },
                { Header: 'Account Number', accessor: 'account.number', width: '20%' },
                { Header: 'Account Name', accessor: 'account.name' },
                { Header: 'Bank', accessor: 'account.bank' },
                { Header: 'Status', accessor: 'status' },
                { Header: 'Date', accessor: 'createdAt', width: '12%' },
                { Header: 'Action', accessor: 'action', width: '10%' },
              ],
              rows: [...formattedWithdrawal],
            }}
          />
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  )
}

export default HistoryPage



const DepositActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Approve</MenuItem>
        <MenuItem onClick={handleClose}>Reject</MenuItem>
      </Menu>
    </div>
  );
};

const WithdrawalActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Approve</MenuItem>
        <MenuItem onClick={handleClose}>Reject</MenuItem>
      </Menu>
    </div>
  );
};
