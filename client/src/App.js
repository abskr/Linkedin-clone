import React, { Suspense, useEffect, useState } from 'react'
import RollerSpinner from 'components/shared/spinners/RollerSpinner'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { baseURL } from 'config'

const LoginPage = React.lazy(() => import('./pages/LoginPage.jsx'))
const Topnav = React.lazy(() =>
  import('./components/shared/top-navbar/TopNavbar')
)
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const AdminPage = React.lazy(() => import('./pages/AdminPage'))

function App() {
  const [user, setUser] = useState({})
  const location = useLocation()

  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}/users`)
    console.log(data)
  }, [])

  if (!localStorage.getItem('token'))
    return (
      <Suspense fallback={<RollerSpinner />}>
        <LoginPage setUser={setUser} />
      </Suspense>
    )

  return (
    <Suspense fallback={<RollerSpinner />}>
      <div className="App">
        <header className="App-header">
          <Topnav
            title="LinkedIn"
            links={[
              'Home',
              'My Network',
              'Jobs',
              'Messaging',
              'Notifications',
              'Profile',
              'Admin',
            ]}
          />
        </header>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(routerProps) => <HomePage {...routerProps} user={user} />}
          />
          <Route
            exact
            path="/profile"
            render={(routerProps) => (
              <ProfilePage {...routerProps} user={user} />
            )}
          />
          <Route
            exact
            path="/admin"
            render={(routerProps) => <AdminPage {...routerProps} user={user} />}
          />
          <Route
            exact
            path="/login"
            render={(routerProps) => <LoginPage {...routerProps} />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}

export default App