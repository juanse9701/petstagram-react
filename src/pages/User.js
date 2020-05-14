import React from 'react'
import { SubmmitButton } from '../components/SubmitButton'

export const User = ({ logout }) => (
  <>
    <h2>página de usuario</h2>
    <SubmmitButton onClick={logout}>Cerrar sesion</SubmmitButton>
  </>
)
