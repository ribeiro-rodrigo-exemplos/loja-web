import React from 'react'

import ProductView from './productView'

export default props => {

    const clickHandler = props.clickHandler
    
    const renderProducts = () => {
        const products = props.products || []
        let cols = props.cols || 3; 
        cols = 12/cols; 

        return products.map((product,index) => (
            <div key={index} className={`col-md-${cols}`}>
                <ProductView product={product} clickHandler={clickHandler}/> 
            </div>
        ))
    }

    return (
        <div className="album py-5 bg-light">
            <div className="container">
            <div className="row">
                {renderProducts()}
            </div>
            </div>
        </div>
    )
}

