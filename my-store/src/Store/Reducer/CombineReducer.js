import { combineReducers } from "redux";
import { GetProductReducer } from "./ProductReducer";
import { AddToCartReducer } from "./ProductReducer"; 
import { addCounterReducer } from "./CounterReducer";

export const combineReducer = combineReducers({
    addCounterReducer : addCounterReducer ,
    GetProductReducer : GetProductReducer,
    AddToCartReducer : AddToCartReducer ,
})


