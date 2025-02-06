const express = require("express");
const app = express();
app.use(express.json());

const server = require("http").createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: [ "GET", "POST"]
  }
});

io.on('connection', socket => { 
  socket.on('join-room', room => {
    //maybe can use here the implementation for check this user is valid or not
    console.log(`join room ${room}`)
    socket.join(room); 
  });

  socket.on("leave-room", room => {
    socket.leave(room);
  });

  socket.on('change-data', data => {
    //function
    console.log(data);
    io.to(data.room).emit('update-data', data);
  });
});

module.exports = server
