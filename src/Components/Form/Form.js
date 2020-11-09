import axios from 'axios';
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
    componentDidMount(){
        let {id} = this.props.match.params;
        if (id) {
            axios
                .get(`/api/product/${id}`)
                .then(res => {
                    this.setState({...res.data, toggleEdit: true})
                }).catch((error) => console.log(error))
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
                    <input type="text" value={this.state.imgurl} onChange={event => this.handleImgUrlChange(event.target.value)}/>

                    <p>Product Name:</p>
                    <input type="text" value={this.state.name} onChange={event => this.handleNameChange(event.target.value)}/>

                    <p>Price:</p>
                    <input type="text" value={this.state.price} onChange={event => this.handlePriceChange(event.target.value)}/>
                
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