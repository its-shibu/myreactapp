import React from 'react';
import { Typography, Container, Box, TextField, Button, Grid } from '@mui/material';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                p: 4,
            }}
        >
            <Container maxWidth="lg" sx={{ py: 4, bgcolor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: 3, boxShadow: 5, p: 3 }}>
                {/* Section Title */}
                <Typography 
                    variant="h4" 
                    align="center" 
                    sx={{ mb: 4, fontWeight: 'bold', color: '#fff' }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4}>
                    {/* Google Map Section */}
                    <Grid item xs={12} md={6}>
                        <Box 
                            sx={{
                                borderRadius: 2, 
                                overflow: 'hidden', 
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3011491055857!2d85.3146239765638!3d27.679313634689173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c6674c1fd%3A0x257da13d23456789!2sKathmandu%20Valley!5e0!3m2!1sen!2snp!4v1673900347760!5m2!1sen!2snp"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>

                    {/* Contact Form Section */}
                    <Grid item xs={12} md={6}>
                        <Box 
                            component="form" 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                borderRadius: 2,
                                boxShadow: 4,
                                p: 3,
                                bgcolor: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                label="Name" 
                                variant="outlined" 
                                fullWidth 
                                required 
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: 5 } }}
                            />
                            <TextField 
                                label="Email" 
                                variant="outlined" 
                                type="email" 
                                fullWidth 
                                required 
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: 5 } }}
                            />
                            <TextField 
                                label="Message" 
                                variant="outlined" 
                                multiline 
                                rows={4} 
                                fullWidth 
                                required 
                                InputProps={{ style: { backgroundColor: 'white', borderRadius: 5 } }}
                            />
                            <Button 
                                variant="contained" 
                                sx={{ bgcolor: '#ff9800', '&:hover': { bgcolor: '#f57c00' }, color: 'white', fontWeight: 'bold', py: 1.5 }}
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Footer/>   
        </>
    );
};

export default Contact;