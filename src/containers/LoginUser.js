import React from 'react'
import { LOGIN } from '../graphql/Mutation'
import { Mutation } from 'react-apollo'

export const Login = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {
        children
      }
    </Mutation>
  )
}
