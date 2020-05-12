import React from 'react'
import { Article, Img, Div, Button } from './style'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalstorage } from '../../hooks/useLocalstorage'
import { FavButton } from '../FavButton'
import { ToggleLike } from '../../containers/ToggleLike'
import { Link } from '@reach/router'

const DEFAULT_IMG = 'https://tentulogo.com/wp-content/uploads/mundial-mascotas-Zacumi-2010.jpg'

export const PhotoCardComponent = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [like, setLike] = useLocalstorage(`key-${id}`)
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
                    !like && toggleLike({ variables: { input: { id } } })
                    setLike(!like)
                  }
                  return <FavButton liked={like} likes={likes} onClick={handleClick} />
                }
              }
            </ToggleLike>
          </>
      }
    </Article>
  )
}
