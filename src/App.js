
import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import routes from './routes'
  
import Header from './Components/Header/Header';

  
class App extends Component {

    // this.state = {
    //   inventory: [],
    //   currentProduct: {}
    // }

    // componentDidMount = () => {
    //   this.getInventoryList();
    // }
    // getInventoryList = ()=> {
    //   axios.get('/api/inventory')
    //     .then(res => this.setState({ inventory: res.data }))
    // }
    // editProduct = (product) => {
    //   this.setState({
    //     currentProduct: product
    //   })
    // }
  
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
          {routes}
      </div>
    );
  }
}
  

export default withRouter(App);
