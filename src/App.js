import React, { useContext, Suspense, lazy } from 'react'
import { GlobalStyle } from './assets/GlobalStyle'
import { Logo } from './components/logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Menu } from './components/Navbar'
import { Context } from './Context'

const Favs = lazy(() => import('./pages/Favs'))
const Detail = lazy(() => import('./pages/Detail'))
const User = lazy(() => import('./pages/User'))
const PageNotFound = lazy(() => import('./pages/404Page'))
const NotRegisteredUser = lazy(() => import('./pages/NoRegisteredUser'))

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <PageNotFound default />
        <Home path='/' />
        <Home path='/pets/:categoryId' />
        <Detail path='/detail/:id' />
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Menu />
    </Suspense>
  )
}

export default App
