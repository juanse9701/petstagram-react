import React from 'react'
import { ListFavs } from '../containers/ListOfFavs'
import { Helmet } from 'react-helmet'

export default () => (
  <>
    <Helmet>
      <title>Favoritos | Petsagram</title>
      <meta name='description' content='Aqui encontrarás las imagenes que más te han gustado de todas las mascotas posibles' />
    </Helmet>
    <section style={{ margin: '0 1rem' }}>
      <h2>Tus Favoritos</h2>
      <ListFavs />
    </section>
  </>
)
