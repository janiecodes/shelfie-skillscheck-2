
import axios from 'axios';
import React, {Component} from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }


    
    render(){
        return(
        <div>Dashboard
            <Product/>
        </div>
        )
    }
}


export default Dashboard;