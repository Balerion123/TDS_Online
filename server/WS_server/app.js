const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const http = require('http');
const Game = require('../models/gameModel');

const { Server } = require('socket.io');
const app = express();

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());
app.use(cors());

// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against XSS
app.use(xss());

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  },
});

io.on('connection', (socket) => {
  console.log(`User with id ${socket.id} connected to web socket server`);

  socket.on('join_game', (message) => {
    try {
      console.log('received request to join room');

      const game = Game.findOne({ id: message });
      if (game) socket.emit('receive_message', `Joined room ${message}`);
      else socket.emit('receive_message', `Failed to join room ${message}`);
    } catch (err) {
      socket.emit('receive_message', `Failed to join room ${message}`);
    }
  });

  socket.on('send_message', (message) => {
    console.log(message);
    socket.broadcast.emit('receive_message', message.message);
  });
});

// EXPORTING APP
module.exports = server;
