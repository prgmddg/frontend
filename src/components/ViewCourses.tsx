'use client'

import { MyProgramContext } from '@/app/contextMyProgram'
import { MostrarCards } from '@/old-components/Servicios'
import { useContext, useEffect } from 'react'

export default function ViewCourses () {
  const c = useContext(MyProgramContext)
  if (c === null) throw new Error('Error')

  useEffect(() => c.togglePr('cursos'), [c])

  return (<MostrarCards program='cursos' />)
}
