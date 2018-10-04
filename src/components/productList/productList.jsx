import React, { Component } from 'react'

import Header from '../header/header'
import CartItem from '../header/cartItem' 
import CheckoutItem from '../header/checkoutItem'

import Jumbotron from './jumbotron'
import Controls from './controls'
import ProductGrid from './productGrid'

import StoreApi from '../../services/storeApi'

export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {categories:[]}
        this._storeApi = new StoreApi();
        
        this._findCategories(); 
        this._findProducts(); 
    }

    render(){        
        return (
            <div>
                <Header items={[<CheckoutItem/>,<CartItem/>]}/>
                <main className="container" role="main">
                    <Jumbotron/> 
                    <Controls 
                        categories={this.state.categories || []} 
                        handleCategory={this._selectCategory.bind(this)}
                        handleOrderPrice={this._selectOrderPrice.bind(this)}/>
                    <ProductGrid cols="3" products={this.state.products || []} clickHandler={this._addProductCart.bind(this)}/> 
                </main> 
            </div>
        )
    }

    _addProductCart(product){
        let products = this.state.products.map(p =>{
            if(p._id == product._id){
                const newProduct = {...p,added:!p.added}; 
                this._saveProductCart(newProduct); 
                return newProduct; 
            }
            else
                return p; 
        })

        this.setState({...this.state,products}); 
    }

    _saveProductCart(product){
        let products = this._restoreProducts().map(p => {
            if(p.id == product.id)
                return product; 
            else
                return p; 
        })

        this._saveProductsCart(products); 

    }

    _saveProductsCart(products){
        sessionStorage.setItem('products',JSON.stringify(products)); 
    }

    _selectCategory(event){
        const category = event.target.value; 
        
        let products = this._restoreProducts().filter(product => category == 'head' || product.category == category)
        products = this._order(this.state.orderType || 'head',products); 
        this.setState({...this.state,products});
        
    }

    _selectOrderPrice(event){
        
        const orderType = event.target.value
        const products = this._order(orderType,this.state.products); 

        this.setState({...this.state,products,orderType}); 
    }

    _order(orderType,products){
        let productSorted = []

        if(orderType == 'head')
            productSorted = products.sort((a,b) => {
                if(a._id < b._id)
                    return -1; 
                if(a._id > b._id)
                    return 1; 
                return 0; 
            })

        if(orderType == 'price')
            productSorted = products.sort((a, b) => a.price - b.price)
        
        if(orderType == 'name')
            productSorted = products.sort((a, b) => {
                if(a.name < b.name)
                    return -1; 
                if(a.name > b.name)
                    return 1; 
                return 0; 
            })

        return productSorted
    }
    
    _findCategories(){
        this._storeApi.categories.then(categories => this.setState({...this.state, categories})) 
    }

    _findProducts(){

        const productsInCart = JSON.parse(sessionStorage.getItem('products') || '[]').filter(product => product.added) 

        this._storeApi.products.then(products => {

            products = products.map(product => {
                if(productsInCart.some(p => p._id == product._id))
                    return {...product,added:true}
                
                return product
            })

            this._saveProductsCart(products); 
            this.setState({...this.state,products})
        })
    }

    _restoreProducts(){
        return JSON.parse(sessionStorage.getItem("products")); 
    }
}
