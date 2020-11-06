import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Product from './Product';

function Dashboard() {
    return(
        <div>Dashboard
            <Product/>
        </div>
    )
}


export default Dashboard;