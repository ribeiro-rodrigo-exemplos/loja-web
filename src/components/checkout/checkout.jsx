import React , {Component} from 'react'

import ProductGrid from './producGrid'

export default class Checkout extends Component{
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div className="container container-checkout">
                <div className="py-5 text-center">
                    <h2>Formulário de compra</h2>
                    <p className="lead">
                        Confirme seus dados para a finalização da compra. 
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <ProductGrid products={this._findProductsCart()}/>  
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Dados do comprador</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">Nome</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required></input>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Sobrenome</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="email" className="form-control" id="email" placeholder="seuemail@exemplo.com" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" className="form-control" id="endereco" placeholder="Digite seu endereço" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cep">CEP</label>
                                <input type="text" className="form-control" id="cep" placeholder="Digite seu cep" required/>
                            </div>
                            <hr className="mb-4"/>
                            <h4 className="mb-3">Dados do pagamento</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nomeCartao">Nome no cartão</label>
                                    <input type="text" className="form-control" id="nomeCartao" required/>
                                    <small className="text-muted">Nome completo impresso no cartão</small>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="numeroCartao">Número no cartão</label>
                                    <input type="text" className="form-control" id="numeroCartao" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="ccExpiracao">Expiração</label>
                                    <input type="text" className="form-control" id="ccExpiracao"/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" className="form-control" id="cvv"/>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <button className="bt bt-primary btn-lg btn-block" type="button">Confirmar</button>
                            <br/> 
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    _findProductsCart(){
        return JSON.parse(sessionStorage.getItem('products') || '[]').filter(product => product.added)
    }
}

