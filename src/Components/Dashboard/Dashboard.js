import axios from 'axios';
import React, {Component} from 'react';
import Product from '../Product/Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        axios
        .get('/api/inventory')
        .then((res) => {
          this.setState({inventory: res.data})
        })
        .catch(error => {
          console.log(error)
        })
      }

    render(){
        const {inventory} = this.props
        
        const inventoryMapped = inventory.map((product) => (

            <div className="inventory-mapped" key={product.id}>
                <div className="product-img"></div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-buttons">
                    <button className="delete-button">Delete</button>
                    <button className="edit-button">Edit</button>
                </div>

            </div>
        ))
    return(
        <div className="inventory-list">
           <Product products={inventoryMapped}/>
            
        </div>
        )
    }
}


export default Dashboard;