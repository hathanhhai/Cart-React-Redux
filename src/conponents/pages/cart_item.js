import React, { Component } from 'react';
import * as Notify from '../../constants/message'


class CartItem extends Component {
  render() {
    return (
        <tr>
        <th scope="row">
            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{this.props.cart.product.name}</strong>
            </h5>
        </td>
        <td>{this.props.cart.product.price}$</td>
        <td className="center-on-small-only">
            <span className="qty">{this.props.cart.quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={(e)=>this.onChangeQuantity(false)}
                    >
                    <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick={(e)=>this.onChangeQuantity(true)}
                    >
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.props.cart.product.price * this.props.cart.quantity}$</td>
        <td>
            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item"
                onClick={this.removeCart}
                >
                X
            </button>
        </td>
    </tr>
    );
  }

  onChangeQuantity =(e)=>{
      this.props.changeQuantity(this.props.cart,e);
      this.props.changeMessage(Notify.MSG_UPDATE_CART_SUCCESS);
    }
    
    removeCart = ()=>{
        this.props.removeItemCart(this.props.cart);
        if(this.props.carts){
            this.props.changeMessage(Notify.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
        }

  }

}

export default CartItem;
