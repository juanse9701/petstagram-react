import React from 'react'
import { Category } from '../category'
import { List, Item } from './style'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
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
