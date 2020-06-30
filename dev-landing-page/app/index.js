import React from 'react';
import ReactDOM from 'react-dom';
import App from '../modules/Root/root'
import About from '../modules/About/about'
import './index.css'
import { BrowserRouter as  Router, Route } from 'react-router-dom'


ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/about" component={About}/>
    </Router>
, document.getElementById('root'))