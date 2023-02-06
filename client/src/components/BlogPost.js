import Modal from 'react-modal'
import { useState } from 'react'

function BlogPost({ blogText, wordCountMap }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div style={styles.container}>
      <p style={styles.text}>{blogText}</p>
      <button style={styles.button} onClick={openModal}>
        <b style={styles.text}>See WordCountMap</b>
      </button>
      <Modal
        isOpen={modalIsOpen}
        //onRequestClose={closeModal}
        style={{width: 300}}
      >
          <p>{JSON.stringify(wordCountMap)}</p>
          <button style={styles.button} onClick={closeModal}>
            <b style={styles.text}>Close</b>
          </button>
      </Modal>
    </div>
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
    padding: 15,
    borderColor: 'transparent',
  },
}

export default BlogPost
