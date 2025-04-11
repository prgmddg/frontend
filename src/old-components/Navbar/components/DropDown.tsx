'use client'

import React, { useContext } from 'react'
import { BeneficioItem, DropDownItem } from '.'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { globalContext } from '@/context/GlobalContext'

export const DropDown = ({ label }:{label:string}) => {
  const { cursos, diplomas } = useContext(globalContext)

  const data = label === 'cursos' ? cursos : diplomas
  const finalData = data.slice(0, 10)

  return (
    <Transition
      enter='transition-all duration-200'
      enterFrom='opacity-0 translate-y-[.5rem]'
      enterTo='opacity-1 translate-y-[1.8rem]'
      leave='transition-all duration-200'
      leaveFrom='opacity-1 translate-y-[.5rem]'
      leaveTo='opacity-0 translate-y-[1rem]'
    >
      <Menu.Items>
        <div
          className='bg-[#fff] left-[-5rem] flex transition-all duration-[200ms] absolute top-0 px-[2rem] py-[1.5rem] rounded-[.5rem] border-[#bec3ca] border-[1px]'
        >
          <section className='mr-[2.5rem] flex flex-col items-center justify-between'>
            <div>
              <h1 className='text-[2rem] capitalize font-semibold mb-[1rem] w-[100%] text-left'>
                {label}
              </h1>
              <section className='grid grid-cols-[repeat(2,minmax(314px,1fr))] gap-[1rem] mb-[1rem]'>
                {finalData.map((d) => (
                  <DropDownItem
                    key={d.id}
                    img={d.imagen}
                    title={d.titulo}
                    date={d.inicio}
                    type={label}
                    icon={d.icono}
                    tag={d.etiqueta}
                  />
                ))}
              </section>
            </div>
            <Menu.Item>
              <Link
                href={`/${label}`}
                className='bg-blue-600 transition-all duration-200 hover:bg-blue-500 inline-block px-[7rem] py-[.4rem] text-[#fff] rounded-[.5rem]'
              >
                Ver mas {label}
              </Link>
            </Menu.Item>
          </section>
          <section className='bg-fieldGrey px-[2.7rem] py-[1.8rem] flex flex-col gap-[1rem]'>
            <h1 className='text-[1.8rem] capitalize font-medium'>
              Nuestros Beneficios
            </h1>
            <BeneficioItem
              img='https://nuevapagina.s3.amazonaws.com/IconLiveDiploma.webp'
              color='text-red-500'
              label='Clases en Vivo'
              alt='icono de transmision en vivo'
            />
            <BeneficioItem
              img='https://nuevapagina.s3.amazonaws.com/IconMenu2.webp'
              color='text-yellow-500'
              label='Certificación Desarrollog Global'
              alt='icono de certificado'
            />
            <BeneficioItem
              img='https://nuevapagina.s3.amazonaws.com/IconMenu3.webp'
              color='text-green-500'
              label='Garantía de Calidad'
              alt='icono de garantia'
            />
            <BeneficioItem
              img='https://nuevapagina.s3.amazonaws.com/IconMenu4.webp'
              color='text-blue-500'
              label='Plataforma Premium'
              alt='icono de laptop'
            />
            <p className='uppercase text-blue-500 block text-center'>
              TODAS NUESTROS CURSOS TIENES MAS SESIONES
            </p>
            <p className='block text-center'>Te damos mas por tu dinero</p>
          </section>
        </div>
      </Menu.Items>
    </Transition>
  )
}
