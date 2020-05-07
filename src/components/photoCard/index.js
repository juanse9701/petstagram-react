import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Img, Article, Button } from './style'

const DEFAULT_IMG = 'https://tentulogo.com/wp-content/uploads/mundial-mascotas-Zacumi-2010.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  return (
    <article>
      <a href={`/detatil/${id}`}>
        <Article>
          <Img src={src} alt='name' />
        </Article>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
