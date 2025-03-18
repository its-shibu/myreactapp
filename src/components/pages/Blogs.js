import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Typography, Container, Box } from '@mui/material';

const Blogs = () => {
    return (
        <>
            <Navbar />

            <Typography 
                variant="h3" 
                align="center" 
                sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
            >
                Blogs
            </Typography>

            <Container maxWidth="md" sx={{ py: 3 }}>
                <Box 
                    className="blog" 
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        p: 3,
                        boxShadow: 3,
                        '&:hover': { boxShadow: 6 },
                    }}
                >
                    <Box 
                        className="blog-content" 
                        sx={{ 
                            flex: 3, 
                            p: 2, 
                            textAlign: { xs: 'center', sm: 'left' }
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            sx={{ fontWeight: 'bold', mb: 1 }}
                        >
                            Blog Title
                        </Typography>
                        <Typography variant="body1">
                            A brief description or summary of the blog content goes here. It's concise, engaging, and invites readers to learn more.
                        </Typography>
                    </Box>
                    <Box 
                        className="blogger-info" 
                        sx={{ 
                            flex: 1, 
                            p: 2, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'
                        }}
                    >
                        <Box 
                            className="blogger-image" 
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                mb: 1,
                                boxShadow: 3,
                            }}
                        >
                            <img 
                                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/484373604_2308422212865704_3863452532428405223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=siOB3uT0n7AQ7kNvgHIBMs8&_nc_oc=AdiXoc3aweDrmCv_WX8MXzSvRGe8FWsVNVYT_3XZyHknJUyDWTfqhrvykr9EymLof3RsqCbBnzceEniSYUVdwNf8&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=65pbbe6NJ4Ik7Oxzf3xOLA&oh=00_AYGRAd1oKugKfL_XE6_oQ58jhDGdtgbxTojhnnZPJHgRYw&oe=67DF6296" 
                                alt="Blogger" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </Box>
                        <Typography 
                            variant="subtitle2" 
                            sx={{ fontWeight: 'medium' }}
                        >
                            Shibu Subba
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <Footer />
        </>
    );
};

export default Blogs;
