import React from 'react'
import { browserHistory, Route, Redirect, Router, Switch } from 'react-router'
import FlexPractice from '../components/flexPractice'
import App from './App'

render((
    <Router history={hashHistory}>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/flexpractice" component={FlexPractice}/>
        </Switch>
    </Router>
), document.getElementById('root'));