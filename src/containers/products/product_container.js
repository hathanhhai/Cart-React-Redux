import React, { Component } from 'react';
import ProductItem from '../../conponents/pages/product_item';
import ProductList from '../../conponents/pages/product';
import {connect} from 'react-redux'
import {addToCard,changeMessage} from '../../actions';
 

class ProductContainer extends Component {
    render() {
        var {products} = this.props;

    
        return (
            <ProductList> 
                {this.showProducts(products)}
            </ProductList>
        );
    }

    showProducts(data){
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if(data.length >0){
            result= data.map((item,index)=>{
                return <ProductItem key={item.id} 
                product={item} 
                addToCart={onAddToCart} 
                changeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        products:state.product
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart:(product,quantity)=>{
                dispatch(addToCard(product,1));
        },
        onChangeMessage:(message)=>{
            dispatch(changeMessage(message));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
