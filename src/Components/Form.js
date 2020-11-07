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

    handleFormReset = () => {
        this.setState({name: " ", price: 0, imgurl: " "})
    }

    componentDidUpdate(){

    }

    render(){
        const {createProduct} = this.props
        return(
            <div className ="form">
                <form>
                    <p>Image URL:</p>
                    <input type="text" value={this.state.imgurl} onChange={this.handleImgUrlChange}/>

                    <p>Product Name:</p>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>

                    <p>Price:</p>
                    <input type="text" value={this.state.price} onChange={this.handlePriceChange}/>
                
                    <div className="form-buttons">
                        <button onClick={() => this.handleFormReset} type="button">Cancel</button>
                        <button onClick={() => createProduct} type="button">Add To Inventory</button>
                    </div>
                </form>
            </div>
        
        )
    }
}

export default Form;