import { MyBlock } from '@/components/MyBlock/MyBlock'
import Image from 'next/image'
import React from 'react'

export const GarantiaDeCalidad = () => {
  return (
    <MyBlock styles={{ container: 'bg-myGrey' }}>
      <article className='flex flex-wrap gap-[1rem] garantia:flex-col'>
        <section className='flex-1 text-left garantia:text-center'>
          <h3 className='text-[24px]'>Garantía de Calidad de servicio</h3>
          <p>
            Centro de Capacitación y Desarrollo Global, cuenta con certificación
            ISO 9001-2015 para garantizar la calidad de nuestros programas de
            capacitación.
          </p>
          <p>PROGRAMAS DE POSTGRADO</p>
          <span className='text-[24px] font-bold'>Codigo: CO18.00048/U</span>
        </section>
        <section className='flex-1 flex flex-col items-center'>
          <h3 className='text-[24px]'>Certificación ISO 9001-2015</h3>
          <Image
            className='w-full h-auto aspect-auto max-w-[300px]'
            src='/ISO-2025.webp'
            width={0}
            height={0}
            alt='certificacion iso-9001'
          />
        </section>
      </article>
    </MyBlock>
  )
}
