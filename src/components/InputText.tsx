import { ChangeEvent } from 'react'

export default function InputText ({
  id,
  label,
  placeholder,
  value,
  onChangeAction,
  isError
}: {
    id: string,
    label: string,
    placeholder: string,
    value: string,
    onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void,
    isError: boolean
}) {
  return (
    <div>
      <label className='text-sm font-medium' htmlFor={id}>{label}:</label>
      <input aria-invalid={isError} aria-describedby={isError? `error-${id}` : id} type='text' value={value} onChange={onChangeAction} id={id} name={id} className={`border ${isError ? 'border-red-500 focus:outline-red-500': 'focus:outline-blue-800 border-gray-300'} text-sm rounded-lg block w-full p-2.5`} placeholder={placeholder} />
    </div>
  )
}