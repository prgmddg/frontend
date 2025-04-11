'use client'

import cursos from '@/interfaces/cursos'
import diplomados from '@/interfaces/diplomados'
import diplomas from '@/interfaces/diplomas'
import React, { ReactNode, useState } from 'react'

interface ProgramContext {
  values: {
    program: diplomados|cursos|diplomas,
    isConvenio?: boolean
  },
  setValues: (values: {program:diplomados|cursos|diplomas, isConvenio: boolean}) => void
}
export const programContext = React.createContext<ProgramContext | undefined>(undefined)

export const ProgramContext = ({ children, program, isConvenio = false } : {children:ReactNode, program:diplomados|cursos|diplomas, isConvenio: boolean}) => {
  const [values, setValues] = useState({
    program,
    isConvenio
  })

  return (
    <programContext.Provider value={{ values, setValues }}>
      {
        children
      }
    </programContext.Provider>
  )
}
