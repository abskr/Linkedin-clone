import React, { Suspense, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import RollerSpinner from 'components/shared/spinners/RollerSpinner'
import Modal from 'components/shared/modal/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Topnav = React.lazy(() =>
  import('./components/shared/top-navbar/TopNavbar')
)
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const AdminPage = React.lazy(() => import('./pages/AdminPage'))

function App() {
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)
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
              'Admin'
            ]}
          />
        </header>
        <Modal
          title="Edit about"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          Testing modal content
        </Modal>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route
            exact
            path="/profile"
            render={(routerProps) => (
              <ProfilePage setShowModal={setShowModal} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/admin"
            render={(routerProps) => <AdminPage {...routerProps} />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
