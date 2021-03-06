const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

io.on('connection', socket => {
    console.log('user connected');

    socket.on('new-message', (message)=>{
        console.log(message);
    })
})

server.listen(PORT, () => {
    console.log('server started on port 3000');
})