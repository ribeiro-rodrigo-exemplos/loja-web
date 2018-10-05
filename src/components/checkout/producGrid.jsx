import React from 'react'

export default props => {

    const products = props.products || []
    const qtde = products ? products.length : 0 
    const total = products.reduce((total,product) => total+product.price,0)

    const renderProducts = () => {
        
        return products.map(product => (
            <li key={product._id} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{product.name}</h6>
                </div>
                <span className="text-muted">R$ {product.price}</span>
            </li>
        ))
    }

    return (
        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Seu carrinho</span>
                <span className="badge badge-secondary badge-pill">{qtde}</span>
            </h4>
            <ul className="list-group mb-3">
                {renderProducts()}
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Total</h6>
                        <small className="text-muted">Valor total da compra</small>
                    </div>
                    <span className="text-success">R$ {total}</span>
                </li>
            </ul>
        </div>

    )
}
