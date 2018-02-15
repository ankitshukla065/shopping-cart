import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Component/Pages/HomePage';
import CartPage from './Component/Pages/CartPage';
import ProductPage from './Component/Pages/ProductPage';
import { connect } from 'react-redux';
import { fetchProducts } from './state/product/action';
import { addToCart, deleteFromCart } from './state/cart/action'; 
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }

  addProduct(product, value){
    if(value > 0)
      product["units"] = value;
    else
      product["units"] = 1;
    this.props.addToCart(product);
  }

  removeFromCart(_id){
      this.props.deleteFromCart(_id);
  }

  updateCart(id, units){
    this.props.updateItemUnits(id, units);
  }
  
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route exact path="/"  render={()=> <HomePage products={this.props.products} 
                                              cart={this.props.cart} 
                                              addProduct={this.addProduct.bind(this)} />}/>
          <Route path="/cart" render={()=> <CartPage cart={this.props.cart} removeFromCart={this.removeFromCart.bind(this)}/>} />
          <Route path="/product/:productId" render={()=> <ProductPage products={this.props.products} addProduct={this.addProduct.bind(this)} />} />
          </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.product.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: bindActionCreators(fetchProducts, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch),
  deleteFromCart: bindActionCreators(deleteFromCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
