'use client'

import parsearFecha from '@/helpers/parsearFecha'
import programData from '@/types/programData'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const CardsGlo = (props: programData) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const {
    titulo,
    tipo,
    precio,
    tipo_clase,
    inicio,
    imagen,
    etiqueta,
    certificados,
    total_sesiones
  } = props

  return (
    <>
      <div
        className={`w-full my-shadow2 pb-[18px] 430px:w-[initial] rounded-lg mx-auto flex flex-col border-[4px] p-[.4rem] border-[transparent] hover:border-primary hover:translate-y-[-1rem] duration-[400ms] ease-in-out h-[632px] ${tipo_clase === 'GRABADO' ? 'bg-[#e2dff6]' : 'bg-white'}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link
          href={`/${tipo}s${tipo_clase === 'GRABADO' ? '/grabados' : ''}/${etiqueta}`}
          className='overflow-hidden rounded-lg'
        >
          <picture>
            <img
              src={imagen}
              alt={`imagen de ${titulo}`}
              className='w-full aspect-[3/2] rounded-t-md'
              width={0}
              height={0}
              loading='lazy'
            />
          </picture>
        </Link>
        <div className='flex flex-col flex-1 px-0 pt-5'>
          <div className='flex flex-col gap-[.3rem] text-[.8rem] mb-[8px]'>
            <div className='flex justify-between text-white h-[30px] 430px:h-[initial] 430px:!text-[.8rem] 430px:flex-col 430px:gap-[.2rem] 430px:text-center'>

              <span className='flex items-center bg-primary font-medium capitalize px-[.8rem] text-[.9rem]  rounded-[0px_.5rem_.5rem_0px] 430px:rounded-[.5rem] justify-center'>

                {tipo_clase === 'GRABADO' ? `${tipo} Asincrónico` : `${tipo} ${tipo === 'curso' ? 'Especializado' : 'De Alta Especialización'}`}

              </span>
              <span className='bg-red-600 font-bold text-[18px] pl-[.6rem] pr-[.4rem] rounded-[.5rem_0px_0px_.5rem] 430px:rounded-[.5rem]'>
                {tipo_clase === 'GRABADO' ? (<span>24/7</span>) : (<><span className='text-[1.1rem]'>{precio?.descuento}</span>% Dsct</>)}
              </span>
            </div>
          </div>
          <div className='px-[1.2rem] flex-1 flex flex-col justify-between'>
            <span className='text-xl h-[96px] text-[26px] font-bold text-center overflow-hidden flex items-center justify-center'>
              <span className=' line-clamp-3'>{tipo === 'diplomado' ? titulo.replace('Diploma', 'Diplomado') : titulo}</span>
            </span>
            <div className={`border-b-[1px] ${tipo_clase === 'GRABADO' ? 'border-primary/25' : 'border-myGray'} mb-[1rem] block`} />
            <div className='flex justify-between mb-[1.5rem] flex-wrap gap-y-[15px]'>
              <Box
                img={{ src: '/img/cardCalendar.webp', width: 25, height: 25, alt: 'icono de calendario' }}
                label={
                  <>
                    {
                      tipo_clase === 'GRABADO'
                        ? '!Inicia Ahora!'
                        : (
                          <>
                            Inicio:
                            <br />
                            {inicio?.split('-')[2]}&nbsp;de&nbsp;{parsearFecha(inicio)}
                          </>
                        )
                    }
                  </>
                }
              />
              <Box
                img={{ src: '/img/signal-stream.webp', width: 26, height: 19, alt: 'icono de señal' }}
                className='text-red-600 w-[117px]'
                label={
                  <>
                    Modalidad
                    <br />
                    {tipo_clase === 'GRABADO' ? 'Asincrónico' : 'en vivo'}
                  </>
                }
              />
              <Box
                img={{ src: '/img/reloj.webp', width: 25, height: 25, alt: 'icono de reloj' }}
                label={
                  <>
                    Duración
                    <br />
                    {`${total_sesiones}`.length === 1
                      ? `0${total_sesiones}`
                      : total_sesiones}
                    &nbsp;Clases
                  </>
                }
              />
              <Box
                img={{
                  src: '/img/certiIcon.webp',
                  width: 26,
                  height: 23,
                  alt: 'icono de calendario'
                }}
                className='w-[117px]'
                label={
                  <>
                    {certificados}&nbsp;Horas
                    <br />
                    Certificadas
                  </>
                }
              />

            </div>
            {
              tipo_clase === 'GRABADO'
                ? (
                  <Link
                    className={`border-[3px] ${isHover ? 'bg-primary text-white' : 'bg-white text-primary'
                    } border-primary duration-[400ms] ease-in-out text-[18px] font-bold p-2.5 w-[100%] block text-center rounded-lg`}
                    href={`/${tipo}s/grabados/${etiqueta}`}
                    aria-label={`detalles sobre el programa ${titulo}`}
                    title={`detalles sobre el programa ${titulo}`}
                  >
                    Ver Detalles
                  </Link>
                )
                : (
                  <Link
                    className={`border-[3px] ${isHover ? 'bg-primary text-white' : 'bg-white text-primary'
                    } border-primary duration-[400ms] ease-in-out text-[18px] font-bold p-2.5 w-full block text-center rounded-lg`}
                    href={`/${tipo}s/${etiqueta}`}
                    aria-label={`detalles sobre el programa ${titulo}`}
                    title={`detalles sobre el programa ${titulo}`}
                  >
                    Ver Detalles
                  </Link>
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}

interface props {
  img: ImageProps
  label: ReactNode
  className?: string
}

function Box ({ img, label, className }: props) {
  return (
    <div className={twMerge('flex gap-[14px] leading-[18px] items-center mob:text-[.8rem] text-[14px]', className)}>
      <Image {...img} alt={img.alt} />
      <span className='font-bold max-w-[100px]'>
        {label}
      </span>
    </div>
  )
}
