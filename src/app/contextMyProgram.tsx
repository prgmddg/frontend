'use client'

import program from '@/types/program'
import { createContext, ReactNode, useState } from 'react'

export const MyProgramContext = createContext<{ pr: program, togglePr:(v: program) => void } | null>(null)

export const ProviderMyProgram = ({ children }: { children: ReactNode }) => {
  const [pr, setPr] = useState<program>('proximos inicios')

  const togglePr = (v: program) => setPr(v)

  return (
    <MyProgramContext.Provider value={{ pr, togglePr }}>
      {children}
    </MyProgramContext.Provider>
  )
}
