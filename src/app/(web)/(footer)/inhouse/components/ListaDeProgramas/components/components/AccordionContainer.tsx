'use client'

import React, { useEffect } from 'react'
import useAcordeon from '@/hooks/useAcordeon'
import accordeonPrograma from '../interfaces/accordeonPrograma'
import Image from 'next/image'

export const AccordionContainer = (props:accordeonPrograma) => {
  const [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub] = useAcordeon()
  const { label, list, open } = props as any

  useEffect(() => {
    if (open) {
      handleAbrirSub()
    }
  }, [handleAbrirSub, open])

  return (
    <div className='w-[100%]'>
      <button
        className='bg-[#978bd6] text-[22px] listaDeProgramas:text-[16px] font-extrabold items-center text-[#fff] py-[16px] px-[48px] rounded-[.5rem] w-[100%] flex justify-between listaDeProgramas:px-[30px] listaDeProgramas1:text-[14px] listaDeProgramas1:px-[15px]'
        onClick={handleAbrirSub}
      >
        <span className='block overflow-hidden text-left whitespace-nowrap text-ellipsis' title={label}>{label}</span>
        <span className=' leading-[1.5rem] font-bold'>{abrirSub ? '+' : '-'}</span>xdd
      </button>
      <section ref={contenidoRef} style={{ height: !abrirSub ? `${alturaMaxima}px` : 0 }} className='overflow-hidden transition-all duration-200 h-fit w-[100%]'>
        <ul className='py-[1.5rem] px-[2.5rem] block w-[100%] listaDeProgramas:px-[1.5rem]'>
          {
            list.map((li:string, pos:number) => (
              <li key={pos} className='text-[#fff] text-[20px] flex items-center text-left listaDeProgramas:text-[15px]'>
                <Image src='/img/IconFlecha.webp' height={12} width={6} alt='dg-iconflecha' className='mr-[.5rem]' />
                {li}
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
