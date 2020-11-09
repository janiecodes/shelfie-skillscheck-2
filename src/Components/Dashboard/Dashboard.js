import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state ={
        inventory: []
    }
  }
  
  componentDidMount = () => {
    this.getInventoryList();
  }
  
  getInventoryList = ()=> {
    axios.get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
  }

  deleteProduct = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then((res) => this.props.getInventoryList())
      .catch(error => console.log(error))
  }
render() {
    return (
      <div className="inventory-list">
        {this.state.inventory.map((product) => {
          return <Product key={product.id} product={product} deleteProduct={this.deleteProduct} />
        })}
      </div>
    );
  }
} 

export default Dashboard;