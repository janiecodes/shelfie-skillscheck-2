import React from 'react';


export default function Product(props) {
  let { id, name, price, imgurl } = props.product;

  return (
    <div className='product'>
      <div className='product-imgurl'>{imgurl}</div>
      <div className='product-box'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>${price}</p>
      </div>
      <div className='product-button_box'>
        <button className="delete-button" onClick={()=> props.deleteProduct(id)}>Delete</button>
        <button className="edit-button" onClick={() => props.editProduct(props.product)}>Edit</button>
      </div>
    </div>
  )
}
