'use client'
import cursos from '@/interfaces/cursos'
import React, { ReactNode } from 'react'

interface values
{
  curso:cursos | undefined
}

export const cursosContext = React.createContext<values>({ curso: undefined })

export const CursosContext = ({ children, curso }:{children:ReactNode, curso:cursos}) => {
  const values:values =
  {
    curso
  }

  return (
    <cursosContext.Provider value={values}>
      {
        children
      }
    </cursosContext.Provider>
  )
}
