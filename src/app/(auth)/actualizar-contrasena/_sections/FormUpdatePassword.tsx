'use client'

import Icon from '@/components/Icon'
import InputPassword from '@/components/InputPassword'
import useUpdatePassword from '@/hooks/useUpdatePassword'

export default function FormUpdatePassword () {
  const { data, isLoading, error, handleData, handleSubmit } = useUpdatePassword()
  return (
    <form className='grid gap-8' onSubmit={handleSubmit}>
      <InputPassword label='Nueva Contraseña' id='password' value={data.password} onChangeAction={handleData} isError={error.password.length > 0 || error.general.length > 0} />
      <InputPassword label='Repetir Contraseña' id='repeatPassword' value={data.repeatPassword} onChangeAction={handleData} isError={error.repeatPassword.length > 0 || error.general.length > 0} />
      <button type='submit' className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>{
        isLoading ? <span className='flex items-center justify-center gap-2'><Icon name='loader-circle' className='w-4 h-4 text-white animate-spin' /> Cargando...</span> : 'Actualizar Contraseña'  
      }</button>
    </form>
  )
}