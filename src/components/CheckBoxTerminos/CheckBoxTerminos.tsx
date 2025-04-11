import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

type value=Record<any, any>

export const CheckBoxTerminos = ({ values, setValues }:{values:value, setValues:Dispatch<SetStateAction<any>>}) => {
  return (
    <div className='flex gap-[.5rem] my-[1rem] justify-center '>
      <input
        type='checkbox'
        checked={values.terminos}
        name='terminos'
        onChange={(e) =>
          setValues((prev: any) => {
            return { ...prev, terminos: e.target.checked }
          })}
      />
      <Link
        href='/politicas-de-privacidad'
        target='_blank'
        className='hover:underline hover:text-myLightBlue login:text-[.8rem]'
      >
        Acepto Términos y Condiciones y las políticas de Privacidad de Datos
      </Link>
    </div>
  )
}
