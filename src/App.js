
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import axios from 'axios';
import routes from './routes'
import {HashRouter, Link} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   inventory: []
    // }
  }

  // componentDidMount = () => {
  //   axios
  //   .get('/api/inventory')
  //   .then((res) => {
  //     this.setState({inventory: res.data})
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  createProduct = (product) => {
    axios
      .post('/api/product/', product)
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
          <Dashboard/>
          <Form/>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
