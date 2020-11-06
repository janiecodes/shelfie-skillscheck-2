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

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    
    handlePriceChange = (e) => {
        this.setState({price: e.target.value})
    }
    
    handleImgUrlChange = (e) => {
        this.setState({imgurl: e.target.value})
    }
    
    toggleEdit = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit });
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div className ="Form">
                <input value={this.state.name} onChange={e => this.handleNameChange(e.target.value)}/>
                <input value={this.state.price} onChange={e => this.handlePriceChange(e.target.value)}/>
                <input value={this.state.imgurl} onChange={e => this.handleImgUrlChange(e.target.value)}/>
                
                <button>Cancel</button>
                <button onClick={(e) => {
                    this.props.addProduct(
                        this.state.name,
                        this.state.price,
                        this.state.imgurl
                    )
                }}
                >Add To Inventory</button>
            </div>
        
        )
    }
}

export default Form;