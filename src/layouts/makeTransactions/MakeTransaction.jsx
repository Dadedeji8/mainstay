import { useState, useEffect } from 'react'
import { Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { useAuth } from 'context/AuthContext'


const MakeTransaction = () => {
    const [activeTab, setActiveTab] = useState(true)
    const [open, setOpen] = useState(false)
    const [deposit, setDeposit] = useState({
        refNo: '',
        amount: ''
    })
    const [buttonContent, setButtonContent] = useState('Submit to proceed')
    const [withdraw, setWithdraw] = useState({})
    const { makeDeposit } = useAuth()
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setDeposit({ ...deposit, [name]: value })
    }
    const updateDeposit = () => {
        setButtonContent('processing')
        try {
            makeDeposit(deposit)
            setButtonContent('Done')
        } catch (error) {

        }
    }
    useEffect(() => {
        console.log(deposit)
    }, [deposit])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card sx={{ padding: 5 }}>
                <div className="outline rounded-lg flex outline-gray-300">
                    {/* NOTE: i remove the hover effect */}
                    <div className={`withdraw rounded-l-lg flex-1 outline outline-gray-300 flex  p-2 cursor-pointer hov er:text-black justify-center items-center ${activeTab ? 'bg-[#1A73E8] text-white' : ''}`} onClick={() => setActiveTab(true)}>
                        <p>
                            Withdraw
                        </p>
                    </div>
                    <div className={`withdraw flex-1 rounded-r-lg outline outline-gray-300 cursor-pointer flex p-2 hov er:bg-gray-100 justify-center items-center ${!activeTab ? 'bg-[#1A73E8] text-white' : ''}`} onClick={() => setActiveTab(false)}>
                        <p>
                            Deposit
                        </p>
                    </div>
                </div>

                <div>
                    <MDBox component="form" className='mt-5' sx={{ Margin: 1 }}>
                        <div className='flex gap-1'>
                            <MDInput fullWidth label={activeTab ? `Account Number` : 'referenece no.'} onChange={handleChange} type={activeTab ? 'number' : 'text'} name={activeTab ? `AccountNumber` : 'refNo'} mb={2} />
                            <MDInput fullWidth label={activeTab ? `Bank Name` : 'Amount'} onChange={handleChange} name={activeTab ? `Bank Name` : 'amount'} type="text" mb={2} />
                        </div>
                        {activeTab ? <div className='flex gap-1 mt-2'>
                            <MDInput fullWidth label="account Name" type="text" mb={2} />
                            <MDInput fullWidth label="Amount($)" type="number" mb={2} />
                        </div> : ""}

                        <MDButton size='large' variant={'contained'} color={'primary'} className="w-full mt-5" onClick={activeTab ? handleClickOpen : updateDeposit}>
                            {buttonContent}
                        </MDButton>
                    </MDBox>
                </div>
            </Card>

            <Dialog open={open} onClose={handleClose} className=''>
                <div className='min-w-[350px]'>
                    <DialogTitle>{"Input Password"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <MDInput className='w-full' type='password' />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='flex'>
                        <MDButton color="primary" className='w-full'>
                            Submit
                        </MDButton>
                        <MDButton onClick={handleClose} color="error">
                            Close
                        </MDButton>
                    </DialogActions>
                </div>
            </Dialog>
        </DashboardLayout>
    )
}

export default MakeTransaction
