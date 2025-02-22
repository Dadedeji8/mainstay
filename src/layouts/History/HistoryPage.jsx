import Footer from 'examples/Footer'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import DepositsTableComponent from 'components/TableComponent/DepositsTableComponent'
import WithdrawalsTableComponent from 'components/TableComponent/WithdrawalsTableComponent'
import TransactionsTableComponent from 'components/TableComponent/TransactionsTableComponent'

const HistoryPage = () => {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="flex flex-col gap-[30px] pt-10">
        <TransactionsTableComponent />
        <DepositsTableComponent />
        <WithdrawalsTableComponent />

      </div>
      <Footer />
    </DashboardLayout>
  )
}

export default HistoryPage


