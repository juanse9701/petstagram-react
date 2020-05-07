import React from 'react'
import { ListOfCategories } from './components/listOfCategory'
import { ListOfPhotoCard } from './components/listOfPhotoCard'
import { GlobalStyle } from './assets/GlobalStyle'
import { Logo } from './components/logo'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}

export default App
