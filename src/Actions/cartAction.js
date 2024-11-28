import { ADD_ITEM,DELETE_ITEM } from "../ActionTypes/actionTypes";
const addItems = (val)=>{
    console.log("vallll",val)
   return{
    type:ADD_ITEM,
    payload:val
   }
}
const deleteItems = (val) =>{
    return{
        type:DELETE_ITEM,
        payload:val
    }
}
export {addItems,deleteItems};
