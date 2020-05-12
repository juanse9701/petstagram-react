import React from 'react'
import { Navbar, A } from './style'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const FONT_SIZE = '32px'

export const Menu = () => {
  return (
    <Navbar>
      <A to='/'><MdHome size={FONT_SIZE} /></A>
      <A to='/favs'><MdFavoriteBorder size={FONT_SIZE} /></A>
      <A to='/user'><MdPersonOutline size={FONT_SIZE} /></A>
    </Navbar>
  )
}
