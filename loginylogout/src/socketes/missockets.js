const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

/*const app = express();
const httpServer = createServer(app);*/


const aqui = (httpServer) => {
    const el_io = new Server(httpServer, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    el_io.on('connection', (socket) => {
        console.log("nueva conexion", socket.id);
        socket.emit('ping');
        socket.on('pong', () => {
            console.log("me contesto")
        })
        socket.on('cliente:sesionactive', () => {
            console.log("sesion inactiva");
        })
    })       
}

module.exports = { aqui };
