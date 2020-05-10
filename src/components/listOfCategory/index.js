import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { List, Item } from './style'
/* import { categories } from '../../../api/db.json' */

const URI = 'https://petgram-server.juanse9701.now.sh/categories'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch(URI)
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
      })
      .catch(() => console.log('error en la peticion'))
  }, [])

  return (
    <>
      <List>
        {
          categories.map(value => <Item key={value.id}> <Category {...value} /> </Item>)
        }
      </List>
    </>
  )
}
