import axios from 'axios'
import React, {Component} from 'react';
import './App.css';
import {HashRouter, Switch, Link} from 'react-router-dom';
import routes from './routes'
  
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
  
class App extends Component {
  constructor(props) {
  super(props);
    // this.state = {
    //   inventory: [],
    //   currentProduct: {}
    // }
  }
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
  

export default App;
