'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProgramaInHouse } from '.'
import { globalContext } from '@/context/GlobalContext'
import whatLinkText from '@/helpers/whatLinkText'
import InHouseForm from './components/InHouseForm'
import inHousePopup from '@/interfaces/inHousePopup'

export default function InHousePopUp (props:inHousePopup) {
  const { titulo, descripcion, asesores, imagen } = props
  const { user } = useContext(globalContext)

  return (
    <div className='flex'>
      <section className='w-[581px] p-[48px] bg-[#04a5e2] popUp:hidden'>
        <Image
          src='/img/nuevo_logo_blanco.webp'
          className='mb-[1rem]'
          width={180}
          height={50.25}
          alt='logo de desarrollog global'
        />
        <div className='flex items-start mb-[1rem]'>
          <Image
            src={imagen}
            className='rounded-[.5rem]'
            width={300}
            height={263}
            alt='chica usando computadora'
          />
          <Image
            src='/img/FechaInHouse.webp'
            width={150}
            height={134}
            alt='flecha señalando'
            className='flex-1'
          />
        </div>
        <ProgramaInHouse />
        <p className='text-[24px] uppercase text-[#fff] block mb-[1.2rem] mt-[2.2rem]'>
          {
            titulo
          }
        </p>
        <div className='flex gap-[.5rem]'>
          <Link
            href='mailto:asesoria@desarrolloglobal.pe'
            className='flex rounded-[.5rem] items-center py-[6px] px-[12px] gap-[.5rem] bg-[#f8f9fa] hover:bg-[#dddddd]'
          >
            <Image
              src='/img/iconEmail.webp'
              width={20}
              height={16}
              alt='icono email'
            />
            asesoria@desarrolloglobal.pe
          </Link>
          <Link
            href={whatLinkText({ email: user?.correo, subject: 'programa In House', asesor: asesores[0], program: titulo, phone: asesores[0].telefono })}
            target='_blank'
            className='text-[#fff] rounded-[.5rem] items-center py-[6px] px-[12px] gap-[.5rem] bg-[#198754] hover:bg-[#0f5534] flex' rel='noreferrer'
          >
            <Image
              src='/img/iconWhatWhite.webp'
              width={25}
              height={25}
              alt='icono whatsapp'
            />
            Solicitar por whatsapp
          </Link>
        </div>
      </section>
      <section className='w-[581px] p-[48px] bg-[#fff] popUp:px-[24px]'>
        <ProgramaInHouse />
        <p className='text-[24px] text-[#0d6efd] my-[1rem]'>
          {titulo}
        </p>
        <p className='mb-[1rem]'>
          {
            descripcion
          }
        </p>
        <h2 className='text-[32px] mb-[1rem]'>Solicíta una proforma aquí</h2>
        <InHouseForm {...props} />
      </section>
    </div>
  )
}
