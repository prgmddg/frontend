'use client'

import Image from 'next/image'
import React from 'react'

export default function Bancos () {
  return (
    <div className='bg-white px-[2rem] py-[2.5rem] w-[55rem] 1000px:w-[100%] '>
      <span className='text-[1.5rem] font-bold text-myBlueDark'>
        Cuentas Corriente
      </span>
      <div className='mt-5'>

        <div className='bg-blue-100 border px-5 md:px-10 py-5 rounded-md flex gap-10 w-full items-center'>
          <Image src='/img/icons/IconBcp.webp' width={90} height={90} alt='Banco BCP - Desarrollo Global' className='hidden md:block' />
          <div className='text-sm font-semibold'>
            <p>Cta corriente (BCP):</p>
            <p>N° cuenta: 193-1945239-0-77</p>
            <p>CCI: 002-193-001945239077-16</p>
            <p>Centro de Capacitacion y Desarrollo Global</p>
          </div>
        </div>

        <div className='bg-blue-100 border px-5 md:px-10 py-5 rounded-md flex gap-10 w-full items-center mt-5'>
          <Image src='/img/icons/IconNacion.webp' width={90} height={90} alt='Banco de la Nación - Desarrollo Global' className='hidden md:block' />
          <div className='text-sm font-semibold'>
            <p>Cta corriente (Banco de la Nación):</p>
            <p>N° cuenta: 00-015-013982</p>
            <p>CCI: 018-015-000015013982-82</p>
            <p>Centro de Capacitacion y Desarrollo Global</p>
          </div>
        </div>

        <p className='text-[1.5rem] font-bold text-myBlueDark mt-5'>
          Cuentas de ahorros y aplicativos (Yape, Plin) (Solicitar)
        </p>

        <div className='bg-blue-100 border p-5 rounded-md flex justify-between gap-5 w-full mt-5 flex-wrap'>
          <Image src='/img/icons/IconNacion.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/IconBcp.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/Scotiabank.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/Interbank.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/Bbva.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/IconYape.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
          <Image src='/img/icons/IconPlin.webp' width={80} height={80} alt='Banco BCP - Desarrollo Global' />
        </div>

      </div>
    </div>
  )
}
