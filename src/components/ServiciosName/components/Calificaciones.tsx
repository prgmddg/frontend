'use client'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext } from 'react'

export const Calificaciones = ({ tipo } : {tipo: string}) => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { alumnos, tipo: tipoP } = program as programData

  return (
    <div className={`border rounded-lg 900px:w-[100%] 428px:px-[17px] 900px:h-[52px] mx-auto flex flex-wrap justify-between px-[21px] 900px:py-0 xl:justify-between 2xl:justify-between items-center w-full ${tipo === 'header' ? 'text-white border-white py-[17px] px-[1rem] w-full' : 'text-black border-gray-200 p-3 w-full lg:w-[75%] xl:w-[75%] 2xl:w-[75%]'}`}>
      <div className='flex gap-3 items-center'>
        <Image src='/img/icons/iconEstrellas.webp' alt='estrellas de puntuacion' width='93' height='16' className='rounded-t-lg 900px:hidden' />
        <Image src='/img/realStarts.webp' alt='estrellas de puntuacion' width='162' height='22' className='hidden 900px:block 428px:w-[138px]' />
        <p className='font-bold 900px:hidden'>4.6 de calificación</p>
      </div>
      <div className='flex items-center gap-3 font-bold justify-center'>
        <FontAwesomeIcon icon={faUsers} />
        <span className='capitalize 428px:text-[14px]'>{alumnos} alumnos <span className='900px:hidden'>capacitados en este {tipoP}</span></span>
      </div>
    </div>
  )
}
