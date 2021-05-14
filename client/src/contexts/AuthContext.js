import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage'
import { useHistory } from 'react-router-dom'
import { baseURL } from '../config.js'
import { useFetch } from 'use-http'

const AuthContext = createContext({})

function AuthProvider(props) {
  const history = useHistory()
  const [user, setUser] = useLocalStorage('user', {})
  const [token, setToken] = useLocalStorage('token', '')
  const { get, post, response, loading, error } = useFetch(`${baseURL}`)

  const loginUser = async (email, password) => {
    const resp = await post('/auth', { email, password })
    console.log(resp)
    if (resp) {
      setToken(resp.token)
      setUser(resp.user)
      return history.push('/')
    }
    console.error('Auth failed')
  }

  const registerUser = async (name, lastname, email, password) => {
    const newUser = await post('/users', {
      name,
      lastname,
      email,
      password,
    })

    console.log('config', baseURL)
    console.log(newUser)
    if (newUser) {
      setUser(newUser)
      // response.send(newUser)
      console.log('new user created')
      history.push('/')
      
    }
  }


  const logout = () => {
    setToken(null)
    setUser(null)
    history.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{ user, token, registerUser, loginUser, logout }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }