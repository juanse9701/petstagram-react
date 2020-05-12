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
