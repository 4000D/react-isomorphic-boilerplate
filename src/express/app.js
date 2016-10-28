import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path';

import Q from 'q'

// middlewares
import renderReact from './middlewares/renderReact'

import expressRoutes from './controllers'

import mongoose from 'mongoose';
mongoose.Promise = Q.Promise;
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.once('open', () => {
	console.log('mongoose is connected');
})
.on('error', (error) => {
	console.log(error);
})

const app = express();
const publicPath = path.join(__dirname, './../public');

app.set('views', path.join(publicPath, '../src/express/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(publicPath));

app.use('/api', expressRoutes);
app.use(renderReact);

import { EXPRESS_PORT } from '../../env';
const server = app.listen(EXPRESS_PORT, () => {
	console.log(`Express listening on port ${EXPRESS_PORT}`);
});

function test_func() {
	return new Promise(function(resolve, reject) {
		setInterval( function() {
			resolve('return from test_func after 1sec');
		}, 1000)
	});
}

async function test_func2() {
	let ret = await test_func();

	return ret;
}
