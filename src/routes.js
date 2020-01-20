import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header';
import Home from './components/Home';
import Artist from './components/Artist';

const Routes = () => {
	return(
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/artist/:artistid" component={Artist} />
				<Route path="/" exact component={Home} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;