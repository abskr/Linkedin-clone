import React, { Suspense, useEffect, useState, useContext } from 'react'
import RollerSpinner from 'components/shared/spinners/RollerSpinner'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext.js'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFetch } from 'use-http'

const LoginPage = React.lazy(() => import('./pages/LoginPage.jsx'))
const Topnav = React.lazy(() => import('./components/shared/navbar/TopNavbar'))
const FeedPage = React.lazy(() => import('./pages/FeedPage.jsx'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const AdminPage = React.lazy(() => import('./pages/AdminPage'))
const SignupPage = React.lazy(() => import('./pages/SignupPage.jsx'))

function App() {
  const { user, token } = useAuth()
  const location = useLocation()

  function PrivateRoutes({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return token ? children : <Redirect to="/login" />
        }}
      />
    )
  }

  return (
    <Suspense fallback={<RollerSpinner />}>
      <div className="App">
        {token && (
          <header className="App-header">
            <Topnav />
          </header>
        )}
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/login"
            render={(routerProps) => <LoginPage {...routerProps} />}
          />
          <Route
            exact
            path="/signup"
            render={(routerProps) => (
              <SignupPage {...routerProps} user={user} />
            )}
          />
          <PrivateRoutes>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <FeedPage {...routerProps} user={user} />
              )}
            />
            <Route
              exact
              path="/profile/:username"
              render={(routerProps) => (
                <ProfilePage {...routerProps} user={user} />
              )}
            />
            <Route
              exact
              path="/admin"
              render={(routerProps) => (
                <AdminPage {...routerProps} user={user} />
              )}
            />
          </PrivateRoutes>
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}

export default App