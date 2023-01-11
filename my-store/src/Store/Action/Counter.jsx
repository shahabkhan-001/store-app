import ActionTypes from "../Constant";


export  const AddCounter = () => {
    return (dispatch) => {
        dispatch({
            type : ActionTypes.ADD_COUNTER
        })
    }
};

export const MinusCounter = () => {
    return (dispatch) => {
        dispatch({
            type : ActionTypes.MINUS_COUNTER
        })
    }
};