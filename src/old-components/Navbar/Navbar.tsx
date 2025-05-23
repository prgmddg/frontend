'use client'

import React, { useContext } from 'react'
import { NavbarOptionList, UserMenu, NavMobMenu } from '.'
import { options } from './helpers/options'
import Link from 'next/link'
import { DropdownButton } from '../DropdownButton/DropdownButton'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { globalContext } from '@/context/GlobalContext'
import { CartItems } from '../CartItems/CartItems'
import { NotiItems } from '../NotiItems/NotiItems'
import { useAuth } from '@/hooks/useAuth'

export const Navbar = () => {
  const { cart, seminarios } = useContext(globalContext)
  const { auth } = useAuth()

  return (
    <nav className='justify-between px-[.8rem] flex items-center relative h-[80px] gap-4'>
      <Link href='/' className='block 800px:mr-[16px]'>
        <picture>
          <source media='(max-width: 768px)' srcSet='/web/logo-mobile.webp' />
          <img src='/web/logo.webp' className='w-full max-w-[45px] md:max-w-[200px] mx-auto h-auto' alt='Logo Desarrollo Global' width={0} height={0} loading='eager'/>
        </picture>
      </Link>
      <NavbarOptionList options={options} />
      <div className='flex'>
        <div className='flex items-center gap-[10px] relative w-fit'>
          <DropdownButton
            icon='shopping-cart'
            arr={cart}
            desktop={
              <DropdownMenu
                arr={cart}
                type='cart'
                title='Carrito'
                subtitle='programa'
              >
                <CartItems />
              </DropdownMenu>
            }
            mobile={
              <DropdownMenu
                arr={cart}
                type='cart'
                title='Carrito'
                subtitle='programa'
                mob
              >
                <CartItems />
              </DropdownMenu>
            }
          />
          <DropdownButton
            icon='bell'
            arr={seminarios}
            desktop={
              <DropdownMenu
                styles={{
                  container: 'right-[-5rem] translate-x-[0] left-[initial]'
                }}
                arr={seminarios}
                type='noti'
                title='Seminarios en Vivo'
                subtitle='seminario'
              >
                <NotiItems />
              </DropdownMenu>
            }
            mobile={
              <DropdownMenu
                styles={{
                  container: 'right-[-5rem] translate-x-[0] left-[initial]'
                }}
                arr={seminarios}
                type='noti'
                title='Seminarios en Vivo'
                subtitle='seminario'
                mob
              >
                <NotiItems />
              </DropdownMenu>
            }
          />
        </div>
        {auth && <UserMenu />}
        {!auth && (
          <Link href='/iniciar-sesion' className='font-bold text-white py-2.5 px-5 text-center rounded-lg bg-[#2A50E8] ml-[10px]'>Aula Virtual</Link>
        )}
        <NavMobMenu />
      </div>
    </nav>
  )
}
