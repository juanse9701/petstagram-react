import React from 'react'
import { REGISTER } from '../graphql/Mutation'
import { Mutation } from 'react-apollo'

export const Register = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {
        children
      }
    </Mutation>
  )
}
