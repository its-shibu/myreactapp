import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { Brush, Code, VideoLibrary, DesignServices, Web, Animation } from '@mui/icons-material';

const services = [
    { title: 'Graphic Design', icon: <Brush fontSize="large" />, description: 'Professional design solutions for branding, marketing, and more.' },
    { title: 'Web Development', icon: <Code fontSize="large" />, description: 'Modern and responsive websites tailored to your needs.' },
    { title: 'Video Editing', icon: <VideoLibrary fontSize="large" />, description: 'Engaging video content with smooth transitions and effects.' },
    { title: 'Branding', icon: <DesignServices fontSize="large" />, description: 'Creating strong brand identities with logos and visuals.' },
    { title: 'UI/UX Design', icon: <Web fontSize="large" />, description: 'User-friendly and aesthetic designs for applications.' },
    { title: 'Motion Graphics', icon: <Animation fontSize="large" />, description: 'Animated content for advertisements, intros, and branding.' },
  ];
  
const Services = () => {
  return (
    <>
    
    <Navbar/>
    
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }
              }}
            >
              <CardContent>
                {service.icon}
                <Typography variant="h6" mt={1}>{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    <Footer/>
    
    </>
  )
}

export default Services