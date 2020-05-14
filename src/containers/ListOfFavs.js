import React from 'react'
import { GET_FAVS } from '../graphql/withPhotos'
import { Query } from 'react-apollo'
import { ListFavsComponent } from '../components/ListFavs'

const renderProps = ({ loading, error, data = {} }) => {
  if (loading) return <p>loading.......</p>
  if (error) return <p>Ha ocurrido un error en el servidor</p>
  return (<ListFavsComponent {...data} />)
}

export const ListFavs = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {
      renderProps
    }
  </Query>
)
