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


let canvasState = []; //[...Array(8)].map(e => Array(8).fill(null));

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("create_lobby", (data) => {
    // Get user to leave existing lobby if there's one
    console.log(Array.from(socket.rooms)[1]);
    if (Array.from(socket.rooms)[1]) {
      socket.leave(Array.from(socket.rooms)[1]);
    }
    // Force to string so they join the same room
    l = `${data.lobby}`;
    socket.join(l);
    console.log(`User ${socket.id} created a lobby(${l}).`);
    canvasState.push({ lobby: l, canvas: data.canvas});
    //canvasState = data.canvas;
    socket.emit('host_connect', { connected: (socket.rooms.has(l)) });
  });

  socket.on("join_lobby", (data) => {
    // Get user to leave existing lobby if there's one
    console.log(Array.from(socket.rooms)[1]);
    if (Array.from(socket.rooms)[1]) {
      socket.leave(Array.from(socket.rooms)[1]);
    }
    socket.join(data.lobby);
    console.log(`User ${socket.id} joined lobby(${data.lobby}).`);
    socket.emit('player_connect', { connected: true, lobby: data.lobby });
    socket.emit('init_canvas', { canvas: canvasState.find(e => e.lobby === data.lobby).canvas });
  });

  socket.on("paint_pixel", (data) => {
    console.log(`User ${socket.id} painted a pixel in room(${data.lobby}).`);
    canvasState.find(e => e.lobby === data.lobby).canvas[data.index.row][data.index.col] = data.color;
    io.in(data.lobby).emit('send_canvas', { canvas: canvasState.find(e => e.lobby === data.lobby).canvas });
    console.log(socket.rooms);
  });

});

server.listen(port, () => {
  console.log(`Server is now running on port ${port}!`);
});
