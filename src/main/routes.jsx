import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Cart from '../components/cart/cart' 
import Checkout from '../components/checkout/checkout'
import ProductList from '../components/productList/productList'

export default props => (
    <Router history={hashHistory}>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/> 
        <Route path="/products" component={ProductList}/> 
        <Redirect from='*' to='/products'/> 
    </Router>
)