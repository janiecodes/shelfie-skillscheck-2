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

    handleFormRest = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    componentDidUpdate(){

    }

    render(){
        const {handleNameChange, handlePriceChange, handleImgUrlChange, handleFormReset} = this
        const {createProduct} = this.props
        return(
            <form className ="Form">
          
                <input value={this.state.name} onChange={handleNameChange}/>
                <input value={this.state.price} onChange={handlePriceChange}/>
                <input value={this.state.imgurl} onChange={handleImgUrlChange}/>
                
      
                <button onClick={handleFormReset}>Cancel</button>
                <button onClick={createProduct}
                >Add To Inventory</button>
               
            </form>
        
        )
    }
}

export default Form;