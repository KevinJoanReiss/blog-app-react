import express from 'express'
const app = express()
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { getBlogPostsWithWordCount} from './utils/wordCount.js'
import { fetchData } from './utils/http.js'

app.use(cors())

const server = http.createServer(app)
const timeout = 3000

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  },
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  setInterval(async() => {
    const blogs = await fetchData()
    const blogPostWithWordCount = getBlogPostsWithWordCount(blogs)
    socket.emit('newPost', blogPostWithWordCount)
  }, timeout)
})

server.listen(3001, () => {
  console.log('blog-app server is running')
})
