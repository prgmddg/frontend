export default function InputCheckBox({ label, isChecked, onChangeAction }: { label: string, isChecked?: boolean, onChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className='flex items-center gap-1'>
      <input type='checkbox' id='remember' name='remember' checked={isChecked} onChange={onChangeAction} />
      <label htmlFor='remember' className='text-sm font-medium'>{label}</label>
    </div>
  )
}