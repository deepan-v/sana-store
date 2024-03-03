import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Features/Product'

export default configureStore({
    reducer:{
        Items:ProductReducer
    }
})