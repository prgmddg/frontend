'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { NotiItems } from '@/old-components/NotiItems/NotiItems'
import { DropdownMenu } from '@/old-components/DropdownMenu/DropdownMenu'

const noti =
[

]

export const MobNoti = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div
      className={`fixed right-[1rem] top-[9.8rem] z-[9999] hidden ${
        noti.length > 0 ? 'nav-bar:block' : ''
      }`}
    >
      <button
        onClick={() => setShow((prev) => !prev)}
        className='h-[2.5rem] flex justify-center items-center w-[2.5rem] bg-primary text-[#fff] rounded-[100%] shadow-2xl'
      >
        <FontAwesomeIcon size='sm' icon={faBell} />
        <span className='absolute w-[1.3rem] h-[1.3rem] text-[.9rem] bg-red-500 text-[#fff] rounded-[100%] top-[-.5rem] right-[-.5rem]'>
          {noti.length}
        </span>
      </button>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={
          <DropdownMenu
            arr={[]}
            type='noti'
            title='Carrito'
            subtitle='programa'
            mob
            setShow={setShow}
          >
            <NotiItems />
          </DropdownMenu>
        }
      />
    </div>
  )
}
