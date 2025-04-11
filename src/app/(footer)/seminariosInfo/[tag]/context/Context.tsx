'use client'
import proximoSeminario from '@/interfaces/proximoSeminario'
import React, { ReactNode } from 'react'

export const contextSeminario = React.createContext<null|proximoSeminario>(null)

export default function Context ({ children, proximoSeminario }:{children:ReactNode, proximoSeminario:proximoSeminario}) {
  return (
    <contextSeminario.Provider value={proximoSeminario}>
      {
        children
      }
    </contextSeminario.Provider>
  )
}
