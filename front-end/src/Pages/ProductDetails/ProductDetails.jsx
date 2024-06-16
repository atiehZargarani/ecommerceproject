import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addItems} from "../../store/Slices/BasketSlice"

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState()
  const dispatch=useDispatch()
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `products/${id}?populate=*`, {
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': `Bearer ${token}`, // notice the Bearer before your token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })

  }, [])
  return (
    <Box sx={{height:"70vh"}} >

      <Card sx={{ bgcolor: "#252422", marginY: "5rem", marginX: "2rem", }}>

        <div className='d-flex flex-column flex-md-row flex-lg-row'>
          <CardMedia
            component="img"
            alt="green iguana"
            width="100%"
            height="400"
            image={process.env.REACT_APP_BASE_URL + data?.attributes?.image?.data?.attributes?.url}
          />
         <div className='d-flex flex-column justify-content-between'>
         <CardContent>
            <Typography gutterBottom color="white" variant="h5" component="div">
              {data?.attributes?.name}
            </Typography>
            <Typography variant="body2" color="text1" sx={{ direction: "rtl", marginY: "3rem" }}>
              {data?.attributes.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end", padding: "1rem"}}>
          <Button size="small" sx={{ backgroundColor: "#cc955f", color: "#252422", padding: "10px" }} onClick={()=>dispatch(addItems(data))}>
            اضافه به سبد خرید
          </Button>
        </CardActions>
         </div>
        </div>
      
      </Card>

    </Box>
  )
}
