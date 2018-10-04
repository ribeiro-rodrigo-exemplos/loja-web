import React, { Component } from 'react'

export default class Header extends Component{
    constructor(props){
        super(props); 
        this._props = props;         
    }

    render(){

        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm header-store">
                    <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Loja Virtual</strong>
                    </a>
                    <form className="form-inline my-2 my-lg-0">
                        {this._renderItems(this._props.items || [])}
                    </form>
                    </div>
                </div>
                </header>
        )
    }

    _renderItems(items){
        return items.map((item,index) => {
            if(index != items.length-1)
                return <span key={index}>{item}&nbsp;&nbsp;</span>
            
            return <span key={index}>{item}</span> 
        })
                
    }
}
