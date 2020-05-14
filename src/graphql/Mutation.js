import { gql } from 'apollo-boost'

export const ANONIMOUS_LIKE = gql`
  mutation anonymousLike($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
}
`
export const PHOTO_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
}
`

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input) 
  }
`
export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input) 
  }
`
