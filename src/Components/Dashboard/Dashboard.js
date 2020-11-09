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
                <div>{product.name}</div>
                <div>{product.price}</div>
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