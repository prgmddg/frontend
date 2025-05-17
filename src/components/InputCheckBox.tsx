import { ReactNode } from 'react'

export default function InputCheckBox({ id, label, isChecked, onChangeAction }: { id: string, label: ReactNode, isChecked?: boolean, onChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className='flex items-baseline gap-1'>
      <input type='checkbox' id={id} name={id} checked={isChecked} onChange={onChangeAction} />
      <label htmlFor={id} className='text-sm font-medium'>{label}</label>
    </div>
  )
}