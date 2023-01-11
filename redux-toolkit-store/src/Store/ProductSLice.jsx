import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("product/fetch" , async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
});

// const statUse = {
//     LOADING: "loading",
//     IDLE: "idle",
//     ERROR: "error",
// }

const productSlice = createSlice({
    name : "product",
    initialState : {
        data : [],
        status : false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending , ( state)=> {
            state.status = true;
        });
        builder.addCase(fetchProduct.fulfilled , ( state , action)=> {
            state.status = false;
            state.data = action.payload 
        });        
        builder.addCase(fetchProduct.rejected , ( state)=> {
            state.status = false;
        });
    }
})

const { reducer } = productSlice;
export  { reducer as productSlice }


