import React,{useState} from 'react'
import { connect } from 'react-redux'
import { deleteItems,addItems } from './Actions/cartAction'
const PreviewPage = ({count,increment,decrement}) => {
    const [inputVal,setInputVal] = useState(count)
  return (
    <div className="cart">
        <h2>Number of items in Cart:{count}</h2>
        <input placeholder='Enter value to add/delete' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
        <div>
        <button className="green" onClick={()=>increment(inputVal)}>Add Item to Cart</button>
        <button className="red" onClick={()=>decrement(inputVal)}>Delete item from Cart</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        count:state.numOfItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        increment:(val)=>dispatch(addItems(val)),
        decrement:(val)=>dispatch(deleteItems(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PreviewPage)