import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: "",
            price: 0,
            imgurl:" ",
            toggleEdit: false,
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    handlePriceChange = (event) => {
        this.setState({price: event.target.value})
    }
    
    handleImgUrlChange = (event) => {
        this.setState({imgurl: event.target.value})
    }
    
    toggleEdit = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit });
    }

    render(){
        return(
            <div className ="Form">
                <input value={this.state.name} onChange={this.handleNameChange}/>
                <input value={this.state.price} onChange={this.handlePriceChange}/>
                <input value={this.state.imgurl} onChange={this.handleImgUrlChange}/>
                <button onClick={() => {
                    this.setState({name: this.state.name})
                    this.toggleEdit();
                }}>Cancel</button>
                <button>Add</button>
            </div>
            
        )
    }
}

export default Form;