import axios from 'axios';
import React, {Component} from 'react';
import Product from '../Product/Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);

        // this.state = {
        //     inventory: []
        //   }
    }

    // componentDidMount = () => {
    //     this.getInventory()
    //   }
    
      
    // getInventory = () => {
    // axios
    //     .get('/api/inventory')
    //     .then((res) => {
    //       this.setState({inventory: res.data})
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   }

      deleteProduct = (id) => {
        axios
            .delete(`/api/product/${id}`)
            .then((res) => {
                this.setState({inventory: res.data})
            })
            .catch((error) => console.log(error))
      }

    render(){
        // const {inventory} = this.props
        
        // const inventoryMapped = inventory.map((product) => (

        //     <div className="inventory-mapped" key={product.id}>
        //         <div className="product-img"></div>
        //         <div className="product-name">{product.name}</div>
        //         <div className="product-price">{product.price}</div>
        //         <div className="product-buttons">
        //             <button className="delete-button">Delete</button>
        //             <button className="edit-button">Edit</button>
        //         </div>

        //     </div>
        // ))
    return(
        <div className="inventory-list">
            {this.state.inventory.map((product) => {
                return <Product key={product.id} product={product} deleteProduct={deleteProduct}/>
            })}
            
        </div>
        )
    }
}


export default Dashboard;