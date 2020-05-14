import React, { useContext } from 'react'
import { GlobalStyle } from './assets/GlobalStyle'
import { Logo } from './components/logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { Menu } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NoRegisteredUser'
import { Context } from './Context'
import { PageNotFound } from './pages/404Page'

const App = () => {
  const { isAuth, removeAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <PageNotFound default />
        <Home path='/' />
        <Home path='/pets/:categoryId' />
        <Detail path='/detail/:id' />
        {isAuth && <Redirect from='/login' to='/' />}
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        <Favs path='/favs' />
        <User logout={removeAuth} path='/user' />
      </Router>
      <Menu />
    </>
  )
}

export default App
