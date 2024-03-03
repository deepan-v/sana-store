import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    Basket:12
}

let ProductSlice = createSlice({
    name:'Product',
    initialState,

    reducers:{
        BasketUpdate:(state , action)=>{
            state.Basket +=1
        }
    }
})

export default ProductSlice.reducer