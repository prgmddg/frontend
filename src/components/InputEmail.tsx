import { ChangeEvent } from 'react'

export default function InputEmail  ({ value, onChangeAction, isError }: { value: string, onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void, isError: boolean }) {
  return (
    <div>
      <label className='text-sm font-medium' htmlFor='email'>Correo:</label>
      <input aria-invalid={isError} aria-describedby={isError? 'error-email' : 'email'} required type='email' value={value} onChange={onChangeAction} id='email' name='email' className={`border ${isError ? 'border-red-500 focus:outline-red-500': 'focus:outline-blue-800 border-gray-300'} text-sm rounded-lg block w-full p-2.5`} placeholder='example@example.com' />
    </div>
  )
}