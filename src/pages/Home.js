import React, { memo } from 'react'
import { ListOfCategories } from '../components/listOfCategory'
import { ListOfPhotoCard } from '../containers/listOfPhotoCard'
import { Helmet } from 'react-helmet'

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Home | pestagram</title>
        <meta name='description' content='Petstagram es una app que expone imagenes adorables de perritos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </>
  )
}

export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
