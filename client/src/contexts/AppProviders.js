import * as React from 'react'
import { Provider } from 'use-http'
import { AuthProvider } from './AuthContext.js'
import { baseURL } from '../config.js'

function AppProviders({ children }) {
  const token = localStorage.getItem('token')
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return (
    <Provider url={`${baseURL}`} options={options}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  )
}
export default AppProviders