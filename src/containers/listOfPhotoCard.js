import React from 'react'
import { GET_LIST_PHOTOS } from '../graphql/withPhotos'
import { Query } from 'react-apollo'
import { ListOfPhotoCardComponent } from '../components/listOfPhotoCard'
import { MockListCard } from '../components/mockapListCard'

const RenderProp = ({ loading, error, data }) => {
  if (loading) return <MockListCard />
  if (error) return <MockListCard />
  return (
    <ListOfPhotoCardComponent {...data} />
  )
}

export const ListOfPhotoCard = ({ categoryId }) => (
  <Query query={GET_LIST_PHOTOS} variables={{ categoryId }}>
    {
      RenderProp
    }
  </Query>
)
