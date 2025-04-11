import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { globalContext } from '@/context/GlobalContext'
import proximoSeminario from '@/interfaces/proximoSeminario'

export const NotiItems = () => {
  const { seminarios: notis } = useContext(globalContext)

  return (
    <ul className='py-[.5rem] border-b-[1px] border-borderGrey block max-h-[30rem] overflow-y-auto'>
      {
        notis.map((not, pos) => (
          <Item key={pos} {...not} />
        ))
      }
    </ul>
  )
}

function Item ({ banner, titulo, fecha, etiqueta, hora }:proximoSeminario) {
  return (
    <li className='flex items-center gap-[1rem] relative nav-bar:text-[.7rem] p-[.5rem]'>
      <Image
        src={banner ? banner?.seminario || '' : ''}
        width={100}
        height={67}
        alt='DG-cartImage'
        className='rounded-[.4rem]'
      />
      <section className='flex-1 flex flex-col'>
        <span className='line-clamp-3 text-ellipsis overflow-hidden font-bold '>
          {titulo}
        </span>
        <span>
          <span className='font-bold'>Fecha: </span>
          {fecha}
        </span>
        <span>
          <span className='font-bold'>Hora: </span>
          {hora}
        </span>
        <Link href={`/seminariosInfo/${etiqueta}`} className='text-myLightBlue hover:underline'>Ver Seminario 👉</Link>
      </section>
    </li>
  )
}
