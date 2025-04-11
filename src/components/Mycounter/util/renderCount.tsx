import React from 'react'

export default function renderCount (props:any) {
  const { days, hours, minutes, seconds } = props

  return (
    <div className='flex gap-[1rem] px-[.5rem]'>
      <div className='bg-red-500 rounded px-[1rem] font-bold'>
        <p className='m-0 text-center text-white text-[1.75rem]'>{days}</p>
        <p className='m-0 mb-1 fw-bolder text-center text-white text-[10px]'>
          Dias
        </p>
      </div>
      <div className='bg-red-500 rounded px-[1rem] font-bold'>
        <p className='m-0 text-center text-white text-[1.75rem]'>{hours}</p>
        <p className='m-0 mb-1 fw-bolder text-center text-white text-[10px]'>
          Horas
        </p>
      </div>
      <div className='bg-red-500 rounded px-[1rem] font-bold'>
        <p className='m-0 text-center text-white text-[1.75rem]'>{minutes}</p>
        <p className='m-0 mb-1 fw-bolder text-center text-white text-[10px]'>
          Minutos
        </p>
      </div>
      <div className='bg-red-500 rounded px-[1rem] font-bold'>
        <p className='m-0 text-center text-white text-[1.75rem]'>{seconds}</p>
        <p className='m-0 mb-1 fw-bolder text-center text-white text-[10px]'>
          Segundos
        </p>
      </div>
    </div>
  )
}
