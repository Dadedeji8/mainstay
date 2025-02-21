// react-router-dom components
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
// @mui material components
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDInput from 'components/MDInput'
import MDButton from 'components/MDButton'

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout'

// Images
import bgImage from 'assets/images/bg-sign-up-cover.jpeg'
// select country
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Stack } from '@mui/material'
function Cover() {
  const [countryValue, setCountryValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setCountryValue(value)
  }
  return (
    <CoverLayout image={bgImage} >
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            MAINSTAY
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Full Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
              />

              <Stack direction={"row"} gap={2}>
                <MDBox mb={2}>
                  <MDInput
                    type="number"
                    label="Age"
                    variant="standard"

                  />
                </MDBox>
                <span className='flex items-center text-sm gap-1'>
                  <input
                    type="radio"
                    label="Age"
                    value={'m'}
                    name='gender'
                  />
                  Male
                </span>
                <span className='flex items-center text-sm gap-1'>
                  <input
                    type="radio"
                    label="Age"
                    value={'f'}
                    name='gender'
                  />
                  Female
                </span>

              </Stack>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                />
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Repeat Password"
                    variant="standard"
                    fullWidth
                  />
                  <MDBox mt={2} mb={2} className='z-20'>
                    <Select className='text-sm bg-white' options={options} value={countryValue} placeholder={'Select Country'} onChange={changeHandler} />

                  </MDBox>
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Checkbox />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MDTypography>
                  <p
                    className='text-sm underline'
                  >
                    <a> Terms and Conditions</a>
                  </p>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth>
                    sign up
                  </MDButton>
                </MDBox>
                <MDBox mt={3} mb={1} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Already have an account?{' '}
                    <MDTypography
                      component={Link}
                      to="/authentication/sign-in"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign In
                    </MDTypography>
                  </MDTypography>
                </MDBox>
              </MDBox>

            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  )
}

export default Cover
