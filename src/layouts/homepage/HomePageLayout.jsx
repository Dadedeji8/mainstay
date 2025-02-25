
import { Box, Button, colors, Container, Paper, Stack, Typography } from "@mui/material";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HeroImg from "../../assets/images/HeroImg.jpg";
import sideImg from '../../assets/images/46908.jpg'
import sideImg2 from '../../assets/images/8919.jpg'
import React, { useEffect } from 'react';
import { useAuth } from "context/AuthContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { column, token } from "stylis";
import chartIMG from '../../assets/images/chart.jpg'
import { useNavigate } from "react-router-dom";
const HomePageLayout = () => {
    const navigate = useNavigate()
    // };

    const { isAuthenticated } = useAuth()
    useEffect(() => {
        // return () => {
        const token = localStorage.getItem('token')
        token ? navigate('/dashboard') : navigate('/');
        // isAuthenticated == true ? navigate('/dashboard') : navigate('/');
    }, [])
    return <Box sx={{ maxWidth: "100%", overflow: 'hidden' }}>
        <PageLayout>
            <DefaultNavbar />
            <Box sx={{

                backgroundColor: 'black',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: 'center', width: '100%', height: '90vh', display: 'flex', alignItems: 'center', overflowX: 'hidden', justifyContent: 'center',

            }}>

                <Box className='text-center text-white sm:px-3'>
                    <h1 className='text-4xl md:text-[60px]  font-black text-gray-300'>
                        Borrowing solutions tailored to your needs.
                    </h1>

                    <p className="mt-3">A line of credit is a loan you can access on demand—no questions asked</p>
                    <Button sx={{ color: 'white', marginTop: 5 }} variant="contained" size="large" color="white" > Learn More</Button>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#004AAD" }} >
                <Container  >
                    <Stack direction={{ xs: 'column', md: "row" }} padding={5} alignItems={'center'} sx={{ height: '100%', gap: 5 }} justifyContent={'center'}>
                        <div className="md:flex flex-1 flex-col gap-5 justify-center h-full">
                            <h1 className='text-white flex-1 md:text-[60px] text-3xl uppercase font-black'>
                                Borrowing
                            </h1>
                            <p className="text-white font-thin tracking-wide mt-5 mb-6 leading-8 ">
                                Borrowing smart can positively impact your future. Find a loan or line of credit that fits your budget and helps you achieve your goals.
                            </p>
                            <div className=" bg-white w-[200px] rouned  flex justify-center rounded">
                                <button className="bg-white py-2 px-5 rounded">Register Now</button>
                            </div>
                        </div>
                        <Box
                            sx={{
                                position: "relative",
                                flex: 1,
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src={sideImg}
                                alt="Loan Options"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    position: "relative",
                                    zIndex: 1
                                }}
                            />
                            {/* White Overlay */}
                            <Box
                                sx={{
                                    content: '""',
                                    position: "absolute",
                                    top: 15,
                                    left: 20,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#ffffff", // Subtle white overlay
                                    zIndex: 0
                                }}
                            />
                        </Box>
                    </Stack>

                </Container>

            </Box>
            <Box>
                <Container>
                    <Stack direction={{ xs: 'column-reverse', md: "row" }} padding={5} alignItems={'center'} sx={{ height: '100%', gap: 5, }} justifyContent={'center'}>

                        <Box
                            sx={{
                                position: "relative",
                                flex: 1,
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src={sideImg2}
                                alt="Loan Options"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    position: "relative",
                                    zIndex: 1
                                }}
                            />
                            {/* White Overlay */}
                            <Box
                                sx={{
                                    content: '""',
                                    position: "absolute",
                                    top: 15,
                                    left: 20,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#004AAD", // Subtle white overlay
                                    zIndex: 0
                                }}
                            />
                        </Box>

                        <div className="md:flex flex-1 flex-col gap-5 justify-center h-full">
                            <h1 className='text-[#004AAD] flex-1 md:text-[25px] text-3xl uppercase font-black'>
                                Sometimes what you want to do in life requires a loan.

                            </h1>
                            <p className=" font-normal tracking-wide mt-5 mb-6 leading-8 text-[#004AAD]">
                                From financing one-time purchases to once-in-a-lifetime experiences, our borrowing options can help make it happen. Loans can also help you save money by consolidating higher-interest debt.
                            </p>

                        </div>
                    </Stack>
                </Container>
            </Box>
            <Box pt={2}>
                <h1 className="text-blue-900 text-center text-4xl md:text-5xl font-black pb-1">
                    How can loan  work for you?
                </h1>
                <Container sx={{ marginTop: 8 }}>

                    <Stack direction={{ md: "row", xs: "column" }} gap={{ sm: 3, md: 5 }}>
                        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }} className="flex-1">
                            <h4 className="font font-black text-blue-800 text-md mb-1">
                                Finance your dreams

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Purchase that new car or take that dream vacation with quick access to cash without the high interest rates of a credit card or cash advance.
                            </p>
                        </Paper>
                        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }} className="flex-1" >
                            <h4 className="font font-black  text-blue-800  text-md mb-1">
                                Pay over time

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Keep it manageable by paying in scheduled instalments over a term from 1 year to a maximum of 5 years. There is no penalty for early payments and you can choose to make payments monthly, semi-monthly, bi-weekly or weekly.
                            </p>
                        </Paper>
                        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }} className="flex-1">
                            <h4 className="font font-black  text-blue-800 text-md mb-1">
                                Consolidate high-interest debt

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Borrow at a lower interest rate to pay off high-interest debts like credit cards, or just consolidate your debt so you can keep track of it.
                            </p>
                        </Paper>
                    </Stack>
                </Container>

            </Box>
            {/* <Box pt={8}>
                <h1 className="text-blue-900 text-center text-3xl md:text-5xl font-black pb-3">
                    Find the loan that is right for you.
                </h1>
                <Container sx={{ marginTop: 8 }}>

                    <Stack direction={{ md: "row", xs: "column" }} gap={{ md: 5, sm: 3 }}>

                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1 mb-2">
                            <h4 className="font font-black text-md mb-3">
                                Finance your dreams

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Purchase that new car or take that dream vacation with quick access to cash without the high interest rates of a credit card or cash advance.
                            </p>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1" >
                            <h4 className="font font-black text-md mb-3">
                                Pay over time

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Keep it manageable by paying in scheduled instalments over a term from 1 year to a maximum of 5 years. There is no penalty for early payments and you can choose to make payments monthly, semi-monthly, bi-weekly or weekly.
                            </p>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1">
                            <h4 className="font font-black text-md mb-3">
                                Consolidate high-interest debt

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Borrow at a lower interest rate to pay off high-interest debts like credit cards, or just consolidate your debt so you can keep track of it.
                            </p>
                        </Paper>
                    </Stack>

                </Container>

            </Box> */}
            <Box sx={{ padding: 10 }} className="bg-blue-700 py-5">
                <Box marginBottom={4}>
                    <h2 className="text-2xl text-center  pb-2 uppercase font-black text-white">
                        Find the loan that is right for you.
                    </h2>
                    <div className="bg-white rounded p-1 w-32 m-auto">

                    </div>
                </Box>
                <Carousel autoPlay>

                    <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>

                        <Paper sx={{ padding: 2, marginBottom: 2, }} className="flex-1 mb-2 rounded-2xl">
                            <h4 className="font font-black text-blue-900 text-md mb-3">
                                Finance your dreams

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                A new truck. A pilgrimage. A pet project. Debt consolidation. Whatever your goal, we are here to help you achieve it.
                            </p>   </Paper>


                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1" >
                            <h4 className="font font-black text-blue-900 text-md mb-3">Borrow to maximize your RRSP

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Need to borrow to catch up on your unused RRSP contributions from past years? Get up to $75,000 with flexible interest rates.
                            </p>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1">
                            < h4 className="font font-black text-md mb-3 text-blue-900">
                                4-H Loan Program
                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Through 4-H, today of youth become  leaders of tomorrow. A 4-H loan helps members buy livestock or finance approved projects.
                            </p>
                        </Paper>
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>

                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1 mb-2 bg-blue-600">
                            <h4 className="font font-black text-md mb-3">
                                Finance your dreams

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Purchase that new car or take that dream vacation with quick access to cash without the high interest rates of a credit card or cash advance.
                            </p>   </Paper>


                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1" >
                            <h4 className="font font-black text-md mb-3">
                                Pay over time

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Keep it manageable by paying in scheduled instalments over a term from 1 year to a maximum of 5 years. There is no penalty for early payments and you can choose to make payments monthly, semi-monthly, bi-weekly or weekly.
                            </p>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }} className="flex-1">
                            <h4 className="font font-black text-md mb-3">
                                Consolidate high-interest debt

                            </h4>
                            <p className="text-sm pt-2 leading-wider">
                                Borrow at a lower interest rate to pay off high-interest debts like credit cards, or just consolidate your debt so you can keep track of it.
                            </p>
                        </Paper>
                    </Stack>
                </Carousel>
            </Box>
            <Box marginTop={3}>
                <Container>
                    <h3 className="text-[#004AAD] text-5xl font-black text-center uppercase">
                        About Us
                    </h3>
                    <Box marginTop={2} >
                        <p className="text-center leading-widest text-md">
                            Mainstay Bank is the wealth management division of Mainstay  Financial. Our team consists of the experts, products and services formerly offered by Mainstay  Investor Services and Alberta Private Client.

                            By integrating investments with private banking services, we are able to deeply understand your goals and challenges to deliver personalized solutions and advice.
                        </p>




                    </Box>
                    <Box marginTop={10}>

                        <h3 className="text-blue-900 text-4xl font-black text-center mt-5" style={{ marginBottom: '20px' }}>
                            Mainstay realizing your vision of wealth
                        </h3>
                        <Stack direction={{ md: 'row' }} gap={3}>
                            <p className=" text-[16px] text-center md:text-right flex-1" style={{ lineHeight: '2rem' }} >
                                <b>People first.</b>  It is how we began and how we continue to operate. And it is working. Today, Mainstay  is an industry-leading investment firm, with over $25.6 billion in assets under administration across more than 200 advisors and 97,000 clients.

                                Mainstay Wealth is committed to making our innovative and inclusive wealth management approach available to everyone—not just a select few.  With  proven, stable investment strategies, proactive advice and deeply personalized service, we transform the advisor-client relationship and help our clients to grow their investments and improve their financial wellness.

                                It is why we are expanding beyond Alberta. With new locations in Kelowna, BC and Saskatoon, SK we see possibility all around us—in the goals and dreams of our clients and in the communities of all sizes that we serve.
                            </p>
                            <div className="flex-1">
                                <img src={chartIMG} alt="" className="flex-1 w-full object-cover " />
                            </div>
                        </Stack>
                    </Box>
                </Container>

            </Box>
            <Box marginTop={10}>
                <Container>
                    <h3 className="text-[#004AAD] text-5xl font-black text-center uppercase">
                        Our Services
                    </h3>

                    {/* <Carousel autoPlay emulateTouch  > */}


                    <Stack direction={{ xs: 'column', md: "row" }} gap={3} marginTop={5}>
                        <Card sx={{ maxWidth: 345, overflowX: 'none' }} className="overflowx-none">
                            <CardMedia
                                component="img"
                                height="140"
                                // width={"100%"}
                                image={chartIMG}
                                alt="green iguana"
                            // className="object-cover w-full"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Get custom financial services tailored to your goals.
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Investing
                                    Private Banking
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Access preferred accounts, custom borrowing and exclusive services from ATB Wealth.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Start Now</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chartIMG}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Our goal is to help you reach yours.
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div">
                                    Private Investment Counsel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Get real financial results with plans designed and managed by us, with the support of your financial advisors.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chartIMG}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Protect your legacy with financial planning.
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wealth Planning
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ensure your retirement, estate, trust and tax plans reflect your vision for the future.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                    </Stack>

                    <Stack direction={{ xs: 'column', md: "row" }} gap={3} marginTop={5}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chartIMG}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Attract employees with financial benefits.
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Group Wealth Services
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Increase employee engagement and loyalty with a customized benefits package.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Start Now</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chartIMG}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Putting funding into practice.
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div">
                                    Practice Financing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Consolidate educational debts, cover start-up costs, improve accounts receivable and more.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={chartIMG}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body-3" className="text-[12px] text-blue-300" component="div">
                                    Institutional
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Strengthen the future of your organization .
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Manage and grow your investments with help from portfolio managers who work with organizations that serve their local communities communities.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                    </Stack>
                    {/* </Carousel> */}
                </Container>
            </Box>
        </PageLayout>
    </Box>


};

export default HomePageLayout;
