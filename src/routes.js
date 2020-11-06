import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Form from './Components/Form';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>
    </Switch>
)