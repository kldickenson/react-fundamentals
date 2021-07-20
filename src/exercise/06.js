// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    //? EXTRA 1
    const usernameRef = React.useRef();


  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    //! EXERCISE
    // const value = event.target.elements.username.value
    //? EXTRA 1: React.useRef
    const value = usernameRef.current.value
  // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(value)
  }

    //* EXTRA 2 state
    const [error, setError] = React.useState(null)
    //todo EXTRA 3 state
    const [username, setUsername] = React.useState('');

    function handleChange(event) {
      const {value} = event.target
      //* EXTRA 2
      const isLowerCase = value === value.toLowerCase();
      setError(isLowerCase ? null : 'username must be all lowercase')
      //todo EXTRA 3
      setUsername(value.toLowerCase()) // this forces the input to lowercase
      setError(null) // negating the error from EXTRA 2
    }

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" ref={usernameRef} onChange={handleChange} value={username} type="text" />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
