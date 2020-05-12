import React from 'react'
import { A, Img } from './style'

const DEFAULT_IMG = 'https://www.barcelonabeta.org/sites/default/files/2018-04/default-image_0.png'

export const Category = ({ cover = DEFAULT_IMG, path = '#', emoji = '....', name = '', id = '' }) => {
  return (
    <A to={`/pets/${id}`}>
      <Img src={cover} alt={name} />
      {emoji}
    </A>
  )
}
