import { gql } from 'apollo-boost'

export const GET_LIST_PHOTOS = gql`
 query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId){
  id
  categoryId
  src
  likes
  liked
  userId
 }
}
`

export const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id){
            id
            categoryId
            src
            likes
            liked
        }
    }
`
export const GET_FAVS = gql`
    query favs {
        favs {
            id
            src
        }
    }
`
