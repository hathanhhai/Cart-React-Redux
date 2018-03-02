import {combineReducers} from 'redux'
import product from './products/product';
import cart from './carts/cart';
import message from './messges/message'
const Reducer = combineReducers({
    product,
    cart,
    message
})


export default Reducer;
