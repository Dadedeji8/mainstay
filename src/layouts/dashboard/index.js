// @mui material components
import Grid from '@mui/material/Grid'
import { useState } from 'react'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart'
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData'
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData'
import cardBG from '../../assets/images/cardBG.jpg'
// Dashboard components
import Projects from 'layouts/dashboard/components/Projects'
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview'
import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material'
import { Cancel, Close, RemoveRedEye, RemoveRedEyeOutlined } from '@mui/icons-material'
import DepositsTableComponent from 'components/TableComponent/DepositsTableComponent'
import TransactionsTableComponent from 'components/TableComponent/TransactionsTableComponent'
import WithdrawalsTableComponent from 'components/TableComponent/WithdrawalsTableComponent'
import React from 'react'
import UsersTableComponent from 'components/TableComponent/UserTableComponent'
import { useAuth } from 'context/AuthContext'


function Dashboard() {
  const [showValue, setShowValue] = useState(false)
  const { sales, tasks } = reportsLineChartData
  const { isAdmin } = useAuth()
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {isAdmin ? <Grid container spacing={3} >
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="money"
                title="Total Balance"
                count={"$40433"}
              // percentage={{
              //   color: 'success',
              //   amount: '+55%',
              //   label: 'than lask week',
              // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Available balance"
                count="2,300"
                percentage={{
                  color: 'success',
                  amount: '+3%',
                  label: 'than last month',
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Account Type"
                count="Lv 1"
                percentage={{
                  color: 'success',
                  amount: '+1%',
                  label: 'than yesterday',
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person"
                title="Verification Status"
                count="Verified"
                percentage={{
                  color: 'success',
                  amount: '',
                  label: 'Just updated',
                }}
              />
            </MDBox>
          </Grid>
        </Grid> : ''}
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} >

              <div className={`h-[200px] flex flex-col justify-between p-4 rounded-xl shadow cardImg`}>
                <div>
                  <Box className={'flex'}>
                    <Typography color={"primary"} sx={{ fontSize: 15, fontWeight: 800 }}>
                      Account Overview
                    </Typography>
                  </Box>
                  <div className="flex flex-row items-center gap-3">

                    <Typography variant='h2' color={"primary"}>
                      {showValue ? 180000 : "*****"}
                    </Typography>
                    <span onClick={() => { setShowValue(!showValue) }} className='flex items-center'>
                      {showValue ? <RemoveRedEyeOutlined color='primary' onClick={() => { setShowValue(!showValue) }} sx={{ cursor: "pointer" }} /> : <RemoveRedEye color='primary' onClick={() => { setShowValue(!showValue) }} sx={{ cursor: "pointer" }} />}
                    </span>
                  </div>
                </div>
                <Box className="flex gap-3">
                  <Button variant='contained' sx={{ color: "#ffffff" }} size='medium' color='primary'>
                    Transfer
                  </Button>
                  <Button variant='contained' size='medium' sx={{ color: "#ffffff" }} color='primary'>
                    Deposit
                  </Button>
                </Box>

              </div>

            </Grid>
            <Grid item xs={12} lg={8}>
              <Projects />
            </Grid>

            {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}

          </Grid>
        </MDBox>
        <MDBox className={'mt-5'}>
          <Grid container>
            <Grid item lg={6}>
              <Card padding={2} sx={{ padding: 2 }}>
                <Typography color={"primary"} sx={{ fontSize: 15, fontWeight: 800 }}>
                  Notification
                </Typography>
                <Stack>
                  <Box padding={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body2'>
                      Your withdraw request Has been approved
                    </Typography>
                    <Close color='warning' cursor="pointer" />
                  </Box>
                  <Divider variant="long"></Divider>
                </Stack>
              </Card>

            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      <div className="flex flex-col gap-[30px] pt-10">
        <UsersTableComponent />
        <TransactionsTableComponent />
        <DepositsTableComponent />
        <WithdrawalsTableComponent />

      </div>
      <Footer />
    </DashboardLayout >
  )
}

export default Dashboard
