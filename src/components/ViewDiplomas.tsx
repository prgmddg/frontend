'use client'

import { MyProgramContext } from '@/app/contextMyProgram'
import { MostrarCards } from '@/old-components/Servicios'
import { useContext, useEffect } from 'react'

export default function ViewDiplomas () {
  const c = useContext(MyProgramContext)
  if (c === null) throw new Error('Error')

  useEffect(() => c.togglePr('diplomas'), [c])

  return (<MostrarCards program='diplomas' />)
}
