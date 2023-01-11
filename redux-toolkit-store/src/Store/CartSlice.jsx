import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
    name : "cart",   
    initialState : [],
    cartItem : [],
    reducers : {
        add( state , action) {
            state.push(action.payload)
        },
        remove(state , action) {
            return state.filter((p)=> p.id !== action.payload.id)
        },
    }
});

const { actions , reducer } = cartSlice;
const { add , remove } = actions;
export { add , remove , reducer as cartSlice }