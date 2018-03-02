import React, { Component } from 'react';
import Header from './conponents/layouts/header';
import Footer from './conponents/layouts/footer';
import Message from './conponents/pages/message';
import ProductContainer from './containers/products/product_container';
import CartContainer from './containers/carts/cart_container';
import MessageContainer from './containers/messages/message';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer/>
                <MessageContainer/>
               <CartContainer/>
                
            </div>
        </main>
       <Footer/>
    </div>
    );
  }
}

export default App;
