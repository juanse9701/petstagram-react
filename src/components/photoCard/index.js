import React from 'react'
import { Article, Img, Div } from './style'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLike } from '../../containers/ToggleLike'
import { Link } from '@reach/router'

const DEFAULT_IMG = 'https://tentulogo.com/wp-content/uploads/mundial-mascotas-Zacumi-2010.jpg'

export const PhotoCardComponent = ({ id, likes = 0, liked, src = DEFAULT_IMG }) => {
  const { ref, show } = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <Div>
                <Img src={src} alt='name' />
              </Div>
            </Link>
            <ToggleLike>
              {
                (toggleLike) => {
                  const handleClick = () => {
                    toggleLike({ variables: { input: { id } } })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleClick} />
                }
              }
            </ToggleLike>
          </>
      }
    </Article>
  )
}
