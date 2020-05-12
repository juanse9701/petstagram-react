import React from 'react'
import { MockCard } from './mockCard'

export const MockListCard = () => (
  <>
    {
      [1, 2, 3].map(id => <MockCard key={id} />)
    }
  </>
)
