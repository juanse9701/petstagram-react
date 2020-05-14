import React from 'react'
/* import { ANONIMOUS_LIKE } from '../graphql/Mutation' */
import { PHOTO_LIKE } from '../graphql/Mutation'
import { Mutation } from 'react-apollo'

export const ToggleLike = ({ children }) => {
  return (
    <Mutation mutation={PHOTO_LIKE}>
      {
        children
      }
    </Mutation>
  )
}
