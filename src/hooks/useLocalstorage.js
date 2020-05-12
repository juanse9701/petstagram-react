import { useState } from 'react'

export const useLocalstorage = (key, valueInitial) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : valueInitial
    } catch {
      return valueInitial
    }
  })

  const setLocalStorage = (valueKey) => {
    try {
      setValue(valueKey)
      window.localStorage.setItem(key, JSON.stringify(valueKey))
    } catch (e) {
      console.error(e)
    }
  }

  return [value, setLocalStorage]
}
