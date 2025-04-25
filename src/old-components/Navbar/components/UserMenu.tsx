'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuOption from '../interfaces/menuOption'
import menuOptions from '../helpers/menuOptions'
import { faChevronDown, faCubes, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '@headlessui/react'
import MyTransition from '@/old-components/MyTransition/MyTransition'
import { globalContext } from '@/context/GlobalContext'
import postRequest from '@/helpers/postRequest'
import user from '@/interfaces/user'
import { twMerge } from 'tailwind-merge'

export const UserMenu = () => {
  const { user } = useContext(globalContext)
  const { avatar, nombre, correo, tipo } = user as user

  return (
    <div className='flex relative mx-[.5rem]'>
      <Menu>
        <Pfp avatar={avatar} className='mr-[1rem] nav-bar:hidden' />
        <Menu.Button className='flex gap-[.5rem] items-center'>
          <Pfp avatar={avatar} h={45} w={45} className='hidden nav-bar:block' />
          <FontAwesomeIcon icon={faChevronDown} />
        </Menu.Button>
        <MyTransition>
          <Menu.Items>
            <ul className='absolute bottom-0 translate-y-[100%] bg-[#fff] right-0 overflow-hidden rounded-[1rem] pb-[.7rem] border-[1px] border-borderGrey1'>
              <li className='flex p-[.8rem] justify-between'>
                <Pfp avatar={avatar} />
                <div className='flex-1 pl-[.5rem]'>
                  <span className='block whitespace-nowrap text-ellipsis overflow-hidden max-w-[7.3rem] font-bold'>
                    {nombre}
                  </span>
                  <p
                    title='prgmddg1@gmail.com'
                    className='max-w-[7.3rem] block whitespace-nowrap overflow-hidden text-ellipsis'
                  >
                    {
                      correo
                    }
                  </p>
                </div>
              </li>
              {menuOptions.map((opt, pos) => (
                <Item {...opt} key={pos} />
              ))}
              {
                (tipo !== 'ALUM') && <Item label='Administrador' icon={faCubes} href='https://aula.desarrolloglobal.pe/admin/' />
              }
              <Item label='Cerrar Sesión' icon={faRightFromBracket} />
            </ul>
          </Menu.Items>
        </MyTransition>
      </Menu>
    </div>
  )
}

function Item ({ icon, label, href }:menuOption) {
  const { user, setUser, setShowMsg } = useContext(globalContext)

  function Content () {
    return (
      <>
        <span className='w-[1.5rem] flex justify-start'>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className='flex-1 text-left whitespace-nowrap'>{label}</span>
      </>
    )
  }

  const styles = 'flex w-[100%] capitalize items-center px-[.8rem] py-[.1rem] hover:bg-[#e9ecef]'

  return (
    <li>
      {href && (
        <a
          href={href}
          className={styles}
        >
          <Content />
        </a>
      )}
      {
        !href && user &&
          <button
            className={styles}
            onClick={async () => {
              const form = new FormData()
              form.append('token', user.token)

              if (await postRequest('logout', form)) {
                localStorage.removeItem('DG-USER')
                setUser(undefined)
                setShowMsg({ content: 'Se a Cerrado su Sesion', show: true })
              }
            }}
          >
            <Content />
          </button>
      }
    </li>
  )
}

function Pfp ({ avatar, className, h = 50, w = 50 }:{avatar:string, className?:string, h?:number, w?:number}) {
  return (
    <div className={twMerge(`w-[${w}px] h-[${h}px] rounded-[100%] nav-bar:h-[45px] nav-bar:w-[45px] overflow-hidden`, className)}>
      <Image
        src={avatar}
        alt='avatar de usuario'
        height={h}
        width={w}
      />
    </div>
  )
}
