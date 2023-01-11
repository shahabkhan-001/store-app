import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartSlice";
import { productSlice } from "./ProductSLice";

const store = configureStore({
    reducer : {
        cart : cartSlice,
        products : productSlice, 
    }
});
console.log(store)
export default store;