import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      price: 0,
      imgurl: '',
      toggleEdit: false,

    }
  }

  componentDidMount(){
      let {id} = this.props.match.params;
      if(id) {
          axios
          .get(`/api/product/${id}`)
          .then((res) => {
              this.setState({...res.data, toggleEdit: true})
          })
      }
  }

  componentDidUpdate(oldProps) {
    if(this.props.match.path !== oldProps.match.path) {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }
  }

  handleImgUrlChange = (imgurl) => {
    this.setState({imgurl: imgurl})
}

  handleNameChange = (name) => {
    this.setState({name: name})
}

  handlePriceChange = (price) => {
    this.setState({price: price})

}

  handleSubmit() {
    let { name, price, imgurl } = this.state;
    if (name) {
      let product = {
        name,
        price: this.handlePriceChange(price),
        imgurl
      }
      axios.post('/api/product', product)
        .then(res => {
          this.props.history.push('/');
        })
        .catch(error => console.log(error))
    } else {
      console.log("ERROR");
    }
  }


  handleEdit() {
    let { id, name, price, imgurl } = this.state;
    if (name) {
      let product = {
        name,
        price: this.handlePriceChange(price),
        imgurl
      }
      axios.put(`/api/product/${id}`, product)
        .then(res => {
          this.props.history.push('/')
        })
        .catch(error => console.log(error))
    } else {
      console.log("ERROR");
    }
  }

  handleFormReset = () => {
    this.setState({name: " ", price: 0, imgurl: " "})
}


  render() {
    return (
      <div className='form'>
        <form>
            <p>Image URL:</p>
                <input type='text' value={this.state.imgurl} onChange={event => this.handleImgUrlChange(event.target.value)} />
            <p>Product Name:</p>
                <input type='text' value={this.state.name} onChange={event => this.handleNameChange(event.target.value)} />
            <p>Price:</p>
                <input type='text' value={this.state.price} onChange={event => this.handlePriceChange(event.target.value)} />
        
        <div className='form-buttons'>
            <button className="cancel-button" onClick={() => this.handleFormReset()} type="button">Cancel</button>
            {this.state.toggleEdit
                ? <button className="save-button" onClick={() => this.handleEdit()}>Save Changes</button>
                : <button className="add-button" onClick={() => this.handleSubmit()}>Add to Inventory</button>
            }
        </div>
        </form>
      </div>
    );
  }
}

export default Form;