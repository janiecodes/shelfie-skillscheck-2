import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: " ",
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

    handleFormReset = (e) => {
        e.preventDefault()
        this.setState(this.state)
    }

    componentDidUpdate(){

    }

    render(){
        const {createProduct} = this.props
        return(
            <form className ="form">
                
                <a>Image URL:</a>
                <input value={this.state.imgurl} onChange={this.handleImgUrlChange}/>

                <a>Product Name:</a>
                <input value={this.state.name} onChange={this.handleNameChange}/>

                <a>Price:</a>
                <input value={this.state.price} onChange={this.handlePriceChange}/>
                
      
                <button onClick={() => this.handleFormReset} type="button">Cancel</button>
                <button onClick={() => createProduct} type="button">Add To Inventory</button>
               
            </form>
        
        )
    }
}

export default Form;