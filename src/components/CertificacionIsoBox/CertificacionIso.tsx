import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export const CertificacionIsoBox = ({ styles }:{styles?:string}) => {
  return (
    <div className={twMerge('mb-[4rem] px-[48px] py-[24px] shadow-2xl gap-[2rem] flex justify-center items-center max-w-[750px] flex-wrap', styles)}>
      <Image
        src='/img/Iso9001.webp'
        height={132.5}
        width={207.99}
        alt='certificacion iso 9001'
      />
      <section className='flex flex-col gap-[.3rem] flex-1'>
        <span className='mb-[.2rem] text-[30px] leading-[2.5rem] text-slate-900 font-bold '>
          Certificación ISO 9001-2015
        </span>
        <p className='leading-[1.2rem] text-neutral-700 font-bold'>
          Centro de Capacitación y Desarrollo Global, cuenta con
          certificación ISO 9001-2015 para garantizar la calidad de nuestros
          programas de capacitación.
        </p>
        <span className='font-bold'>Cod: CO18.00048/U</span>
      </section>
    </div>
  )
}
