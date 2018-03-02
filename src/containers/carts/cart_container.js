import React, { Component } from 'react';
import CartList from '../../conponents/pages/cart';
import CartItem from '../../conponents/pages/cart_item';
import CartResult from '../../conponents/pages/cart_result';
import {connect} from 'react-redux'
import * as Notify from '../../constants/message';
import {removeItemCart,changeQuantity,changeMessage} from '../../actions/index'
 class CartContainer extends Component {
    render() {
        var {carts} = this.props;
        return (
            <CartList>
            {this.showCart(carts)}
            {this.totalCart(carts)}
            </CartList>
        );
    }

    showCart(cart){
        var result = <tr><td>{Notify.MSG_CART_EMPTY}</td></tr>;
        if(cart.length>0){
            result = cart.map((item,index)=>{
                return <CartItem key={index} cart={item} 
                removeItemCart={this.props.onRemoveItem} 
                changeQuantity={this.props.onChangeQuantity} 
                changeMessage = {this.props.onChangeMessage}
                carts={cart}
                 />;
            });
        }  
        return result;
    }
    totalCart(cart){
        var total = 0;
        if(cart.length > 0 ){
            for(var i=0;i<cart.length ; i++){
                total +=cart[i].product.price * cart[i].quantity;
            }
            return <CartResult total={total} />
        }
        return null;
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        carts:state.cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onRemoveItem: (cart) =>{
           dispatch(removeItemCart(cart))
       },
       onChangeQuantity: (product,status)=>{
        dispatch(changeQuantity(product,status))
       },
       onChangeMessage:(message)=>{
           dispatch(changeMessage(message));
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);

