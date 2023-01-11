import axios from "axios";
import ActionTypes from "../Constant";



const getProduct = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type : ActionTypes.GET_PRODUCTDATA_LOADING, 
            });
            const data =  await axios.get("https://fakestoreapi.com/products");

                dispatch({
                    type: ActionTypes.GET_PRODUCTDATA_SUCCESS,
                    payload : data.data,
                });


        } 
        catch (error) {
            console.log(error , "err");
            dispatch({
                type : ActionTypes.GET_PRODUCTDATA_FAIL
            });
        }
    };
};
const AddtoCart = (product) => {
    return (dispatch) => {
        dispatch({
            type : ActionTypes.ADD_TO_CART,
            payload : product,
        })
    };
};

const RemovefromCart = (product) => {
    return (dispatch) => {
        dispatch({
            type : ActionTypes.REMOVE_FROM_CART,
            payload : product,     
        })
    };
}

export { getProduct , AddtoCart , RemovefromCart };