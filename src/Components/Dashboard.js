import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        <Product/>
        return(
        <div>Dashboard

        </div>
        )
    }
}


export default Dashboard;