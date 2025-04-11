import React from 'react'
import Image from 'next/image'
import Mytype from '../../Navbar/types/MyType'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'

export const NavbarForm = ({ type }:{type:Mytype}) => {
  return (
    <div className='flex overflow-hidden rounded-[.5rem] bg-[#fff]'>
      <section className='p-[48px] rounded-[.5rem] bg-myLightBlue flex-1 login:hidden'>
        <Image
          src='/img/nuevo_logo_blanco.webp'
          width={180}
          height={50}
          alt='desarrollo global logo'
          className='mb-[48px]'
        />
        <Image
          src='/img/LoginRegistro.webp'
          width={485}
          height={238}
          alt='ejecutiva escribiendo en pizarra'
          className='mb-[1.5rem]'
        />
        <p className='text-[24px] text-[#fff]'>
          Plataforma de
          <br />
          Aprendizaje
        </p>
      </section>
      <section className='p-[48px] rounded-[.5rem] flex flex-col flex-1'>
        {
          type === 'login' && <LoginForm />
        }
        {
          type === 'signup' && <SignupForm />
        }
      </section>
    </div>
  )
}
