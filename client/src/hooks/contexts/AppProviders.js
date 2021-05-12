import * as React from 'react'
import { AuthProvider } from './AuthContext.js'

function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
export default AppProviders