import React from 'react'
import { ListOfCategories } from '../components/listOfCategory'
import { ListOfPhotoCard } from '../containers/listOfPhotoCard'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </>
  )
}
