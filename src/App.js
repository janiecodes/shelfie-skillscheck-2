import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
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
