import React from 'react'
import { A, Img } from './style'

const DEFAULT_IMG = 'https://tentulogo.com/wp-content/uploads/mundial-mascotas-Zacumi-2010.jpg'

export const Category = ({ cover = DEFAULT_IMG, path, emoji = '?' }) => {
  return (
    <A href={path}>
      <Img src={cover} alt='name' />
      {emoji}
    </A>
  )
}
