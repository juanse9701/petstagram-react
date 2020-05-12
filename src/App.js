import React from 'react'
import { GlobalStyle } from './assets/GlobalStyle'
import { Logo } from './components/logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Menu } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NoRegisteredUser'

const LoggedUser = ({ children }) => {
  return (children({ isAuth: false }))
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pets/:categoryId' />
        <Detail path='/detail/:id' />
      </Router>
      <LoggedUser>
        {
          ({ isAuth }) => {
            return (
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                  </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                  </Router>
            )
          }
        }
      </LoggedUser>
      <Menu />
    </>
  )
}

export default App
