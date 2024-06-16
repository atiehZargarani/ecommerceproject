import React from 'react'

import MainSLider from "./Components/MainSlider"
import CoffeMenu from './Components/CoffeMenu'
import ProductsCards from '../Products/Components/ProductsCards'

import Blog from "./Components/‌Blog"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className='mt-3'>
        <MainSLider />
      </div>


      <div className='mt-5'>
        <CoffeMenu />
      </div>

      <div className='d-block  d-lg-flex align-items-center mt-5 py-5' style={{ backgroundImage: 'linear-gradient(to right, rgb(37, 36, 34), rgb(69, 42, 33))' }}>
        <Typography color={"white"} Typography gutterBottom variant="h4" component="div" sx={{ marginRight: "3rem" }}>
          محصولات  </Typography>
        <Link className='mb-2 mx-2' to="/products" style={{ fontSize: "20px", color: "#cc955f47" }}>(مشاهده همه) </Link>


        <ProductsCards limit='4' />


      </div>
      <div className='d-block  d-lg-flex align-items-center mt-5 py-5' style={{ backgroundImage: 'linear-gradient(to left, rgb(37, 36, 34), rgb(69, 42, 33))' }}>
        <Typography color={"white"} Typography gutterBottom variant="h4" component="div" sx={{  marginRight: {md: "3rem",lg:"3rem" } }}>
          مقالات  </Typography>
        <Blog />
      </div>
    </>
  )
}

export default Landing