import './App.css';
import io from 'socket.io-client'
import {useEffect, useState} from 'react'

const socket = io.connect('http://localhost:3001')

function App() {

  useEffect(()=> {
    socket.addEventListener('newPost', (data) => {
      alert(JSON.stringify(data))
    }, [socket])
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Blog App
        </h1>
      </header>
      <b>
          Blog App
        </b>
    </div>
  );
}

export default App;
