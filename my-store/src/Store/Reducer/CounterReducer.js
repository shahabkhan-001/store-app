import ActionTypes from "../Constant";

const INTIALSTATE = {
        globalCounter : 1,

    }



const addCounterReducer = ( state = INTIALSTATE , action ) =>{
    switch (action.type) {
        case ActionTypes.ADD_COUNTER:
            return {
                globalCounter : ++state.globalCounter,
            }
        case ActionTypes.MINUS_COUNTER:
            return {
                globalCounter : --state.globalCounter,
            }    
        default:
            return state;
    }

};

export { addCounterReducer }