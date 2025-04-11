'use client'

import { Categoria } from '@/app/components/Categoria'
import { MyProgramContext } from '@/app/contextMyProgram'
import getRequest from '@/helpers/getRequest'
import program from '@/types/program'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { CardsGlo } from '../Cards'

interface props {
  program: program,
  children?: ReactNode
  programSelector?: boolean
  header?: { h2: string, p: string }
  footer?: ReactNode
}

export const MostrarCards = (props: props) => {
  const {
    program,
    programSelector = false,
    children,
    header = {
      h2: '¿En que curso deseas capacitarte?',
      p: 'Mas de 50,000 alumnos capacitados'
    }
  } = props
  if (MyProgramContext === null) throw new Error('MyProgramContext is null')
  const cn = useContext(MyProgramContext)
  if (cn === null) throw new Error('Error')

  const [myProgram, setMyProgram] = useState<program>(cn.pr)
  const [data, setData] = useState<any>()
  const [all, setAll] = useState<any>({ poximosInicios: [], diplomas: [], grabados: [], cursos: [], diplomados: [] })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function myGetting () {
      setLoading(true)
      const { res: cursos } = await getRequest('cursos')
      const { res: diplomas } = await getRequest('diplomas')
      const { res: diplomados } = await getRequest('diplomados')

      const proximos = [...cursos.envivo, ...diplomas.envivo]

      const poximosInicios = proximos.sort(
        (a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime())
      setAll({
        poximosInicios,
        grabados: [...cursos?.grabado_web, ...diplomas.grabados_web],
        cursos: [...cursos.envivo],
        diplomados: [...diplomados.envivo],
        diplomas: [...diplomas.envivo]
      })
      setLoading(false)
      settingData(cn?.pr ?? 'proximos inicios', {
        poximosInicios,
        grabados: [...cursos?.grabado_web, ...diplomas.grabados_web],
        cursos: [...cursos.envivo],
        diplomados: [...diplomados.envivo],
        diplomas: [...diplomas.envivo]
      })
    }
    myGetting()
  }, [cn?.pr])

  useEffect(() => {
    settingData(cn.pr, all)
  }, [all, cn.pr])

  function settingData (myProgram: program, all: any) {
    if (myProgram === 'proximos inicios') {
      const nuevaData = [...all.poximosInicios]
      setData(nuevaData || [])
    }
    if (myProgram === 'cursos') {
      setData(all.cursos || [])
    }
    if (myProgram === 'diplomas') {
      setData(all.diplomas || [])
    }
    if (myProgram === 'diplomados') {
      setData(all.diplomados || [])
    }
    if (myProgram === 'grabados') {
      setData(all.grabados || [])
    }
  }

  return (
    <section className='pb-[1.5rem] px-[1rem]' id='programas'>
      <article className={`${program === 'inHouse' ? 'container' : 'max-w-[100%] w-[1200px]'} mx-auto flex flex-col items-center`}>
        {!programSelector && (
          <>
            <h2 className='text-center font-bold text-4xl mt-10 text-[#0E2FAA]'>
              {header.h2}
            </h2>
            <p className='mt-2 text-xl font-normal text-center'>{header.p}</p>
          </>
        )}
        {programSelector && (
          <div className='w-[100%]'>
            <h2 className='text-center font-bold text-3xl mt-16 mb-[2rem]'>
              Categoría de Programas
            </h2>
            <Categoria myProgram={myProgram} setMyProgram={setMyProgram} />
          </div>
        )}
        <div className={`grid w-[100%] mt-10 gap-5 ${program === 'inHouse' ? 'grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))]' : 'grid-cols-[repeat(auto-fill,minmax(20.3rem,1fr))]'}`}>
          {!children && data && !loading && (
            <>
              {data.map((d: any, index: any) => (
                <CardsGlo key={index} {...d} />
              ))}
            </>
          )}
          {children && children}
        </div>
        {loading && <div className='text-center font-bold text-[1.5rem]'>Cargando...</div>}
      </article>
    </section>
  )
}
