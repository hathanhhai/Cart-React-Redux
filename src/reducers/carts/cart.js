import * as  types from '../../constants/actions_type';
import message from '../../containers/messages/message';
import {changeMessage} from '../../actions'
var data = JSON.parse(localStorage.getItem("Cart"));

var initialState = data ? data : [];

const myReducer = (state=initialState,action)=>{
 
    switch(action.type){
        case types.ADD_TO_CART:
            var index =  findProductInCart(state,action.product);
            if(index === -1){
                state.push({
                product:action.product,
                quantity:action.quantity
                }) 
            }else{
                state[index].quantity++;
            }

            
            localStorage.setItem("Cart",JSON.stringify(state));
            return [...state ];
         case types.REMOVE_ITEM_CART:
            var index =  findProductInCart(state,action.cart);
            state.splice(index,1);
            localStorage.setItem("Cart",JSON.stringify(state));
            return [...state];

        case types.CHANGE_QUANTITY_CART:
             
            state.forEach((item,index)=>{
                if(item.product.id === action.product.product.id){
                    if(state[index].quantity>=1){
                        if(action.status){
                            state[index].quantity++;
                        }
                    }
                    if(state[index].quantity>1){
                        if(!action.status){
                            state[index].quantity--;
                        }
                    }
                       
                }
            }); 
            localStorage.setItem("Cart",JSON.stringify(state));
     
            return [...state];
        default:
        return [...state];
    }
}


var findProductInCart = (state,product) =>{
    var result =-1
    state.forEach((item,index) => {
        if(product.id===item.product.id){
            return result=index;
        }
    });
    return result;
}


export default myReducer;