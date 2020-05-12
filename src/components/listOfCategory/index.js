import React, { useState, useEffect } from 'react'
import { Category } from '../category'
import { List, Item } from './style'
import { useFetchCategories } from '../../hooks/fetchCategories'

export const ListOfCategories = () => {
  const [isFixed, setIsFixed] = useState(false)
  const { categories, loading } = useFetchCategories()

  useEffect(() => {
    const onScroll = (e) => {
      const newScroll = window.scrollY > 200
      isFixed !== newScroll && setIsFixed(newScroll)
    }

    document.addEventListener('scroll', onScroll)

    return () => (document.removeEventListener('scroll', onScroll))
  }, [isFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? [1, 2, 3, 4].map(id => <Item key={id}> <Category /> </Item>)
          : categories.map(value => <Item key={value.id}> <Category {...value} /> </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {isFixed && renderList(true)}
    </>
  )
}
