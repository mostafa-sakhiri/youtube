import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function onUsernameChange(e) {
    setUsername(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }

  function login(event) {
    event.preventDefault()
    const data = {
      username,
      password
    }
    debugger;
    axios
      .post('https://easy-login-api.herokuapp.com/users/login', data)
      .then(() => alert('Connected succesfully !'))
      .catch(() => alert('False username or password !'))
  }

  return (
    <div className='login'>
      <h1>Login page</h1>
      <form>
        <input placeholder='Username' type='text' onChange={onUsernameChange} />
        <input
          placeholder='Password'
          type='password'
          onChange={onPasswordChange}
        />
        <button onClick={login}>submit</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  )
}

export default Login
