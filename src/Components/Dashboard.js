
import axios from 'axios';
import React, {Component} from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     inventory: []
        //   }
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
        let inventoryMapped = []
        const {createProduct, deleteProduct, editProduct} = this.props
        inventoryMapped = this.props.inventory.map((product) => {
            return <Product
                key={this.props.inventory.id}
                product={product}
                createProduct={createProduct()}
                />
        })
    return(
        <div>
            <ul className="inventory-list">
                {inventoryMapped}
            </ul>
        </div>
        )
    }
}


export default Dashboard;