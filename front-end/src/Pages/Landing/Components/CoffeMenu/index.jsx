// import React from 'react'
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

// export default function CoffeMenu() {
//     return (
//         <Box sx={{backgroundColor:"#f3bc7b"}}>

//             <Typography variant="h3" gutterBottom>
//             Coffe Menu

//             </Typography>

//         </Box>
//     )
// }
import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Inbox from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Typography from '@mui/material/Typography';

export default function BasicList() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "menus?populate=*", {
      headers: {
        'Content-type': 'application/json',

      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })

  }, [])

  return (
    <Box sx={{
      width: '100%', backgroundColor: "black",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%", height: "600px",
      justifyContent: "center"
    }}>
      <Typography variant="h3" gutterBottom color={"white"}>
        منوی کافه
      </Typography>


      <List >

        {data?.map((item) => {

          return (
            <>
              <ListItem className='my-3' key={item.id} sx={{ color: "text1", display: "flex", alignItems: "center", justifyContent: "space-between",flexDirection:"row-reverse" }}>

                <ListItemIcon>
                  <FreeBreakfastIcon fontSize='large' sx={{ color: '#452a20' }} />
                </ListItemIcon>
                <ListItemText primary={`${item?.attributes?.name} `} />
             
                <ListItemText primary={item?.attributes?.description} sx={{ display: { sm: "none", xs: "none" ,md:"flex"}, justifyContent: "center", direction: "rtl", color: "#cc955f47" }} />
                <ListItemText primary={`تومان${item?.attributes?.price} `} sx={{ textAlign: "right" }} />

              </ListItem>
              <Divider sx={{ backgroundColor: "#cc955f", marginX: "10rem" }} />
            </>
          )
        })}

      </List>


    </Box>
  );
}