'use client'
import seminarios from '@/interfaces/seminarios'
import React, { ReactNode } from 'react'

export const seminarioContext = React.createContext<seminarios|null>(null)

export default function SeminarioContext ({ children, seminarios }:{children:ReactNode, seminarios:seminarios}) {
  const values:seminarios =
  {
    ...seminarios
  }

  return (
    <seminarioContext.Provider value={values}>
      {
        children
      }
    </seminarioContext.Provider>
  )
}
