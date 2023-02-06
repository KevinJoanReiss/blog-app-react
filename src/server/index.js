import express from 'express'
const app = express()
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import fetch from 'node-fetch';
import { getBlogPostsWithWordCount} from './utils/wordCount.js'

app.use(cors())

const server = http.createServer(app)
const timeout = 3000
const apiURL = 'https://internate.org/wp-json/wp/v2/posts/'


const fetchData = async () => {
    console.log('GET request to API')
    const responseText = await (await fetch(apiURL)).text()
    const responseJsonString = '[{'+ responseText.split(' [{')[1]
    return JSON.parse(responseJsonString)
}

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  setInterval(async() => {
    const blogs = await fetchData()
    const blogPostWithWordCount = getBlogPostsWithWordCount(blogs)
    console.log(JSON.stringify(blogPostWithWordCount))
    socket.emit('newPost', blogPostWithWordCount)
  }, timeout)
})

server.listen(3001, () => {
  console.log('blog-app server is running')
})
