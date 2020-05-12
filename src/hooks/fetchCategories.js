import { useEffect, useState } from 'react'

const URI = 'https://petgram-server.juanse9701.now.sh/categories'

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    window.fetch(URI)
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
        setLoading(false)
      })
      .catch(() => console.log('error en la peticion'))
  }, [])

  return { categories, loading }
}
