'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import { NavbarOptionList, UserMenu, NavMobMenu } from '.'
import { options } from './helpers/options'
import Link from 'next/link'
import { DropdownButton } from '../DropdownButton/DropdownButton'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { globalContext } from '@/context/GlobalContext'
import { CartItems } from '../CartItems/CartItems'
import { NotiItems } from '../NotiItems/NotiItems'
import LoginSignup from '../LoginSignup/LoginSignup'

export const Navbar = () => {
  const { cart, user, seminarios } = useContext(globalContext)

  return (
    <nav className='justify-between px-[.8rem] flex items-center relative h-[80px] gap-4'>
      <Link href='/' className='block 800px:mr-[16px]'>
        <picture>
          <img
            className='block aspect-[801/208] h-auto w-[221px] 800px:hidden'
            src='/logoweb.webp'
            alt='logo'
            sizes='100vw'
            width='0'
            height='0'
            loading='eager'
          />
        </picture>
        <Image
          src='/img/dgMob.webp'
          width={52}
          height={52}
          className='hidden 800px:block'
          alt='logo de desarrollo global'
        />
      </Link>
      <NavbarOptionList options={options} />
      <div className='flex'>
        <div className='flex items-center gap-[10px] relative w-fit'>
          <DropdownButton
            img={{
              src: '/img/shoppingCart.webp',
              width: 23,
              height: 24,
              alt: 'icono de carrito'
            }}
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
            img={{
              src: '/img/iconoBell.webp',
              width: 22,
              height: 24,
              alt: 'icono de campana'
            }}
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
        {user && <UserMenu />}
        {!user && <LoginSignup />}
        <NavMobMenu />
      </div>
    </nav>
  )
}
