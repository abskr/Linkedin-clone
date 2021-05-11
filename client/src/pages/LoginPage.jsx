import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import useToken from '../hooks/useToken.js'
import { baseURL } from '../config'

export default function Login({ setUser, ...props }) {
  const { saveToken } = useToken()
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async (credentials) => {
    const resp = await fetch(`${baseURL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    return await resp.json()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await loginUser({
      email,
      password,
    })
    if (resp) {
      setUser(resp.user)
      saveToken(resp.token)
      history.push('/')
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}