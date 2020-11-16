import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inventory: []
    }
  }
  
  componentDidMount = () => {
    this.getInventory();
  }
  
  getInventory = () => {
    axios
      .get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
      .catch((error) => console.log('DASHBOARD ERROR'))
  }

  deleteProduct = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then((res) => this.getInventory())
      .catch(error => console.log(error))
  }

  render() {
    const {inventory} = this.state 
    return (
      <div className="inventory-list">
        {inventory.map((product) => {
          return <Product key={product.id} product={product} deleteProduct={this.deleteProduct}/>
        })}
      </div>
    );
  }
} 

export default Dashboard;


// render() {
//   const {inventory} = this.state 
//   const mappedInventory = inventory.map((product) => <Product key={product.id} product={product} deleteProduct={this.deleteProduct}/>
//   )
//   return (
//     <div className="inventory-list">
//       {mappedInventory}
//     </div>
//   );
// }
// } 