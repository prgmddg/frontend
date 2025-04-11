import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const AcercaDeNosotros = () => {
  return (
    <MyBlock
      header={{
        h: 'Certificacion de Calidad'
      }}
    >
      <div className='h-auto bg-gradient-to-r from-transparent via-[#000482] to-[#000482] relative w-full lg:w-[1100px] grid grid-cols-1 md:grid-cols-2 rounded-sm' id='elegirnos'>

        <div className='relative w-full h-full hidden md:block'>
          <Image src='/img/ImageCertificacion.webp' alt='Desarrollo Global' width={430} height={553} className='absolute z-[-999] w-full' />
        </div>
        <div className='text-white text-left p-5'>
          <Image src='/img/Iso90001.webp' alt='Desarrollo Global' width={225} height={151} />
          <p className='mt-5'>En nuestra institución, nos enorgullece ofrecer capacitación de calidad, respaldada por expertos altamente calificados en sus respectivos campos. Además, contamos con certificaciones ISO 9001-2015, lo que garantiza que nuestros procesos y servicios cumplen con los más altos estándares de calidad.</p>
          <button className='bg-[#FE7F00] text-white px-10 py-2 rounded-sm mt-10 text-lg rounded-[.5rem]'>
            <Link href='/iso-9001-2015'>Ver Certificado</Link>
          </button>
        </div>
      </div>
    </MyBlock>
  )
}
