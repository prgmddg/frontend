'use client'
import React, { ReactNode } from 'react'

export const seminarioContext = React.createContext<{ id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string }|null>(null)

export default function SeminarioContext ({ children, seminarios }:{children:ReactNode, seminarios: { id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string }}) {
  const values: { id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string } =
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
