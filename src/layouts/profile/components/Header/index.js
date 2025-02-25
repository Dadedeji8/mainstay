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

import { useState, useEffect } from 'react'

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'
import { useAuth } from 'context/AuthContext'
// @mui material components
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Icon from '@mui/material/Icon'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDAvatar from 'components/MDAvatar'

// Material Dashboard 2 React base styles
import breakpoints from 'assets/theme/base/breakpoints'

// Images
import ProfileImg from 'assets/images/ProfileIMG.jpg'
import backgroundImage from 'assets/images/bg-profile.jpeg'
import { Check, Edit, Money } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import MDInput from 'components/MDInput'
import MDButton from 'components/MDButton'

function Header({ children }) {
  const { profile, getProfile, updateProfile } = useAuth()
  const [tabsOrientation, setTabsOrientation] = useState('horizontal')
  const [tabValue, setTabValue] = useState(0)
  const [isEditing, setIsEditing] = useState(false)// icon should toggle this remember david which should make it change state
  const [fieldEdited, setFieldEdited] = useState('')

  const [profileStage, setProfileStage] = useState({})
  const [updating, setUpdating] = useState(false)

  const toggleIsEditing = () => {
    setIsEditing(el => !el)
  }
  const updateProfileDetails = () => {
    try {
      setUpdating(true)
      updateProfile(profileStage)
      getProfile()
      console.log('update profile successful')
    } catch (error) {
      console.log(error)
    }
    setUpdating(false)

  }
  const inputFieldSet = [
    {
      name: 'fullName',
      label: 'full Name',
      type: 'text'

    },
    {
      name: 'email',
      label: 'Email',
      type: 'email'

    },
    {
      name: 'age',
      label: 'age',
      type: 'number'

    },
    {
      name: 'country',
      label: 'Country',
      type: 'text'

    },
    {
      name: 'gender',
      label: 'Sex',
      type: 'text'

    },
    {
      name: 'username',
      label: 'username',
      type: 'text'

    },
    {
      name: 'oldPassword',
      label: 'old password',
      type: 'password'

    },
    {
      name: 'newPassword',
      label: 'new password',
      type: 'password'

    },
  ]
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileStage({ ...profileStage, [name]: value })
  }
  useEffect(() => { console.log(profileStage) }, [profileStage])


  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal')
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener('resize', handleTabsOrientation)

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleTabsOrientation)
  }, [tabsOrientation])
  const handleSetTabValue = (event, newValue) => setTabValue(newValue)
  useEffect(() => { console.log('this is data from profile page', profile) }, [])
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          overflow: 'hidden',
        }}
      />
      <Card
        sx={{
          position: 'relative',
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar
              src={ProfileImg}
              alt="profile-image"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {<MDTypography variant="h5" fontWeight="medium">
                  {profile?.fullName
                  }
                </MDTypography>
                }
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {profile?.email} <span className='underline text-red-500'>{profile?.emailVerified ? ' verified' : ' Not Verified'}</span>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item>
            <Box className='rounded-2xl bg-lime-200 p-1 px-3'><MDTypography variant={'body2'}>
              <Money />  Account Balance: <span className='text-blue-950'>${profile?.account?.balance || 0}</span>
            </MDTypography></Box>
          </Grid>
          <Grid item>
            <Box className=''>
              <Button variant='outlined' className='text-blue-900' onClick={handleClickOpen}>
                Edit Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
        {children}
        <Dialog open={open} onClose={handleClose} className=''>
          <div className='min-w-[350px]'>
            <DialogTitle>{"Update Profile"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {inputFieldSet.map((input) => {
                  return <Box className='flex gap-2 items-center mb-2' key={input.name}>
                    {fieldEdited == input.name ? <MDInput className='w-full' label={input.label} name={input.name} type={input.type} onChange={handleInputChange} /> : <Box className=' rounded-xl p-2 w-full '><Typography className='text-[14px]'> {profile?.[input.name] || input.label}</Typography></Box>} {fieldEdited == input.name ? <Check onClick={() => setFieldEdited('')} /> : <Edit onClick={() => setFieldEdited(input.name)} />}
                  </Box>
                })}

              </DialogContentText>
            </DialogContent>
            <DialogActions className='flex'>
              <MDButton color="primary" className={`w-full ${updating ? 'bg-green' : ''}`} onClick={() => updateProfileDetails()}>
                {updating ? ' Submiting' : 'submit'}
              </MDButton>
              <MDButton onClick={handleClose} color="error">
                Close
              </MDButton>
            </DialogActions>
          </div>
        </Dialog>
      </Card>
    </MDBox>
  )
}



// Setting default props for the Header
Header.defaultProps = {
  children: '',
}

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
}

export default Header
