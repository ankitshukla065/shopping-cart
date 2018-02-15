import React, { Component } from 'react';
import ShoppingList  from '../../Component/ShoppingList';
import Menu from '../../Component/Menu';

class HomePage extends Component{
    render(){
        const products = this.props.products;
    const cart = this.props.cart;
    return (
        <div id="App">
        <Menu itemsInCart={cart.length}/>
        <br />
        <ShoppingList products={products} addProduct={this.props.addProduct.bind(this)}/>
      </div>
    );
    }
}


export default HomePage;