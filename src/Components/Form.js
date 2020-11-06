import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

    componentDidUpdate(){

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
                }}
                >Cancel</button>
                <button 
                // onClick={() => {
                    // createProduct(
                    //     this.state.name,
                    //     this.state.price,
                    //     this.state.imgurl
                    // )
                    //     this.toggleEdit();
                // }}
                >Add To Inventory</button>
            </div>
        
        )
    }
}

export default Form;