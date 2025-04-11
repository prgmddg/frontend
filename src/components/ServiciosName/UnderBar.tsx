'use client'

import { programContext } from '@/context/ProgramContext'
import parsearFecha from '@/helpers/parsearFecha'
import programData from '@/types/programData'
import Image, { ImageProps } from 'next/image'
import React, { ReactNode, useContext } from 'react'
import { twMerge } from 'tailwind-merge'

export default function UnderBar () {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { inicio, total_sesiones, certificados, tipo, tipo_clase } = program as programData

  return (
    <>
      <div
        className='w-full mt-5 lg:mt-0 lg:w-[70%] px-10 900px:px-0 flex justify-between absolute 900px:relative 900px:top-[initial] 900px:translate-y-0 900px:left-[initial] top-[100%] left-0 gap-y-[6px] 900px:grid-cols-2 translate-y-[-50%] 900px:grid gap-x-[8px]'
        id='intersector'
      >
        <Box
          img={{
            src: '/img/underBar1.webp',
            height: 41,
            width: 41,
            alt: 'icono de calendario'
          }}
          text={
            <>
              Inicio <br />
              {tipo_clase === 'GRABADO' ? '!Hoy Mismo!' : `${inicio?.split('-')[2]} de ${parsearFecha(inicio)}`}
            </>
          }
        />
        <Box
          img={{
            src: '/img/underBar2.webp',
            height: 38,
            width: 38,
            alt: 'icono de reloj'
          }}
          text={
            <>
              Duración <br />
              {total_sesiones} Clases
            </>
          }
        />
        {
          tipo_clase === 'GRABADO'
            ? (
              <Box
                img={{
                  src: '/img/grabados.webp',
                  height: 30,
                  width: 40,
                  alt: 'icono de señal'
                }}
                text={
                  <>
                    Modalidad <br />
                    Asincrona
                  </>
                }
              />
            )
            : (
              <Box
                img={{
                  src: '/img/underBar3.webp',
                  height: 30,
                  width: 40,
                  alt: 'icono de señal'
                }}
                text={
                  <>
                    Modalidad <br />
                    En Vivo
                  </>
                }
              />
            )
        }
        <Box
          img={{
            src: '/img/underBar4.webp',
            height: 38,
            width: 42,
            alt: 'icono de certificado'
          }}
          text={
            <>
              {tipo === 'curso' ? 'Certificación Por' : 'Diploma Por'}
              <br />
              {certificados} hrs Lectivas
            </>
          }
        />
      </div>
    </>
  )
}

interface props {
  img: ImageProps
  text: ReactNode
  className?: string
}

function Box (props: props) {
  const { img, text, className } = props

  return (
    <div
      className={twMerge(
        'flex px-[21px] py-[27px] mob:py-[17px] mob:px-[11px] bg-white items-center rounded-[.5rem] mob:gap-[7px] gap-[10px] my-shadow',
        className
      )}
    >
      <section className='w-[45px] min-w-[45px] mob:min-w-[28px] mob:w-[28px] flex justify-start'>
        <Image
          {...img}
          alt={img.alt}
          className={`h-[${img.height}] w-[${img.width}]`}
        />
      </section>
      <section className='flex-1'>
        <p className='font-medium leading-[22px] mob:text-[13px]'>{text}</p>
      </section>
    </div>
  )
}
