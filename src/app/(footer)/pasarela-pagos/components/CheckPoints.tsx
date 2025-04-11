import React from 'react'

export default function CheckPoints () {
  return (
    <div className='px-[1rem] py-[.7rem] shadow-lg mb-[1rem] 1000px:hidden'>
      <div className='flex w-[1295px] mx-auto max-w-[100%] justify-between'>
        <CheckPoint num='1' label='Detalle' />
        <CheckPoint num='2' label='Completar Pago' />
        <CheckPoint num='3' label='Metodo de Pago' />
        <CheckPoint num='4' label='Pago Realizado' />
      </div>
    </div>
  )
}

interface props
{
  num:string
  label:string
}

function CheckPoint ({ num, label }:props) {
  return (
    <div className='flex gap-[.5rem] items-center'>
      <span className='border-[4px] rounded-[100%] text-myRealBlue border-myRealBlue w-[2.5rem] h-[2.5rem] flex text-[1.5rem] font-bold justify-center items-center'>
        {
          num
        }
      </span>
      <span className='font-bold'>
        {label}
      </span>
    </div>
  )
}
