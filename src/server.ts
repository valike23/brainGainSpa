import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import formidable from 'express-formidable';
import * as sapper from '@sapper/server';
import * as session from 'express-session';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		session({
			secret: 'braingainspa sc key',
			resave: false,
			saveUninitialized: true,
			cookie: { secure: false }
		}),
		formidable(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT);
