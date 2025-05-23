'use client'

import Icon from '@/components/Icon'
import InputEmail from '@/components/InputEmail'
import useRecoverAccount from '@/hooks/useRecoverAccount'

export default function FormRecoverAccount () {
  const { data, isLoading, error, handleData, handleSubmit } = useRecoverAccount()
  return (
    <form className='grid gap-8' onSubmit={handleSubmit}>
      <InputEmail  value={data.email} isError={error.email.length > 0 || error.general.length > 0} onChangeAction={handleData} />
      <button type='submit' className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>{
        isLoading ? <span className='flex items-center justify-center gap-2'><Icon name='loader-circle' className='w-4 h-4 text-white animate-spin' /> Cargando...</span> : 'Enviar Correo de Recuperación'  
      }</button>
    </form>
  )
}