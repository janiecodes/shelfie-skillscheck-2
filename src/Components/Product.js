
import React, {Component} from 'react';

const Product = (props) => {
    // const {name, price, imgurl} = this.props.inventory

    console.log(props.inventory)
    return(
            <div className="Product">
                <div className="product-box">
                    <p className="product-name">{this.props.inventory.name}</p>
                    <p className="product-price">{this.props.inventory.price}</p>
                    <p className="product-imgurl">{this.props.inventory.imgurl}</p>   
                </div>    
                <div className="product-button-box">
                    {/* <button>Delete</button>
                    <button>Edit</button> */}
                    {/* <Link to='/edit/:id' className='edit'>Edit</Link> */}
                </div>    
            </div>
        )
}

export default Product;