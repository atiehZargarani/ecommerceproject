import {  configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice"
import BasketSliceReducer from "./Slices/BasketSlice"

const store=configureStore({
    reducer:{
        auth:AuthSliceReducer,
        basket:BasketSliceReducer
    }
})
export default store