import React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ListItemText from '@mui/material/ListItemText';
import Toast from '../../Components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addItems, removeItem } from "../../store/Slices/BasketSlice"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const basketList = useSelector((state) => state.basket.list)
  const { token } = useSelector((state) => state.auth)
  const [toast, setToast] = useState({})
  let totalPrice = null
  basketList.map((item) => {

    totalPrice = totalPrice + (item?.attributes?.price) * item?.quantity
  })
  let totalItems = null
  basketList.map((item) => {

    totalItems = totalItems + item?.quantity
  })
  const handleClick = () => {
    if (token)
    setToast({ type: 'success', message: ' عملیات پرداخت با موفقیت انجام شد', show: true })
    else {
      setToast({ type: 'error', message: '    لطفا وارد حساب کاربری خود شوید   ', show: true })

    }
  }
  return (
    <>
       {toast.show && <Toast type={toast.type} message={toast.message} />}
      {basketList.length > 0 ? <div className='d-lg-flex' style={{height:"100vh"}}>
        <Box sx={{ width: { md: "100%", lg: "30%", sm: "100%", xs: "100%" }, paddingX: "3rem" }}>
          <List sx={{ width: '100%', paddingX: "1rem", bgcolor: '#252422', marginY: "2rem", borderRadius: "1rem" }}>
            <ListItem sx={{ display: "block" }}>
              <Typography variant="h6" sx={{ color: "text1", textAlign: "center", width: "100%", marginY: "1rem" }}>فاکتور نهایی</Typography>

              <div className='d-flex align-center my-3' style={{ color: "white" }}>

             
                <ListItemText className='mx-3 d-flex'>
                  جمع کل
                </ListItemText>
                <ListItemText className='mx-3'>
                  {totalPrice}
                </ListItemText>
              </div>
              <div className='d-flex align-center  my-3' style={{ color: "white" }}>

               
                <ListItemText className='mx-3 d-flex '>
                  تعداد کل محصولات
                </ListItemText>
                <ListItemText className='mx-3'>
                  {totalItems}
                </ListItemText>
              </div>
            </ListItem>
            <Button onClick={handleClick} sx={{ backgroundColor: "#cc955f", width: "100%", marginY: "1rem", color: '#252422' }}>
              پرداخت نهایی
            </Button>
          </List>

        </Box>

        <Box sx={{ width: { md: "100%", lg: "70%", sm: "100%", xs: "100%" }, paddingX: "3rem" }}>

          {basketList?.map((item) => {
            return (
              <List sx={{ display: "flex", flexDirection: "column", width: '100%', padding: "0", bgcolor: '#252422', marginY: "2rem", borderRadius: "1rem" }}>
                <ListItem
                  sx={{ width: "100%", direction: "rtl", padding: "1rem", display: "flex",flexDirection:{lg:"row",md:"row",sm:"row",xs:"column"} ,color: "text1" }}
                  key={item.id}
                  disableGutters
           
                >
                  <div className='d-lg-flex align-items-center'>
                     <img className='xs-none' style={{ borderRadius: "1rem" }} width={"150px"} height={"100px"} src={process.env.REACT_APP_BASE_URL + item.attributes?.image?.data?.attributes?.url} /> 
                    <ListItemText className='mx-3 text-center my-3' primary={item?.attributes?.name} />
                  </div>
                  <ListItemText className='mx-3' primary={`${(item?.attributes?.price) * item?.quantity} تومان`} />
                  <div className='d-flex align-items-center'>
                    <Button sx={{ fontSize: "2rem", color: "white" }} onClick={() => dispatch(addItems(item))}>+</Button>
                    <ListItemText className='mx-3' primary={item?.quantity} />
                    <Button sx={{ fontSize: "3rem", color: "white" }} onClick={() => dispatch(removeItem(item))}> -</Button>
                  </div>

                </ListItem>

              </List>
            )
          })}

        </Box>
      </div> :
        <div className='px-5 my-5 d-flex align-items-center' style={{height:"70vh"}} >

          <Alert severity="warning" sx={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
            <AlertTitle sx={{ width: "100%", textAlign: "center" }}>چیزی برای نمایش وجود ندارد</AlertTitle>
            <Link className='btn mt-4' to={"/"} style={{ backgroundColor: "#252422", color: "#cc955f" }}>
              بازگشت به صفحه اصلی
            </Link>
          </Alert>
        </div>

      }
    </>

  );
}