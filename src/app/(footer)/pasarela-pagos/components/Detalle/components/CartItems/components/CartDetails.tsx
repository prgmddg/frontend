import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import cartItem from '@/interfaces/cartItem'

export default function CartDetails ({ cartItems }:{cartItems:Array<cartItem>}) {
  const totalNormal = cartItems?.reduce((resul:number, current:cartItem) => {
    return resul + (!current.isConvenio ? current.precio.normal : current.precio.normal_convenio)
  }, 0)
  const total = cartItems?.reduce((resul:number, current:cartItem) => {
    return resul + (!current.isConvenio ? current.precio.final : current.precio.final_convenio)
  }, 0)

  const descNum = totalNormal - total
  const desc = Math.round(100 - ((total * 100) / totalNormal))

  const sesiones = cartItems?.reduce((resul:number, current:cartItem) => {
    return Number(resul) + Number(current.total_sesiones)
  }, 0)

  return (
    <div className='mt-[1rem]'>
      <span className='mb-[.3rem] block font-bold'>Incluye:</span>
      <ul className='flex flex-col gap-[.3rem] pb-[1rem] border-b-[1px] border-gray-200'>
        <li className='flex gap-[.5rem]'>
          <span className=' text-blue-500'>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Certificacion digital</span>
        </li>
        <li className='flex gap-[.5rem]'>
          <span className=' text-blue-500'>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>{sesiones} sesiones en vivo</span>
        </li>
        <li className='flex gap-[.5rem]'>
          <span className='text-blue-500'>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Acceso aula virtual por un año</span>
        </li>
      </ul>
      <ul className='mt-[1rem]'>
        <li className='flex justify-between'>
          <span>Precio Normal:</span>
          <span className='line-through'>S/.{Number(totalNormal).toFixed(2)}</span>
        </li>
        <li className='flex justify-between'>
          <span>Descuento {desc}%:</span>
          <span>-S/.{Number(descNum).toFixed(2)}</span>
        </li>
        <li className='flex justify-between items-center mt-[1rem]'>
          <span className='text-[1.2rem] font-bold'>Total a Pagar:</span>
          <span className='text-red-500 text-[1.5rem] font-bold'>S/.{Number(total).toFixed(2)}</span>
        </li>
      </ul>
    </div>
  )
}
