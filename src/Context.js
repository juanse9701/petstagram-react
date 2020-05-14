import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, SetAuth] = useState(() => {
    const token = window.sessionStorage.getItem('token')
    return token !== null
  })

  const value = {
    isAuth,
    setAuthValue: (token) => {
      SetAuth(true)
      window.sessionStorage.setItem('token', JSON.stringify(token))
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('token')
      SetAuth(false)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
