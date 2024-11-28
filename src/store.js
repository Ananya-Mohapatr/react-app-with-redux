import {createStore} from 'redux'
import CartReducer from './Reducers/cartReducer'


const store = createStore(CartReducer)
export default store