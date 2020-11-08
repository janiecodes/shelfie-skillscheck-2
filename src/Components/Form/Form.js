import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(props){
        super(props);

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

    handleCreateProduct = () => {
        const {name, price, imgurl} = this.state
        const {createProduct} = this.props
        createProduct(name, price, imgurl);
        this.handleFormReset();
    }

    render(){
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
                        <button onClick={() => this.handleFormReset()} type="button">Cancel</button>
                        <button onClick={() => this.handleCreateProduct()} type="button">Add To Inventory</button>
                    </div>
                </form>
            </div>
        
        )
    }
}

export default Form;