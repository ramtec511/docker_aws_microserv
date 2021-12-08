const express = require('express');
const morgan = require('morgan');
const { aqui } = require('./socketes/missockets');
const elhttp = require('http');
/*const { Server } = require('socket.io');
const elhttp = require('http');*/
const coros = require('cors');
const misrutas = require('./routes/lasrutas');
const app = express();

//require('./database/ladb')

//configuracion web sockets
/*const miserver = elhttp.createServer(app);
console.log(miserver)
const el_io = new Server(miserver, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
        credentials: true
    }
});*/

const miserver = elhttp.createServer(app);

//middlewares
app.use(morgan('dev'));
app.use(coros())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//rutas
app.use(misrutas);
/*
el_io.on('connection', (socket) => {
    console.log("nueva conexion", socket.id);    
    
    socket.on('cliente:sesionactive',()=>{
        console.log("sesion inactiva");
    })

})*/

aqui(miserver);

miserver.listen(3000, () => {
    console.log("ejecutado servicio login")
});