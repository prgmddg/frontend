'use client'

import { globalContext } from '@/context/GlobalContext'
import { asesor } from '@/types/programData'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function WhatssAppLink ({ asesores, titulo, tipo_clase }: { asesores: Array<asesor>, titulo: string, url: string, tipo_clase: string }) {
  const { user } = useContext(globalContext)
  const telefono = asesores ? asesores[0]?.telefono || asesores[0]?.telefono_2 : 'Error'

  return (
    <a target='_blank' href={`https://api.whatsapp.com/send?phone=51${telefono}&text=Hola solicito informacion del ${tipo_clase.toLowerCase()}: ${titulo},%0D%0Ami correo es: ${user?.correo || ''}`} className='fixed bottom-[2rem] left-[1rem] z-[9999] w-[5rem] max-h-[5rem]' rel='noreferrer'>
      <div className='whatAnimation flex w-[1.5rem] h-[1.5rem] absolute top-0 left-0 text-white rounded-[100%] justify-center items-center bg-red-500'>
        1
      </div>
      <div className='text-[.8rem] hidden lg:flex flex-col p-[1rem] rounded-[.5rem] border-[1px] border-gray-500 w-[192px] max-h-[136px] bg-white absolute top-0 left-0 translate-y-[-105%]'>
        <p className='block mb-[.3rem]'>
          Hola solicito información del programa:
        </p>
        <p className='font-bold line-clamp-3 flex-1'>
          {
            titulo
          }
        </p>
      </div>
      <Image src='/img/what.webp' alt='icono de whatssapp' height={56} width={56} />
    </a>
  )
}
