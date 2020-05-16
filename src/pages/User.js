import React, { useContext } from 'react'
import { SubmmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h2>página de usuario</h2>
      <SubmmitButton onClick={removeAuth}>Cerrar sesion</SubmmitButton>
    </>
  )
}
