/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from 'react'
import moment from 'moment'
// @mui material components
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDAlert from 'components/MDAlert'
import MDButton from 'components/MDButton'
import MDSnackbar from 'components/MDSnackbar'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import { Box, Divider } from '@mui/material'
import { useAuth } from 'context/AuthContext'

function Notifications() {
  const [successSB, setSuccessSB] = useState(false)
  const [infoSB, setInfoSB] = useState(false)
  const [warningSB, setWarningSB] = useState(false)
  const [errorSB, setErrorSB] = useState(false)
  const { getNotification } = useAuth()
  const notifications = [{
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  },
  {
    "_id": "67b737148b72ebd0b45b06af"
    ,
    "userId": null,
    "message": "this is a test notification to everyone",
    "createdAt": "2025-02-20T14:07:16.446Z"
    ,
    "updatedAt": "2025-02-20T14:07:16.446Z"
    ,
    "__v": 0
  }]
  useEffect(() => {
    getNotification()
    // console.log(result)
  }, [])

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{' '}
      <MDTypography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  )


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3} className=''>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card className=''>
              <MDBox p={2}>
                <MDTypography variant="h5">Notifications</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                {notifications.map((notification) => {
                  return <Box key={notification._id}> <Box className='shadow rounded p-2 mb-1 flex justify-between items-center'>
                    <p className='text-blue-600  text-sm'>
                      {notification.message}
                    </p>
                    <p className='text-gray-400  text-[10px]'>
                      {moment(notification.createdAt).format('MMMM Do YYYY')}
                    </p>
                  </Box>
                    <Divider /></Box>
                })}


              </MDBox>
            </Card>
          </Grid>


          {/* 
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  Notifications on this page use Toasts from Bootstrap. Read
                  more details here.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="success"
                      onClick={openSuccessSB}
                      fullWidth
                    >
                      success notification
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="info"
                      onClick={openInfoSB}
                      fullWidth
                    >
                      info notification
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      onClick={openWarningSB}
                      fullWidth
                    >
                      warning notification
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="error"
                      onClick={openErrorSB}
                      fullWidth
                    >
                      error notification
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default Notifications
