import LoginSignup from '@/old-components/LoginSignup/LoginSignup'
import React from 'react'

import Image from 'next/image'

export default function LoginForm () {
  return (
    <>
      <h1 className='text-[1.3rem] block mb-[1rem]'>
        Bienvenido a la pasarela de pagos
      </h1>
      <p className='block mb-[1.5rem]'>
        Compra el Programa elegido desde nuestra plataforma de manera segura,
        puedes iniciar sesión si eres alumno ó regístrate si aún no estas
        registrado. 🙂
      </p>
      <div className='flex justify-center mb-[2rem]'>
        <div className='py-[.5rem] px-[.8rem] border-[1px] border-gray-300 rounded-[.5rem]'>
          <Image src='/img/logo-DG-nuevo.webp' className='w-[15rem]' height={68} width={240} alt='logo de desarrollo global' />
        </div>
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <LoginSignup styles=' bg-myRealBlue text-white' label='Iniciar Sesión' />
        <LoginSignup styles=' bg-myRealBlue text-white' initialType='signup' label='Registrate Aqui' />
      </div>
    </>
  )
}
