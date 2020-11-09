
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios';
import routes from './routes'
import {HashRouter, Link} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      inventory: [
        {
          "id": 1,
          "name": "toy",
          "price": 10,
          "imgurl": "example"
      },
      {
          "id": 2,
          "name": "toy2",
          "price": 20,
          "imgurl": "example2"
      }
      ]
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

  createProduct = (name, price, imgurl) => {
    axios
      .post('/api/product/', {name, price, imgurl})
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch((error) => console.log(error))
  }

  deleteProduct = (id) => {
    axios
        .delete(`/api/product/${id}`)
        .then((res) => {
            this.setState({inventory: res.data})
        })
        .catch((error) => console.log(error))
  }

  editProduct = (id, name, price, imgurl) => {
    axios 
      .put(`/api/product/${id}`, {name, price, imgurl})
      .then((res) => {
        this.setState({inventory: res.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render(){
    console.log(this.state.inventory)
    return (
      <HashRouter>
        <div className="app">
          <header>
            <Header/>
            <nav className='header-links'>
              <Link to='/' className='dashboard'>Dashboard</Link>
              <Link to='/add' className='form-add'>Add Inventory</Link>
            </nav>
          </header>
          <Dashboard inventory={this.state.inventory}/>
          <Form createProduct={this.createProduct}/>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
