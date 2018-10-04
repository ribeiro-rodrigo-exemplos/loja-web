import React, { Component } from 'react'

import ProductView from '../productList/productView'

import Header from '../header/header'
import BackItem from '../header/backItem' 
import CheckoutItem from '../header/checkoutItem'

import ProductGrid from '../productList/productGrid'

export default class Cart extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div>
                <Header items={[<CheckoutItem/>,<BackItem/>]}/> 
                <div className="container cart-container">
                    <div className="py-5 text-center">
                        <h2>Carrinho de compras</h2>
                        <p className="lead">
                            Todos os produtos adicionados ao seu carrinho. 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-8 order-2">
                            <ProductGrid cols="2" products={this._findProductsCart()} clickHandler={this._cartListener.bind(this)}/> 
                        </div>
                        <div className="col-md-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Seu carrinho</span>
                                <span className="badge badge-secondary badge-pill">{this._qtde}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Subtotal</h6>
                                    </div>
                                    <span className="text-muted">R$ {this._total}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Entrega</h6>
                                    </div>
                                    <span className="text-muted">Grátis</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Desconto</h6>
                                    </div>
                                    <span className="text-muted">0</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0 text-success">Total</h6>
                                    </div>
                                    <span className="text-success">R$ {this._total}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    _cartListener(productEvent){
        let products = JSON.parse(sessionStorage.getItem('products') || []).map(product => {
            if(product._id == productEvent._id)
                return {...product,added:false}; 
            
            return product; 
        })

        sessionStorage.setItem('products',JSON.stringify(products)); 
        this.setState({...this.state,products})
    }

    _findProductsCart(){
        const products = JSON.parse(sessionStorage.getItem('products') || '[]').filter(product => product.added)
        this._qtde = products.length 
        this._total = products.reduce((total,product) => total+product.price,0)
        return products
    }
} 
