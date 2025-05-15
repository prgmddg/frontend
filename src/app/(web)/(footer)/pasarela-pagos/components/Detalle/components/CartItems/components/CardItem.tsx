import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { globalContext } from '@/context/GlobalContext'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import cartItem from '@/interfaces/cartItem'
import Image from 'next/image'

export default function CardItem (props:cartItem) {
  const { setCart } = useContext(globalContext)

  const
    {
      id,
      titulo: name,
      imagen,
      precio,
      tipo,
      isConvenio
    } = props

  function removingItem () {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='mb-[1rem] relative flex gap-[.5rem] border-b-[1px] border-gray-200 px-[.8rem] pb-[.3rem] 1000px:flex-col'>
      <button
        className='absolute right-0 top-0 flex justify-center items-center h-[fit] text-[1.4rem]'
        onClick={removingItem}
      >
        <FontAwesomeIcon icon={faXmarkCircle} />
      </button>
      <div className='w-[80.02px]'>
        <Image src={imagen} className='img-fluid w-[100%]' width={80} height={53} alt='imagen de programa' />
      </div>
      <section className='flex-[1]'>
        <p className='text-red-500 font-medium'>
          <span className='capitalize'>{tipo}</span> En Vivo
        </p>
        <span
          title={name}
          className='whitespace-nowrap overflow-hidden text-ellipsis block max-w-[239.4px] mb-[.2rem] font-bold'
        >
          {name}
        </span>
        <span>S/.{!isConvenio ? precio.final.toFixed(2) : precio.final_convenio.toFixed(2)}</span>
      </section>
    </div>
  )
}
