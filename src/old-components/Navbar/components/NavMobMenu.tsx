'use client'

import React, { useEffect, useState } from 'react'
import { MobMenu } from './MobMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavMobMenu = () => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement

    if (show) {
      body.style.overflow = 'hidden'
      return
    }

    body.style.overflow = 'auto'
  }, [show])

  return (
    <>
      <button
        aria-label='Menu de opciones'
        className='ml-[1rem] block xl:hidden'
        onClick={() => setShow(true)}
      >
        <FontAwesomeIcon size='lg' icon={faBars} />
      </button>
      <MobMenu setShow={setShow} show={show} />
      <div
        className={`fixed transition-all duration-200 top-0 left-0 w-[100%] h-[100vh] bg-black ${
          show
            ? 'opacity-[.8] pointer-events-auto'
            : 'opacity-[0] pointer-events-none'
        }`}
        onClick={() => setShow(false)}
      />
    </>
  )
}
