const express = require('express');
const app = express();
const http = require('http');
const port = 1235;

const cors = require('cors');
app.use(cors());

const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST'],
  },
});


let canvasState = [...Array(8)].map(e => Array(8).fill(null));

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("create_lobby", (data) => {
    socket.join(data.lobby);
    console.log(data.lobby);
    console.log(data.canvas);
    canvasState = data.canvas;
    socket.broadcast.emit('server_message', { message: 'Server has created the lobby room!'});
  });

  socket.on("join_lobby", (data) => {
    socket.join(data.lobby);
    console.log(data.lobby);
    socket.broadcast.emit('send_canvas', { canvas: canvasState});
  });

});

server.listen(port, () => {
  console.log(`Server is now running on port ${port}!`);
});
