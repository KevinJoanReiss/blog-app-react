import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import BlogPost from './components/BlogPost'

const socket = io.connect('http://localhost:3001')

function App() {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem('blog-posts')) || []
  )

  const blogPostsList = blogPosts.map((item) => (
    <BlogPost
      key={item.id}
      blogText={item.blogText}
      wordCountMap={item.wordCountMap}
    />
  ))

  useEffect(() => {
    socket.addEventListener(
      'newPost',
      (data) => {
        localStorage.setItem('blog-posts', JSON.stringify(blogPosts))
        setBlogPosts(data)
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
    </div>
  )
}

export default App
