import React, { createContext, useState } from 'react'
import { useLocalStorage } from '@rehooks/local-storage'
import { useFetch } from 'use-http'
import { baseURL } from '../../config'

const AuthContext = createContext({})

function AuthProvider(props) {
  const [user, setUser] = useState({ user: 'Sean' })
  const [token, setToken, removeToken] = useLocalStorage('token', '')

  // user
  const { get, post, response, loading, error } = useFetch(`${baseURL}`)

  const getUsers = async () => {
    const users = await get('/users')
    console.log(users)
  }

  const registerUser = async (email, password, firstname, lastname) => {
    const res = await post('/users', {
      email,
      password,
      firstname,
      lastname,
    })
    if (response.ok) {
      setUser({ ...user, res })
    }
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, getUsers }} {...props} />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }