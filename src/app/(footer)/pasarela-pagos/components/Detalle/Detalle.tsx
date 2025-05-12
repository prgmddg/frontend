'use client'
import { globalContext } from '@/context/GlobalContext'
import React, { useState, useContext } from 'react'
import CartItems from './components/CartItems/CartItems'
import LoginForm from './components/LoginForm'
import IziForm from './components/IziForm'
import Success from './components/Success'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function Detalle () {
  const [showSuccess, setShowSuccess] = useState(false)
  const { auth } = useAuth()
  const { cart } = useContext(globalContext)

  const isCart = cart ? cart.length > 0 : false

  return (
    <div className='px-[1rem]'>
      <h1 className='font-bold text-[1.5rem] mx-auto w-[1166px] max-w-[100%] block mb-[2rem]'>Detalle</h1>
      <div className='flex text-[#000] 1000px:flex-col-reverse shadow-lg mx-auto w-[1166px] max-w-[100%] mb-[5rem] rounded-[.5rem]'>
        {isCart && (
          <section className='flex-1 py-[2rem] px-[1.5rem] flex flex-col justify-between'>
            <h1 className='font-bold text-[1.2rem] text-blue-500 mb-[1.5rem]'>
              Resumen de compra:
            </h1>
            <CartItems />
          </section>
        )}
        <section className='flex-[2.5] bg-[#fff] px-[4rem] py-[3rem] 1000px:px-[1.5rem] 1000px:py-[2rem] relative'>
          {isCart
            ? (
              <>
                {!showSuccess && (
                  <>
                    {!auth && <LoginForm />}
                    {auth && <IziForm setShowSuccess={setShowSuccess} />}
                  </>
                )}
              </>
            )
            : (
              <section>
                <article className='grid grid-cols-1 lg:grid-cols-2 items-center '>
                  <div className='space-y-5'>
                    <div className='bg-yellow-400 inline-block rounded-md font-bold text-white p-2'>
                      <p>Pasarela</p>
                    </div>
                    <h1 className='font-bold text-[#12168a] text-4xl'>Tu carrito de compras</h1>
                    <div className='flex items-center gap-3 font-bold'>
                      <div className='border-2 border-black p-2 rounded-full inline-block'>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </div>
                      <p className='text-xl'>Tu carrito esta vacío</p>
                    </div>
                    <div>
                      <p>Puedes elegir de nuestro catalogo de programas en Gestión</p>
                      <p>Publica y mejorar tus oportunidades laborales</p>
                    </div>
                  </div>
                  <div className='flex justify-center flex-col items-center mt-5 lg:mt-0 lg:items-end gap-5  '>
                    <Link href='/cursos' className='border-2 block border-[#12168a] hover:text-white hover:bg-[#12168a] text-[#12168a] w-1/2 rounded-md font-bold p-2'>Ver Cursos</Link>
                    <Link href='/diplomas' className='border-2 block border-[#12168a] hover:text-white hover:bg-[#12168a] text-[#12168a] w-1/2 rounded-md font-bold p-2'>Ver Diplomas</Link>
                    <a href='https://grabados.desarrolloglobal.pe' target='_blank' className='border-2 block border-[#12168a] hover:text-white hover:bg-[#12168a] text-[#12168a] w-1/2 rounded-md font-bold p-2' rel='noreferrer'>Cursos Grabados</a>
                  </div>
                </article>
              </section>
            )}
          {showSuccess && !isCart && <Success />}
        </section>
      </div>
    </div>
  )
}
