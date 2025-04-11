'use client'

import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import React, { useContext } from 'react'

export function Header () {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { titulo, tipo, descripcion } = program as programData

  return (
    <div className='bg-myBlue2 my-padding pt-[72px]'>
      <article className='w-[1283px] mx-auto max-w-[100%] flex justify-start'>
        <section className='w-[840px] max-w-[100%] text-white'>
          <span className='bg-myYellow mb-[23px] px-[22px] py-[9px] rounded-[.5rem] font-bold text-[22px] capitalize inline-block'>
            {tipo} de Alta Especialización
          </span>
          <h1 className='text-[55px] font-bold leading-[55px] text-white mb-[29px] block'>
            {
              titulo
            }
          </h1>
          <p className='text-[18px]'>
            {
              descripcion
            }
          </p>
        </section>
      </article>
    </div>
  )
}
