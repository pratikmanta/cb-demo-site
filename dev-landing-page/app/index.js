import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../modules/Root/root';
import Profile from '../modules/Profile/profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Route exact path='/' component={Root} />
		<Route exact path='/profile' component={Profile} />
	</Router>,
	document.getElementById('root')
);
