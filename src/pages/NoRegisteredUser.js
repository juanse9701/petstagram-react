import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { Register } from '../containers/RegisterUser'
import { Login } from '../containers/LoginUser'

export const NotRegisteredUser = () => {
  const { setAuthValue } = useContext(Context)
  return (
    <>
      <Register>
        {
          (register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables: variables }).then(({ data }) => {
                const { signup } = data
                setAuthValue(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o ha ocurrido un error'
            return (
              <UserForm disable={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
            )
          }
        }
      </Register>
      <Login>
        {
          (login, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables: variables }).then(({ data }) => {
                const { login } = data
                setAuthValue(login)
              })
            }
            const errorMsg = error && 'La contraseña es incorrecta o ha ocurrido un error'
            return (
              <UserForm disable={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesión' />
            )
          }
        }
      </Login>
    </>
  )
}
