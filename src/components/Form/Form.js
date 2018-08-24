import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            productPrice: '',
            productUrl: ''
         }
    }
    handleName(event) {
        this.setState({
            productName: event.target.value
        })
    }
    handlePrice(event) {
        this.setState({
            productName: event.target.value
        })
    }
    handleUrl(event) {
        this.setState({
            productName: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
    }
    handleClear() {
        this.setState({
            productName: ''.productName,
            productPrice: '',
            productUrl: ''
        })
    }
    render() { 
        let { productUrl, productName, productPrice } = this.state;

        return ( 
            <div className="formComponent">
                <img src={productUrl} alt='Product Image' />
                <form onSubmit={this.onSubmit}>
                    <label>Image URL:</label>
                    <input type="text" onChange={(event) => this.handleUrl(event)} value={productUrl} />
                    <label>Product Name:</label>
                    <input type="text" onChange={(event) => this.handleName(event)} value={productName} />
                    <label>Product Price:</label>
                    <input type="text" onChange={(event) => this.handlePrice(event)} value={productPrice} />
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </form>
            </div>
         );
    }
}
 
export default Form;