
import React, {Component} from 'react';

const Product = (props) => {
    // const {name, price, imgurl} = this.props.inventory

    console.log(props.inventory)
    return(
            <div className="Product">
                <div className="product-box">
                    <p className="product-name"></p>
                    <p className="product-title"></p>
                    <p className="product-price"></p>   
                </div>    
                <div className="product-button-box">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>    
            </div>
        )
}

export default Product;