import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
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
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
  }
}

export default App;
