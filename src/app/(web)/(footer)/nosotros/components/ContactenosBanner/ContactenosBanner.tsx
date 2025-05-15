'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import Image from 'next/image'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export const ContactenosBanner = () => {
  return (
    <div className='bg-[#c2c8f9] relative'>
      <article className='grid container grid-cols-1 lg:grid-cols-2 justify-between py-[3rem]'>
        <section className='text-[#1900a2]'>
          <div className='w-full mx-auto text-center lg:text-left'>
            <h1 className='!font-semibold text-[40px] inline-flex flex-col contactenosBanner:items-center contactenosBanner:text-[28px]'>
              <span>Centro de Capacitación y </span>
              <span className='text-[#0757cd]'>Desarrollo Global 🎯</span>
            </h1>
            <span className='mt-[.8rem] mb-[1.5rem] block contactenosBanner:text-center font-bold'>
              Más de 13 años formando servidores públicos
            </span>
            <div className='grid grid-cols-[repeat(2,minmax(0,270px))] gap-[2rem] contactenosBanner:grid-cols-[repeat(2,1fr)] '>
              <Box
                img={{ img: 'NosoIcon1.webp', h: 54, w: 47, alt: 'icono de mano levantando el dedo' }}
                p='Capacitando'
                span={`+ ${13} años`}
              />
              <Box
                img={{ img: 'NosoIcon2.webp', h: 42, w: 67, alt: 'icono de laptop abierta' }}
                p='Alumnos Virtuales'
                span='+ 7,000'
              />
              <Box
                img={{ img: 'NosoIcon3.webp', h: 53, w: 60, alt: 'icono de profesor dictando clases' }}
                p='Alumnos Presenciales'
                span='+ 4,000'
              />
              <Box
                img={{ img: 'NosoIcon4.webp', h: 58, w: 40, alt: 'icono de certificado' }}
                p='Alumnos Certificados'
                span='+ 14,000'
              />
            </div>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className='w-full'>
            <ReactPlayer url='https://vimeo.com/manage/videos/952089788' controls width='100%' height='350px' />
          </div>
        </section>
      </article>
    </div>
  )
}

function Box ({ img, p, span }:{img:{img:string, h:number, w:number, alt:string}, p:string, span:string}) {
  return (
    <div className='flex items-center contactenosBanner:justify-center gap-[1rem] flex-wrap'>
      <Image
        src={`/img/${img.img}`}
        height={img.h}
        width={img.w}
        alt={img.alt}
      />
      <section className='flex flex-col items-center'>
        <p className='text-[14px]'>{p}</p>
        <span className=' text-[32px] contactenosBanner:text-[28px] font-bold'>{span}</span>
      </section>
    </div>
  )
}
