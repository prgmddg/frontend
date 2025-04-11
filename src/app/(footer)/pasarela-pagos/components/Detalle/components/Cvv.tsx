import React from 'react'
import Image from 'next/image'

export default function Cvv () {
  return (
    <div className='w-[100%] flex justify-center'>
      <div className='max-w-[300px] rounded-sm'>
        <div className='bg-[#fff]  p-[2rem] text-[12px]'>
          <p className='block mb-[.4rem]'>
            Este campo es obligatorio sólo para medios de pago que posean un
            CVV.
          </p>
          <p className='block'>
            El código de seguridad de la tarjeta es el código de 3 dígitos
            impreso en el reverso de su tarjeta, en la parte derecha del área de
            la firma.
          </p>
          <div className='text-center w-[100%]'>
            <Image
              width={268}
              height={129}
              src='/img/cvv.webp'
              className='mx-auto my-0'
              alt='imagen de codigo cvv'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
