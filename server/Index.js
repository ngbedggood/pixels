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


io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("send_message", (data) => {
    console.log(data.message);
    socket.broadcast.emit('server_message', { message: 'Hello from the back end!'});
  });
});




server.listen(port, () => {
  console.log(`Server is now running on port ${port}!`);
});
