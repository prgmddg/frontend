import React, { useContext } from 'react'

import CardItem from './components/CardItem'
import CartDetails from './components/CartDetails'
import { globalContext } from '@/context/GlobalContext'

export default function CartItems () {
  const { cart } = useContext(globalContext)

  return (
    <>
      <div className='max-h-[25rem] overflow-y-auto mob2:p-[0]'>
        {cart?.map((item, pos) => {
          return <CardItem key={pos} {...item} />
        })}
      </div>
      <CartDetails cartItems={cart} />
    </>
  )
}
