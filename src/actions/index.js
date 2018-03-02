import * as actions from '../constants/actions_type';

export const addToCard = (product,quantity) =>{
    return {
        type:actions.ADD_TO_CART,
        product,
        quantity
    }
}

export const removeItemCart = (cart)=>{
    return {
        type:actions.REMOVE_ITEM_CART,
        cart
    }
}

export const changeQuantity = (product,status)=>{
    return {
        type:actions.CHANGE_QUANTITY_CART,
        product,
        status
    }
}

export const changeMessage = (message) =>{
    return {
        type:actions.CHANGE_MESSAGE,
        message
    }
}


