import { useAuth } from 'context/AuthContext'
import moment from 'moment'
import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import DataTable from 'examples/Tables/DataTable';
import { MoreVert } from '@mui/icons-material';



function UsersTableComponent() {
  const { allUsers } = useAuth()
  const formattedAllUsers = allUsers.map((user) => ({
    ...user,
    account: {
      balance: user.account.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 }),
    },
    isAdmin: user.isAdmin ? 'Admin' : 'User',
    createdAt: moment(user.createdAt).format('DD MMM yyy'),
    action: <UserActionMenu rowId={user._id} />,
  }))
  return (
    <div className="">
      <div className=" text-[26px] pb-2 font-bold ">Users Table</div>
      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: 'Fullname', accessor: 'fullName' },
            { Header: 'Username', accessor: 'username' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'Gender', accessor: 'gender' },
            { Header: 'Country', accessor: 'country' },
            { Header: 'Balance', accessor: 'account.balance' },
            { Header: 'Date', accessor: 'createdAt' },
            { Header: 'Type', accessor: 'isAdmin' },
            { Header: 'Action', accessor: 'action' },
          ],
          rows: [...formattedAllUsers],
        }}
      />
    </div>
  )
}

export default UsersTableComponent

const UserActionMenu = () => {
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
        <MenuItem onClick={handleClose}>Disable</MenuItem>
        <MenuItem onClick={handleClose}>Update Wallet</MenuItem>
      </Menu>
    </div>
  );
};
