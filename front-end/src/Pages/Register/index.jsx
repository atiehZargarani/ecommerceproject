
import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Toast from "../../Components/Toast"
import { useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import { useDispatch, useSelector } from 'react-redux';
 import { login } from '../../store/Slices/AuthSlice';
 import axios from "axios"
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [toast, setToast] = useState({})

    const fields = [
             
              {
                name:"firstname",
                label:"نام ",
                type:'string'
              },
              {
                name:"lastname",
                label:"نام خانوادگی" ,
                type:'string'
              },
              {
                name: "username",
                label: "نام کاربری ",
                type: 'string'
            },
              {
                  name: "email",
                  label: "ایمیل",
                  type: 'email'
              },
              {
                  name: "password",
                  label: "رمز عبور",
                  type: 'password'
      
              }
          ]

    const initialValues = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      
  
       
    };
    const SignInSchema = Yup.object().shape({
      email: Yup.string().email().required(" فیلد ایمیل الزامی است "),
        username: Yup.string().required("فیلد نام کاربری الزامی است "),
        firstname: Yup.string().required("فیلد نام  الزامی است "),
        lastname: Yup.string().required("فیلد نام خانوادگی الزامی است "),
        password: Yup.string()
            .required("فیلد پسورد الزامی است  ")
            .min(4, "پسورد شامل حداقل ۴ کاراکتر است"),
          
           
    });
 
    const handleSubmit = (form) => {
       
        axios.post('http://localhost:1337/api/auth/local/register', form).then(res => {
          
            
            dispatch(login({ user: res.data.user, token: res.data.jwt }))
          
             navigate('/')
            // dispatch(login(res.data))

            // data
        }).catch(e =>  setToast({ type: 'error', message: 'لطفا اطلاعات خود را به درستی وارد کنید', show: true }))
    }
    return (
        <>
            {toast.show && <Toast type={toast.type} message={toast.message} />}
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
            
                onSubmit={(values) => {
                    handleSubmit(values)
                
           
                  }}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik;
                    return (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>

<Card variant="outlined" sx={{ backgroundColor: "bg1", display: "flex", justifyContent: "center", flexDirection: "column", width:{md: "70%",sm:"100%",lg:"50%",xs: "100%"}, paddingY: "1rem",marginX:{sm:"10px",xs:"10px"} }}>

                                <Typography variant="h6" className='my-3' sx={{ color: "text1" }}> ایجاد حساب کاربری</Typography>

                                <Form>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                      {fields.map((f,index)=>{
                                        return(
                                          <div className="form-row my-2 w-100 px-5" key={index}>
                                              <div className='d-md-flex  align-items-center'>
                                              <label htmlFor={f.name} className='mx-3 mb-sm-3 mb-3 mb-md-0 mb-lg-0 w-50 text-white'>{f.label}</label>
                                              <Field
                                                  type={f.type}
                                                  name={f.name}
                                                  id={f.name}
                                                  className={errors[f.name] && touched[f.name] ?
                                                      "input-error form-control" : "form-control"}
                                              />
                                          </div>
                                          <div className='text-center my-1'>
                                              <ErrorMessage name={f.name} component="span" className="error text-danger " />
                                          </div>
                                      </div>
                                        )
                                      })}


                                        <div className="my-3 w-100 px-5">
                                            <button
                                            style={{backgroundColor:"#cc955f",color:"#252422"}}
                                                // onClick={}
                                                type="submit"
                                                className={!(dirty && isValid) ? "disabled-btn btn btn-dark px-5 w-100" : "btn btn-dark w-100  px-5"}
                                                disabled={!(dirty && isValid)}
                                            >
                                                ورود به سایت
                                            </button>
                                        </div>
                                        <div>
                                            <span>
                                            در حال حاضر حساب دارید؟
                                            </span>
                                            <Link to={"/login"} style={{color:"#cc955f"}} className='mx-2'>
                                            وارد شوید
                                            </Link>
                                        </div>
                                    </div> </Form>
                            </Card>

                        </div>


                    );
                }}
            </Formik></>

    )
}

export default Login