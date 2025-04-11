import React, { useContext } from 'react'
import Image from 'next/image'
import { globalContext } from '@/context/GlobalContext'
import cartItem from '@/interfaces/cartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

export const CartItems = () => {
  const { cart } = useContext(globalContext)

  return (
    <ul className='py-[.5rem] border-b-[1px] border-borderGrey block max-h-[30rem] overflow-y-auto'>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      {
        cart.length === 0 &&
          <span className='text-[1.1rem] block text-center py-[2rem] font-bold'>
            ¡Agrega Programas al Carrito!
          </span>
      }
    </ul>
  )
}

function CartItem (props:cartItem) {
  const { setCart } = useContext(globalContext)

  const { id, titulo, imagen, precio, isConvenio } = props

  return (
    <li className='flex items-center gap-[1rem] relative nav-bar:text-[.7rem] p-[.5rem]'>
      <Image
        src={imagen}
        width={100}
        height={67}
        alt='DG-cartImage'
        className='rounded-[.4rem]'
      />
      <section className='flex-1 flex flex-col'>
        <span className='line-clamp-3 text-ellipsis overflow-hidden font-bold '>
          {titulo}
        </span>
        <span className='capitalize font-bold '>diploma</span>
        <span className='flex items-center justify-between gap-[.1rem] flex-wrap'>
          <span className='text-[20px] text-red-500 nav-bar:text-[15px] font-bold '>
            S/{!isConvenio ? Number(precio.final).toFixed(2) : Number(precio.final_convenio).toFixed(2)}
          </span>
          <span className='line-through'>
            S/. {!isConvenio ? Number(precio.normal).toFixed(2) : Number(precio.normal_convenio).toFixed(2)}
          </span>
        </span>
      </section>
      <button
        className='absolute right-0 top-[-.5rem]'
        onClick={() =>
          setCart((prev) => {
            return prev.filter((prev) => prev.id !== id)
          })}
      >
        <FontAwesomeIcon size='xl' icon={faXmarkCircle} />
      </button>
    </li>
  )
}
