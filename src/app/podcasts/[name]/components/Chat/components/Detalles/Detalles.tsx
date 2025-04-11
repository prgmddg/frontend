'use client'
import { seminarioContext } from '../../../../context/SeminarioContext'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function Detalles () {
  const { titulo, profesor } = useContext(seminarioContext) as { id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string, profesor: { imagen: string, nombre: string, descripcion: string } }

  return (
    <div className='text-[1.6rem] flex flex-col'>
      <span className='text-[#3d87f5] font-bold'>Tema del Seminario</span>
      <span className='text-white block mb-[1rem] font-bold'>{titulo}</span>
      <span className='text-[#3d87f5] mb-[1rem] font-bold'>¿Quien es el Docente?</span>
      <section>
        <div className='flex items-center gap-[1rem] mb-[1rem]'>
          <Image
            src={profesor.imagen}
            width={100}
            height={100}
            alt='avatar de profesor de seminario'
            className='rounded-[100%]'
          />
          <p className='text-[1.8rem] text-white'>
            {
              profesor.nombre
            }
          </p>
        </div>
        <p className='text-white text-[16px]'>
          {profesor.descripcion}
        </p>
      </section>
    </div>
  )
}
