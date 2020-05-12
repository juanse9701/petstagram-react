import React from 'react'
import { ANONIMOUS_LIKE } from '../graphql/Mutation'
import { Mutation } from 'react-apollo'

export const ToggleLike = ({ children }) => {
  return (
    <Mutation mutation={ANONIMOUS_LIKE}>
      {
        children
      }
    </Mutation>
  )
}
