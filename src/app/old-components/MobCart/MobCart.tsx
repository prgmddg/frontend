'use client'

import { CartItems } from '@/old-components/CartItems/CartItems'
import { DropdownMenu } from '@/old-components/DropdownMenu/DropdownMenu'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { globalContext } from '@/context/GlobalContext'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'

export const MobCart = () => {
  const [show, setShow] = useState<boolean>(false)
  const { cart } = useContext(globalContext)

  return (
    <div
      className={`fixed right-[1rem] top-[5.8rem] z-[9999] hidden ${
        cart.length > 0 ? 'nav-bar:block' : ''
      }`}
    >
      <button
        onClick={() => setShow((prev) => !prev)}
        className='h-[3rem] flex justify-center items-center w-[3rem] bg-primary text-[#fff] rounded-[100%] shadow-2xl'
      >
        <FontAwesomeIcon size='lg' icon={faShoppingCart} />
        <span className='absolute w-[1.5rem] h-[1.5rem] bg-red-500 text-[#fff] rounded-[100%] top-[-.5rem] right-[-.5rem]'>
          {cart.length}
        </span>
      </button>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={
          <DropdownMenu
            arr={cart}
            type='cart'
            title='Carrito'
            subtitle='programa'
            mob
            setShow={setShow}
          >
            <CartItems />
          </DropdownMenu>
        }
      />
    </div>
  )
}
