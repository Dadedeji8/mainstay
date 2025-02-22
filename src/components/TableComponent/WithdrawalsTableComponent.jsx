import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import DataTable from 'examples/Tables/DataTable';
import { useAuth } from 'context/AuthContext';
import moment from 'moment';


function WithdrawalsTableComponent() {
  const { withdrawals } = useAuth()

  const formattedWithdrawal = withdrawals.map((withdrawal) => ({
    ...withdrawal,
    createdAt: moment(withdrawal.createdAt).format('DD MMM yyy'),
    action: <WithdrawalActionMenu rowId={withdrawal._id} />,
  }))

  return (
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
  )
}

export default WithdrawalsTableComponent

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
