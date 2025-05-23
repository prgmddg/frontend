'use client'

import { useState } from 'react'

export default function InputPassword ({ id, label, value, onChangeAction, isError }: {id: string, label: string, value: string, onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void, isError: boolean }) {
  const [visible, setVisible] = useState(false)

  const handleVisibility = () => setVisible(!visible)
    
  return (
    <div>
      <label className='text-sm font-medium' htmlFor={id}>{label}:</label>
      <div className='relative'>
        <input aria-invalid={isError} aria-describedby={isError ? 'password-error' : 'password'} required type={visible ? 'text' : 'password'} id={id} name={id} value={value} onChange={onChangeAction} className={`border pe-20 text-sm rounded-lg block w-full p-2.5 ${isError ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-800 border-gray-300' }`} placeholder='*********' />
        <button className='absolute top-0 bottom-0 right-0 text-sm font-medium p-2.5' type='button' onClick={handleVisibility}>{visible ? 'Ocultar' : 'Mostrar'}</button>
      </div>
    </div>
  )
}