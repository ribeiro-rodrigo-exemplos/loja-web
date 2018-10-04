import React from 'react'


export default props => {

    const handleCategory = props.handleCategory; 
    const handleOrderPrice = props.handleOrderPrice; 
    
    const renderCategories = () => {

        const categories = props.categories || []

        return categories.map(category => <option value={category._id} key={category._id}>{category.name}</option>)
    }

    return (
        <div className="row">
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center col-control">
                <select className="form-control form-control-sm" onChange={handleCategory}>
                    <option value="head">Categoria</option>
                    {renderCategories()}
                </select>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center col-control">
                <select className="form-control form-control-sm" onChange={handleOrderPrice}>
                    <option value="head">Ordenar</option>
                    <option value="price">Por preço</option>
                    <option value="name">Por nome</option>
                </select>
            </div>
        </div>
    )
    
}
    
