'use client'

import { programContext } from '@/context/ProgramContext'
import parsearFecha from '@/helpers/parsearFecha'
import programData from '@/types/programData'
import Image, { ImageProps } from 'next/image'
import { ReactNode, useContext } from 'react'
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
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg' 
              fill='currentColor'
              viewBox='0 0 256 256'
              className='w-10 h-10 text-blue-600'
            >
              <path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z'></path>
            </svg>
          }
          text={
            <>
              Inicio <br />
              {tipo_clase === 'GRABADO' ? '!Hoy Mismo!' : `${inicio?.split('-')[2]} de ${parsearFecha(inicio)}`}
            </>
          }
        />
        <Box
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg' 
              fill='currentColor'
              className='w-10 h-10 text-blue-600'
              viewBox='0 0 256 256'
            >
              <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z'></path>
            </svg>
          }
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
                icon={
                  <svg
                    className='w-10 h-10 text-red-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 256 256'
                  >
                    <path d='M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z'></path>
                  </svg>
                }
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
                icon={
                  <svg
                    className='w-10 h-10 text-red-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 256 256'
                  >
                    <path d='M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z'></path>
                  </svg>
                }
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
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 256 256'
              className='w-10 h-10 text-blue-600'
            >
              <path d='M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z'></path>
            </svg>
          }
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
  icon?: ReactNode
  img?: ImageProps
  text: ReactNode
  className?: string
}

function Box (props: props) {
  const { text, className } = props

  return (
    <div
      className={twMerge(
        'flex px-[21px] py-[27px] mob:py-[17px] mob:px-[11px] bg-white items-center rounded-[.5rem] mob:gap-[7px] gap-[10px] my-shadow',
        className
      )}
    >
      <section className='w-[45px] min-w-[45px] mob:min-w-[28px] mob:w-[28px] flex justify-start'>
        {
          props.img && (
            <Image
              {...props.img}
              alt={props.img.alt}
              className={`h-[${props.img.height}] w-[${props.img.width}]`}
            />
          )
        }
        {
          props.icon
        }
      </section>
      <section className='flex-1'>
        <p className='font-medium leading-[22px] mob:text-[13px]'>{text}</p>
      </section>
    </div>
  )
}
