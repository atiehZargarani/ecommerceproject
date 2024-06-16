import React, { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addItems} from "../../../../store/Slices/BasketSlice"

export default function ProductsCards({limit}) {
  const { basket } = useSelector((state) => state.basket)

  const dispatch=useDispatch()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "products?populate=*", {
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
<div class="">
  <div class="row align-items-center justify-content-center px-5 ">
     {data.slice(0, limit ? limit : data.length).map((item) => {
     
        return (
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 mt-4 px-2 d-flex justify-content-center">
          <Card sx={{ maxWidth: 300 }}>
            
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={process.env.REACT_APP_BASE_URL+item.attributes?.image?.data?.attributes?.url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.attributes?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item?.attributes.description}
              </Typography>
            </CardContent>
            <CardActions sx={{marginBottom:"1rem"}}>
              <Button size="small" sx={{ width: "50%",backgroundColor:"#252422" ,marginX:"2px"}}>
                <Link to={`/prodetails/${item.id}`} style={{color:"#cc955f"}}> 
                جزییات
                </Link>
              </Button>
              <Button size="small" sx={{ width: "50%",marginX:"2px" ,backgroundColor:"#cc955f",color:"#252422"}} onClick={()=>dispatch(addItems(item))}>
        اضافه به سبد خرید
              </Button>
            </CardActions>
          </Card>
        </div>
         
        )
      })}
   
</div>
</div>
  //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
  // <Grid item xs={12} >
 
  // </Grid>
  // // </Grid>
    // <Box sx={{display:"flex",gap:"1rem" ,padding:"3px"}}>
    
    // </Box>
  );
}