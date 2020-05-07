import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(photo => <li key={photo}> <PhotoCard /></li>)
      }
    </ul>
  )
}
