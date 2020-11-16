import React from 'react';
import {withRouter} from 'react-router-dom'


function Product(props) {
  let {id, name, price, imgurl} = props.product;

  return (
    <div className='product-top-box'>
      <div className='product-imgurl'>{imgurl}</div>

      <div className='product-bottom-box'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>${price}</p>
      </div>
      <div className='product-buttons'>
        <button className="delete-button" onClick={()=> props.deleteProduct(id)}>Delete</button>
        <button className="edit-button" onClick={() => props.history.push(`/edit/${id}`)}>Edit</button>
      </div>
    </div>
  )
}

export default withRouter(Product);
