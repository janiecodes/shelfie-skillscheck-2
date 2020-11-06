
import axios from 'axios';
import React, {Component} from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventory: []
          }
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
        let mappedInventory = []
        const {createProduct, deleteProduct, editProduct, inventory } = this.props
        mappedInventory = inventory.map((product) => {
            return <Product
                key={inventory.id}
                product={product}
                createProduct={createProduct}/>
        })
    return(
        <div>Dashboard
            <ul className="inventory-list">{mappedInventory}</ul>
        </div>
        )
    }
}


export default Dashboard;