import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const BAD_LOGIN_MSG = 'False username or password'

  function onUsernameChange(e) {
    setUsername(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }

  function login(e) {
    e.preventDefault()
    const data = {
      username,
      password
    }

    axios
      .post('https://easy-login-api.herokuapp.com/users/login', data)
      .then(({ errors }) => !!errors && alert('Connected succesfully !'))
      .catch(() => alert(BAD_LOGIN_MSG))
  }

  function reset(e) {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }

  return (
    <div className='login'>
      <h1>Login page</h1>
      <form>
        <input
          placeholder='Username'
          type='text'
          value={username}
          onChange={onUsernameChange}
        />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={onPasswordChange}
        />
        <button onClick={login}>submit</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  )
}

export default Login
