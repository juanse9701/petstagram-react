import React from 'react'
import { A, Grid, Img } from './style'

export const ListFavsComponent = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(({ src, id }) => <A to={`/detail/${id}`} key={id}><Img id={id} src={src} /></A>)
      }
    </Grid>
  )
}
