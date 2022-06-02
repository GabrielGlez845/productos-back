import Server from './classes/server';
import router from './routes/router';
// 
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Rutas hijas

import productos from './routes/productos.routes';

// BodyParser 
const server = Server.instance;
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', (express.static('public', { redirect: false })));

// Rutas de servicios
server.app.use('/api', router);
server.app.use('/api', productos);

server.start(() => {
    console.log(`✅  Server online in port ${server.port}`);
});


//create   services,details 