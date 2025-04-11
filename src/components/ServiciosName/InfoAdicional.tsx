'use client'

import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import Image from 'next/image'
import { useContext, ReactNode } from 'react'
import parsearFecha from '@/helpers/parsearFecha'

export const InfoAdicional = () => {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { inicio, total_sesiones, certificados, tipo } = program as programData

  return (
    <section className='bg-[#ECF5FF] shadow-lg' id='intersector'>
      <article className='container mx-auto p-5'>
        <div className='grid gap-5 lg:gap-0 xl:gap-0 2xl:gap-0 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%]'>
          <Box
            img={
              <Image
                src='/img/IconCalenDiploma.webp'
                alt='icono de calendario'
                width={35}
                height={35}
              />
            }
            content={
              <>
                <p>Inicio</p>
                <p className='-mt-1'>
                  {inicio.split('-')[2]} de {parsearFecha(inicio)}
                </p>
              </>
            }
          />
          <Box
            img={
              <Image
                src='/img/IconRelojDiploma.webp'
                alt='icono de reloj'
                width={32}
                height={32}
              />
            }
            content={
              <>
                <p>Cantidad</p>
                <p className='-mt-1'>{total_sesiones} Sesiones</p>
              </>
            }
          />
          <Box
            img={
              <Image
                src='/img/IconCertiDiploma.webp'
                alt='icono de certifiacion'
                width={36}
                height={32}
              />
            }
            content={
              <>
                <span className='block'>
                  {tipo === 'curso' ? 'Certificación' : 'Diploma'} Por {certificados}&nbsp;hrs&nbsp;Lectivas
                </span>
              </>
            }
          />
          <Box
            img={
              <Image
                src='/img/icons/IconLiveDiploma.webp'
                alt=''
                width='68'
                height='35'
              />
            }
            content={
              <>
                <p>Clases</p>
                <p className='-mt-1'>en vivo</p>
              </>
            }
          />
        </div>
      </article>
    </section>
  )
}

interface props
{
    content:ReactNode
    img:ReactNode
}

function Box ({ content, img }:props) {
  return (
    <div className='flex items-center gap-[.5rem]'>
      <div className='w-[3rem] flex items-start justify-start'>
        {img}
      </div>
      <div className='text-base font-semibold flex-1 mob:text-[.8rem] mob:leading-[1.1rem]'>
        {
          content
        }
      </div>
    </div>
  )
}
