import React from 'react'
import { Query } from 'react-apollo'
import { GET_SINGLE_PHOTO } from '../graphql/withPhotos'
import { PhotoCardComponent } from '../components/photoCard'
import { MockCard } from '../components/mockapListCard/mockCard'

const RenderProps = ({ loading, error, data }) => {
  if (loading) return <MockCard />
  if (error) return <MockCard />
  const { photo = {} } = data
  return <PhotoCardComponent {...photo} />
}

export const PhotoCard = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {
        RenderProps
      }
    </Query>
  )
}
