import Link from 'next/link'
import React from 'react'

export default function CheckPoliticas ({ onChange, checked }:{onChange:(e:any)=>void, checked:boolean}) {
  return (
    <div className='flex items-center gap-3 mb-[1rem]'>
      <input checked={checked} type='checkbox' onChange={onChange} className='rounded-full' required />
      <Link
        href='/politicas-de-privacidad'
        target='_blank'
        className='text-sm hover:underline hover:text-myLightBlue'
      >
        Acepto Términos y Condiciones y las políticas de Privacidad de Datos
      </Link>
    </div>
  )
}
