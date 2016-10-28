import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { TodoApp } from './components';

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
