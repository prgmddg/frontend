'use client'

import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { profesor } from '@/types/programData'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

interface props extends profesor
{
  etiqueta: string
}

export default function Card (props:props) {
  const { nombre, avatar, etiqueta } = props
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className='my-shadow border max-w-[264px] w-[264px] rounded-[.5rem] bg-white h-[422px] flex flex-col overflow-hidden mx-auto hover:scale-100 hover:border-blue-500'>
        <div className='w-[264px] h-[240px] relative overflow-hidden'>
          <Image
            src={avatar}
            height={300}
            width={264}
            className='h-[initial] w-[100%] absolute left-[0px] top-[50%] translate-y-[-50%]'
            alt='imagen de profesor'
          />
        </div>
        <section className='pt-[30px] px-[21px] pb-[17px] flex flex-col gap-5 justify-between'>
          <div className='flex flex-col gap-5'>
            <span
              className='text-[20px] font-bold leading-[1.4rem] text-myBlue3 line-clamp-2 text-center mb-[5px]'
              title={nombre}
            >
              {nombre}
            </span>
          </div>
          <button
            className='py-[10px] px-[1rem] text-[16px] text-center text-myBlue3 border-[3px] border-myBlue3 w-[100%] font-bold rounded-[.5rem] block hover-animation hover:text-white hover:bg-myBlue3'
            onClick={() => setShow(true)}
          >
            Ver Perfil
          </button>

          <Link href={`/profesores/${etiqueta}`} className='px-[1rem] text-[16px] text-center text-myBlue3 w-[100%] font-bold rounded-[.5rem] block hover-animation hover:underline hover:underline-offset-8'>
            Mas Información ↗️
          </Link>
        </section>
      </div>
      <MyPopUp setIsOpen={setShow} isOpen={show} popUp={<PopUp {...props} />} />
    </>
  )
}

function PopUp (props:profesor) {
  const { nombre, avatar, profesion, descripcion } = props

  return (
    <div className='p-[2rem] bg-white flex gap-[2rem] max-w-[55rem] 800px:flex-col 800px:items-center'>
      <div className='relative w-[270px]'>
        <Image
          width={270}
          height={350}
          alt='avatar de profesor'
          className='w-[100%]'
          src={avatar}
        />
      </div>
      <section className='flex flex-col flex-1 800px:items-center'>
        <span className='text-[1.5rem] font-bold text-myBlue3'>{nombre}</span>
        <span className='text-myGray2'>{profesion}</span>
        <div
          className='mt-[1rem]'
          dangerouslySetInnerHTML={{ __html: descripcion }}
        />
      </section>
    </div>
  )
}
