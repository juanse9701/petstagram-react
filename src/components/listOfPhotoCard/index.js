import React from 'react'
import { PhotoCardComponent } from '../photoCard'

export const ListOfPhotoCardComponent = ({ photos }) => {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCardComponent key={photo.id} {...photo} />)
      }
    </ul>
  )
}
