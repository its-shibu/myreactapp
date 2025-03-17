import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Product from './Product';
import { Typography, Container, FormControlLabel, Checkbox, Box, Radio, RadioGroup, Link, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';






const Productspage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">

              <Typography variant='h4' color='secondary' pl={5} pt={5}>Department</Typography>

              <Box pl={5} pt={2}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                <br />

                <FormControlLabel control={<Checkbox />} label="Computers" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Mobiles" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Electronics" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Cameras" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Beauty" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Fitness" />
                <br />
              </Box>

              <Typography variant='h4' color='secondary' pl={5} pt={5}>Prices</Typography>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="price1"
                name="radio-buttons-group">
                <FormControlLabel value="discount" control={<Radio />} label="Below $ 25" />
                <FormControlLabel value="price1" control={<Radio />} label="$ 25 - $ 100" />
                <FormControlLabel value="price2" control={<Radio />} label="$ 100 - $ 500" />
                <FormControlLabel value="price3" control={<Radio />} label="$ 500 - $ 1000" />
                <FormControlLabel value="price4" control={<Radio />} label="$ 1000 - Above" />
              </RadioGroup>

              <Typography variant='h4' color='secondary' pl={5} pt={5}>Prices</Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="price1"
                name="radio-buttons-group">
                <FormControlLabel value="discount" control={<Radio />} label="Upto 5%" />
                <FormControlLabel value="discount" control={<Radio />} label="Upto 25%" />
                <FormControlLabel value="discount" control={<Radio />} label="Upto 50%" />


              </RadioGroup>
              <Typography variant='h4' color='secondary' pl={5} pt={5}>Delas</Typography>

              <Link component="button" variant="h5" color='success'>
                Delas of the day
              </Link>
              <br />
              <Link component="button" variant="h5" color='warning'>
                Flash Delas
              </Link>
              <br />
              <Link component="button" variant="h5" color='info'>
                Most Popular
              </Link>

              <Typography variant='h4' color='secondary' pl={5} pt={5}>Reviews</Typography>

              <br />
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />



            </div>
            <div className='col-md-8'>
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Productspage