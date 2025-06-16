import React from 'react'
import Link from 'next/link'

export default function Success () {
  return (
    <div className='flex flex-col gap-[2rem] items-center'>
      <div className='w-[8rem]'>
        <picture>
          <img src='/web/logo.webp' className='w-full aspect-auto' width={0} height={0} alt='icono de desarrollo global' />
        </picture>
      </div>
      <div className='w-[20rem]'>
        <picture>
          <img
            src='/img/gracias.webp'
            className='w-[100%]'
            alt='imagen de agradecimiento'
          />
        </picture>
      </div>
      <p className='text-center'>
        El pago por el programa se realizo correctamente, revisa la bandeja de
        tu correo electrónico para ver la confirmación de pago y los accesos a
        tu plataforma virtual.
      </p>
      <div className='flex gap-[.5rem] px-[7.5rem] items-start mob:px-[0]'>
        <div className='w-[2rem]'>
          <picture>
            <img src='/img/carta.webp' className='w-[100%]' alt='imagen de carta' />
          </picture>
        </div>
        <p className='flex-1'>
          Una copia sobre el detalle de pago fue enviado a tu correo
          electrónico.
        </p>
      </div>
      <Link
        href='/'
        className='w-[100%] py-[1rem] px-[3rem] block bg-green-500 text-[#fff] hover:text-[#fff] font-bold text-center rounded-[.5rem]'
      >
        <span className='w-[100%] font-bold text-[1.3rem] text-center'>Volver</span>
      </Link>
    </div>
  )
}
