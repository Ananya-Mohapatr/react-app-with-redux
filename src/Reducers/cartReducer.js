import { ADD_ITEM,DELETE_ITEM } from "../ActionTypes/actionTypes";
const initialState ={
    numOfItems:0
}
const cartReducer = (state = initialState,action)=>{
    console.log("action val",action)
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                numOfItems:state.numOfItems+Number(action.payload)
            };
        case DELETE_ITEM:
            return{
                ...state,
                numOfItems:state.numOfItems-Number(action.payload)
            };
        default: return state
    }
}
export default cartReducer