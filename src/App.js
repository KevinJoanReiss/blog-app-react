import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

const socket = io.connect('http://localhost:3001')

function App() {
  const [blogPosts, setBlogPosts] = useState([])

  const blogPostsList = blogPosts.map((item) => <li>{item}</li>)

  useEffect(() => {
    socket.addEventListener(
      'newPost',
      (data) => {
        setBlogPosts([...blogPosts, data])
      },
      [socket]
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog App</h1>
      </header>
      <ul>{blogPostsList}</ul>
      <b>Blog App</b>
    </div>
  )
}

export default App
