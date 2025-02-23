import { Margin } from '@mui/icons-material'
import { Card, Paper } from '@mui/material'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'

const MakeTransaction = () => {
    const [activeTab, setActiveTab] = useState(true)
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card sx={{ padding: 5 }}>
                <div className="outline rounded-lg flex  outline-gray-300 ">
                    <div className={`withdraw rounded-l-lg flex-1 outline outline-gray-300 flex  hover:bg-gray-100 p-2 cursor-pointer  hover:text-black  justify-center items-center ${activeTab ? 'bg-[#1A73E8] text-white' : ''}`} onClick={() => setActiveTab(true)}>
                        <p>
                            Withdraw
                        </p>
                    </div>
                    <div className={`withdraw flex-1 rounded-r-lg outline outline-gray-300 cursor-pointer flex p-2  hover:bg-gray-100 hover:text-black justify-center items-center ${!activeTab ? 'bg-[#1A73E8] text-white' : ''}`} onClick={() => setActiveTab(false)}>
                        <p>
                            Deposit
                        </p>
                    </div>
                </div>

                <div>
                    <MDBox component="form" className='mt-5' sx={{ Margin: 1 }}>
                        <div className='flex gap-1'>
                            <MDInput fullWidth label="account number" type="number" mb={2}>

                            </MDInput>
                            <MDInput fullWidth label="Bank Name" type="number" mb={2}>

                            </MDInput>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <MDInput fullWidth label="Amount($)" type="number" mb={2}>
                            </MDInput>


                        </div>
                    </MDBox>
                </div>
            </Card>
        </DashboardLayout>
    )
}

export default MakeTransaction
