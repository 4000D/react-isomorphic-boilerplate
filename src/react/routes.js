import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { TodoApp } from './components';

import { facebook_login, logout } from '../lib/firebase'

const App = ({ children }) => (
	<div>
		Links:
		{' '}
		<Link to="/">Home</Link>
		{' '}
		<Link to="/about">About</Link>
		{' '}
		<Link to="/todos">Todos</Link>
		{ children }
		<button onClick={facebook_login}>FB login</button>
		<button onClick={logout}>logout</button>
	</div>
);

const Home = () => (<div>Home!</div>)
const About = () => (<div>About!</div>)

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="about" component={About}></Route>
		<Route path="todos" component={TodoApp}></Route>
	</Route>
)

export default routes;
