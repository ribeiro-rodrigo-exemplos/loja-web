import React , {Component} from 'react'

import ProductGrid from './producGrid'

export default class Checkout extends Component{
    constructor(props){
        super(props); 

        this.state = this._reset(); 
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
                        <form noValidate className="needs-validation" onSubmit={this._requestBuy.bind(this)}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">Nome*</label>
                                    <input onChange={this._handleName.bind(this)} type="text" className="form-control" id="firstName" placeholder="" value={this.state.name} required></input>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Sobrenome*</label>
                                    <input onChange={this._handleLastName.bind(this)} value={this.state.lastName} type="text" className="form-control" id="lastName" placeholder=""  required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email*</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input onChange={this._handleEmail.bind(this)} value={this.state.email} type="email" className="form-control" id="email" placeholder="seuemail@exemplo.com" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endereco">Endereço*</label>
                                <input onChange={this._handleAddress.bind(this)} value={this.state.address} type="text" className="form-control" id="endereco" placeholder="Digite seu endereço" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cep">CEP*</label>
                                <input onChange={this._handleCep.bind(this)} value={this.state.cep} type="text" className="form-control" id="cep" placeholder="Digite seu cep" required/>
                            </div>
                            <hr className="mb-4"/>
                            <h4 className="mb-3">Dados do pagamento</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nomeCartao">Nome no cartão*</label>
                                    <input onChange={this._handleNameCard.bind(this)} value={this.state.nameCard} type="text" className="form-control" id="nomeCartao" required/>
                                    <small className="text-muted">Nome completo impresso no cartão</small>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="numeroCartao">Número no cartão*</label>
                                    <input onChange={this._handleNumberCard.bind(this)} value={this.state.numberCard} type="text" className="form-control" id="numeroCartao" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="ccExpiracao">Expiração*</label>
                                    <input onChange={this._handleExpiration.bind(this)} value={this.state.expiration} type="month" className="form-control" id="ccExpiracao" required/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cvv">CVV*</label>
                                    <input onChange={this._handleCVV.bind(this)} value={this.state.cvv} type="number" className="form-control" id="cvv" required/>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <button className="bt bt-primary btn-lg btn-block" type="submit">Confirmar</button>
                            <br/> 
                        </form>
                    </div>
                </div>

                <div className="customModal" style={this.state.modal}>
                    <header>Parabéns!!</header>
                    Seu pagamento está sendo processado. Entreramos em contato com você por email.
                    <footer>
                        <button onClick={this._handleCloseModal.bind(this)} className="btn btn-success">Fechar</button>
                    </footer>
                </div>

                <div className="loader" style={this.state.loader}>
                    <header>Aguarde...</header>
                    <img className="img-fluid" src="img/spinner.gif"/>
                </div>

            </div>
        )
    }

    _reset(){
        return {
            name:'',
            lastName: '', 
            email: '',
            address: '',
            cep: '', 
            nameCard:'',
            numberCard:'',
            expiration:'',
            cvv:'',
            modal:{
                display:'none'
            },
            loader:{
                display:'none'
            }
        }
    }

    _handleName(e){
        this.setState({...e.state,name:e.target.value}); 
    }

    _handleLastName(e){
        this.setState({...e.state,lastName:e.target.value}); 
    }

    _handleEmail(e){
        this.setState({...e.state,email:e.target.value}); 
    }

    _handleAddress(e){
        this.setState({...e.state,address:e.target.value}); 
    }

    _handleCep(e){
        this.setState({...e.state,cep:e.target.value}); 
    }

    _handleNameCard(e){
        this.setState({...e.state,nameCard:e.target.value}); 
    }

    _handleNumberCard(e){
        this.setState({...e.state,numberCard:e.target.value}); 
    }

    _handleExpiration(e){
        this.setState({...e.state,expiration:e.target.value}); 
    }

    _handleCVV(e){
        this.setState({...e.state,cvv:e.target.value}); 
    }

    _findProductsCart(){
        return JSON.parse(sessionStorage.getItem('products') || '[]').filter(product => product.added)
    }

    _handleCloseModal(e){
        const products = JSON.parse(sessionStorage.getItem('products') || '[]').map(product => {
            return {...product,added:false}; 
        })

        sessionStorage.setItem('products',JSON.stringify(products)); 
        this.setState(this._reset())
    }

    _requestBuy(e){

        this.setState({...this.state,loader:{display:''}})  

        setTimeout(() => {
            this.setState({...this.state,loader:{display:'none'},modal:{display:''}})
        },4000); 
    }
}

