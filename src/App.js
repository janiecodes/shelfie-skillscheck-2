
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
      inventory: []
    }
    
  }

  // createProduct = (name, price, imgurl) => {
  //   axios
  //     .post('/api/product/', {name, price, imgurl})
  //     .then(res => {
  //       this.setState({inventory: res.data})
  //     })
  //     .catch((error) => console.log(error))
  // }

  // deleteProduct = (id) => {
  //   axios
  //       .delete(`/api/product/${id}`)
  //       .then((res) => {
  //           this.setState({inventory: res.data})
  //       })
  //       .catch((error) => console.log(error))
  // }

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


  componentDidMount = () => {
    this.getInventory()
  }

  
  getInventory = () => {
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

    return (
        <div className="app">
          {/* <header>
            <Header/>
          </header> */}
          <Dashboard inventory={this.state.inventory}/>
          <Form getInventory={this.getInventory}/>
          {/* {routes} */}
        </div>

    );
  }
}

export default App;
