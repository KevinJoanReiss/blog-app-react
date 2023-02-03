const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)
const timeout = 5000

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  setInterval(() => {
    socket.emit('newPost', 'test message 20')
  }, timeout)
})

server.listen(3001, () => {
  console.log('blog-app server is running')
})
