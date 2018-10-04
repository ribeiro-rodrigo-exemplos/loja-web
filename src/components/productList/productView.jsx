import React, { Component } from 'react'

export default props => {


  const product = props.product; 
  const clickHandler = props.clickHandler

  const styles = {
      height: '225px', 
      width: '100%', 
      display: 'block'
  }

  return (
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" alt="Thumbnail [100%x225]" style={styles} src={product.img} data-holder-rendered="true"/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className={`btn btn-md ${product.added ? 'btn-success' : 'btn-outline-secondary'}`} onClick={(e) => clickHandler(product)}>
              <i className={`fa ${product.added ? 'fa-check' : 'fa-shopping-cart'} fa-lg`} aria-hidden="true"></i>
            </button>
          </div>
          <small className="text-success">R$ {product.price}</small>
        </div>
      </div>
    </div>

  )

}
