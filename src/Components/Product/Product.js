import React, {Component} from 'react';


class Product extends Component{
    constructor(props){
        super(props)
    }


    render(){
    const {products} = this.props
        return(
            <div className="product">
                {products}
            </div>
        )
    }
}
// const Product = (props) => {
//     const {products} = this.props

//     return(
//             <div className="Product">
//                 {products}
//             </div>
//         )
// }

export default Product;