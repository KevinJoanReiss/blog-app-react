import React from 'react'

function Button() {
  return (
    <button className='button'>
      text
    </button>
  )
}

const styles = {
    container: {
      margin: 30,
      backgroundColor: '#282c34',
      borderRadius: 20,
      padding: 20,
    },
    text: {
      color: 'white',
    },
    button: {
      margin: 30,
      backgroundColor: '#21bf2b',
      borderRadius: 10,
      padding: 10,
      borderColor: 'white',
    },
  }

export default Button
