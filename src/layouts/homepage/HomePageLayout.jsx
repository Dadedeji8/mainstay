
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, colors, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HeroImg from "../../assets/images/HeroImg.jpg";
import sideImg from '../../assets/images/20318.jpg'
import sideImg2 from '../../assets/images/8919.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from "context/AuthContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { column, token } from "stylis";
import chartIMG from '../../assets/images/chart.jpg'
import { Link, useNavigate } from "react-router-dom";
// You can also use <link> for styles
// ..
import logobw from '../../assets/images/MSB W2.png'
import cat from '../../assets/images/cat.jpg'
import cat2 from '../../assets/images/cat2.jpg'
import cat3 from '../../assets/images/cat3.jpg'
import cat4 from '../../assets/images/cat4.jpg'
import cat7 from '../../assets/images/cat7.jpg'
import cat6 from '../../assets/images/cat6.jpg'

import logoMain from '../../assets/images/Mainstay logo2.png'
import { ExpandMore, LocationOn, Phone, WhatsApp } from "@mui/icons-material";
AOS.init();
const HomePageLayout = () => {
    const navigate = useNavigate()

    const { token } = useAuth()
    useEffect(() => {
        token ? navigate('/dashboard') : navigate('/');
    }, [])
    const faqs = [
        {
            question: 'How secure is Mainstay Bank?',
            answer: 'We use top-tier encryption and security protocols to ensure your transactions and data remain safe.'
        },
        {
            question: 'What services does Mainstay Bank offer?',
            answer: 'We provide online banking, quick transfers, savings accounts, loan options, and more.'
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach out via our 24/7 support chat or email us at support@Mainstaybank.com.'
        },
        {
            question: 'How do I open an account?',
            answer: 'You can open an account online by visiting our website and following the step-by-step registration process.'
        },
        {
            question: 'Are there any hidden fees?',
            answer: 'No, we pride ourselves on transparency. All our fees are clearly outlined on our pricing page.'
        },
        {
            question: 'Can I apply for a loan through Mainstay Bank?',
            answer: 'Yes, we offer various loan options. Check our loans section for eligibility and application details.'
        },
        {
            question: 'Does Mainstay Bank offer business accounts?',
            answer: 'Yes, we offer business accounts with tailored features to help you manage your finances effectively.'
        },
        {
            question: 'What happens if I forget my password?',
            answer: 'You can reset your password by clicking on the “Forgot Password” link on the login page.'
        },
        {
            question: 'How long does it take for a transaction to process?',
            answer: 'Most transactions are processed instantly, but some may take up to 24 hours depending on bank policies.'
        },
        {
            question: 'Can I access Mainstay Bank internationally?',
            answer: 'Yes, you can access your Mainstay Bank account from anywhere in the world as long as you have an internet connection.'
        }
    ];
    return <Box sx={{ maxWidth: "100%", overflow: 'hidden' }}>
        <PageLayout>
            <DefaultNavbar />
            <Box sx={{

                backgroundColor: 'black',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: 'center', width: '100%', height: '90vh', display: 'flex', alignItems: 'center', overflowX: 'hidden', justifyContent: 'center',

            }}>

                <Box className='text-center text-white sm:px-3' data-aos="zoom-out-up">
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
                        <div className="md:flex flex-1 flex-col gap-5 justify-center h-full" data-aos="zoom-out-right">
                            <h1 className='text-white flex-1 md:text-[60px] text-3xl uppercase font-black'>
                                Borrowing
                            </h1>
                            <p className="text-white font-thin tracking-wide mt-5 mb-6 leading-8 ">
                                Borrowing smart can positively impact your future. Find a loan or line of credit that fits your budget and helps you achieve your goals.
                            </p>
                            <div className=" bg-white w-[200px] rouned  flex justify-center rounded">
                                <Link to={'/authentication/sign-up'} className="cursor-pointer"><button className="bg-white py-2 px-5 rounded cursor-pointer">Register Now</button></Link>
                            </div>
                        </div>
                        <Box
                            sx={{
                                position: "relative",
                                flex: 1,
                                display: "flex",
                                justifyContent: "center"
                            }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
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
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
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

                        <div className="md:flex flex-1 flex-col gap-5 justify-center h-full" data-aos="zoom-out-left">
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
                <Container sx={{ marginTop: 8 }} data-aos="fade-up"
                    data-aos-duration="1000">

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
            <Box sx={{ padding: 10 }} className="bg-blue-700 py-5" data-aos="fade-up"
                data-aos-duration="1000">
                <Box marginBottom={4}>
                    <h2 className="text-2xl text-center  pb-2 uppercase font-black text-white">
                        Find the loan that is right for you.
                    </h2>
                    <div className="bg-white rounded p-1 w-32 m-auto">

                    </div>
                </Box>
                <Carousel autoPlay >

                    <Stack direction={{ xs: 'column', md: 'row' }} gap={2} >

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
                <Container >
                    <h3 id="about-us" className="text-[#004AAD] text-5xl font-black text-center uppercase" data-aos="fade-up">
                        About Us
                    </h3>
                    <img src={logoMain} alt="" className="w-2/5 m-auto object-cover " />
                    <Box marginTop={2} data-aos="fade-up">
                        <p className="text-center leading-widest text-md">
                            Mainstay Bank is the wealth management division of Mainstay  Financial. Our team consists of the experts, products and services formerly offered by Mainstay  Investor Services and Alberta Private Client.

                            By integrating investments with private banking services, we are able to deeply understand your goals and challenges to deliver personalized solutions and advice.
                        </p>




                    </Box>
                    <Box marginTop={10}>

                        <h3 className="text-blue-900 text-4xl font-black text-center mt-5" style={{ marginBottom: '20px' }} data-aos="fade-up">
                            Mainstay realizing your vision of wealth
                        </h3>
                        <Stack direction={{ md: 'row' }} gap={3} data-aos="fade-up">
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
                <Container className="m-auto my-10">
                    <h3 id="our-services" className="text-[#004AAD] text-5xl font-black text-center uppercase">
                        Our Services
                    </h3>

                    {/* <Carousel autoPlay emulateTouch  > */}


                    <Stack direction={{ xs: 'column', md: "row" }} gap={3} marginTop={5}>
                        <Card sx={{ maxWidth: 345, overflowX: 'none' }} className="overflowx-none m-auto">
                            <CardMedia
                                component="img"
                                height="140"
                                // width={"100%"}
                                image={cat6}
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
                        <Card sx={{ maxWidth: 345 }} className="overflowx-none m-auto" >
                            <CardMedia
                                component="img"
                                height="140"
                                image={cat4}
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
                        <Card sx={{ maxWidth: 345 }} className="overflowx-none m-auto">
                            <CardMedia
                                component="img"
                                height="140"
                                image={cat}
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
                        <Card sx={{ maxWidth: 345 }} className="overflowx-none m-auto">
                            <CardMedia
                                component="img"
                                height="140"
                                image={cat3}
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
                        <Card sx={{ maxWidth: 345 }} className="overflowx-none m-auto">
                            <CardMedia
                                component="img"
                                height="140"
                                image={cat7}
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
                        <Card sx={{ maxWidth: 345 }} className="overflowx-none m-auto">
                            <CardMedia
                                component="img"
                                height="140"
                                image={cat2}
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
            <section id="contact-us">
                <div className='bg-blue-800 flex flex-col justify-center w-full items-center min-h-[400px]'>
                    <div>
                        <h1 className="text-white text-4xl font-bold my-5">
                            Get in Touch
                        </h1>
                    </div>
                    <form className='flex-1 flex flex-col gap-5 px-5 max-w-[900px] w-full'>

                        <input className='text-white rounded-xl border p-3 border-white w-full' placeholder='Name' />
                        <input className='text-white rounded-xl border p-3 border-white w-full' placeholder='Email' />
                        <textarea className='border border-white rounded-xl px-3 text-white w-full' placeholder='leave a message' ></textarea>
                        <button className='border border-white px-4 py-2  border-solid hover:bg-blue-800 text-white rounded-xl cursor-pointer'><a href="mailto:support@themainstay.online"> Send Message</a> </button>
                    </form>

                </div>
            </section >
            <section>
                <section className='py-16 bg-blue-900 text-white text-center'>
                    <h1 className='text-4xl font-extrabold mb-6'>Frequently Asked Questions</h1>
                    <Container maxWidth="md">
                        <div className="grid md:grid-cols-2 gap-5">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex flex-col">
                                    <Accordion
                                        sx={{
                                            backgroundColor: "#004AAD",
                                            color: "white",
                                            marginBottom: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <AccordionSummary expandIcon={<ExpandMore sx={{ color: "white" }} />}>
                                            <Typography className="font-bold text-gray-50">{faq.question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className='text-gray-50 text-left'>{faq.answer}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </Container>

                </section>

            </section>
            <section>
                <Box component="footer" sx={{ backgroundColor: '#004AAD', color: 'white', py: 6 }}>
                    <Container maxWidth='lg'>
                        <Grid container spacing={4} className='text-white'>
                            <Grid item xs={12} md={3}>
                                <Typography variant='h6' className="text-white" gutterBottom>About Us</Typography>
                                <Typography variant='body2'>Mainstay Bank provides secure and innovative banking solutions for individuals and businesses.</Typography>
                                <Box>
                                    <LocationOn /><Typography variant="body2" className='text-white'> Head office Address:1328 Cornerway Blvd
                                        San Antonio, TX 78219, USA</Typography>


                                </Box>
                                <Box className='flex items-center'>
                                </Box> <Phone />    <a href="tel:+13466011698">  + 13466011698 </a>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant='h6' className="text-white" gutterBottom>Quick Links</Typography>
                                <ul>
                                    <li> <a href="/">Home</a></li>
                                    <li> <a href="#about-us">About</a></li>
                                    <li> <a href="#our-services">Services</a></li>
                                    <li> <a href="#contact-us">Contact</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant='h6' className="text-white" gutterBottom>Resources</Typography>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Terms of Service</li>
                                    <li>Privacy Policy</li>
                                    <li>Help Center</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography variant='h6' className="text-white" gutterBottom>Newsletter</Typography>
                                <Typography variant='body2'>Subscribe to our newsletter for the latest updates.</Typography>
                                <Box component='form' sx={{ display: 'flex', mt: 2 }}>
                                    <Button variant='contained' color='primary' className="text-white" sx={{ ml: 1 }}>Subscribe</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Stack direction='row' spacing={2} justifyContent='center' sx={{ mt: 4 }}>
                            {/* <FaFacebook size={24} className='cursor-pointer hover:text-lime-300' />
                            <FaTwitter size={24} className='cursor-pointer hover:text-lime-300' />
                            <FaInstagram size={24} className='cursor-pointer hover:text-lime-300' />
                            <FaLinkedin size={24} className='cursor-pointer hover:text-lime-300' /> */}
                        </Stack>
                        <Typography variant='body2' align='center' sx={{ mt: 4 }} className='text-gray-100'>© 2025 Mainstay Bank. All Rights Reserved.<a href="mailto:support@themainstay.online">  Send Us A Mail Now at support@themainstay.online</a></Typography>
                    </Container>
                </Box>
            </section>
            <a href="https://wa.me/13466011698" className="flex-1 rounded-full items-center justify-center fixed z-20 bottom-2 right-2 bg-green-600 flex p-5 m-3 gap-3 cursor-pointer">
                <WhatsApp className="text-white w-20 " />
            </a>
        </PageLayout>
    </Box>


};

export default HomePageLayout;
