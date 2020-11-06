import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
    </div>
  );
}

export default App;
