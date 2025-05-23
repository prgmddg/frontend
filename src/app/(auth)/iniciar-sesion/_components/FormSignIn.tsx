'use client'

import Icon from '@/components/Icon'
import InputCheckBox from '@/components/InputCheckBox'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import useSignIn from '@/hooks/useSignIn'
import Link from 'next/link'

export default function FormSignIn () {
  const { data, error, isLoading, handleSubmit, handleData } = useSignIn()

  return (
    <form className='grid gap-8' onSubmit={handleSubmit}>
      <InputEmail value={data.email} onChangeAction={handleData} isError={error.email.length > 0 || error.general.length > 0} />
      <InputPassword id='password' label='Contraseña' value={data.password} onChangeAction={handleData} isError={error.password.length > 0 || error.general.length > 0} />
      
      <div className='flex items-center justify-between'>
        <InputCheckBox label='Recordar Sesión' isChecked={data.remember} onChangeAction={handleData} id='remember' />
        <Link href='/recuperar-cuenta' className='text-sm font-bold text-right text-blue-800 transition-all hover:underline'>¿Has Olvidado tu Contraseña?</Link>
      </div>
      
      <button type='submit' className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>{
        isLoading ? <span className='flex items-center justify-center gap-2'><Icon name='loader-circle' className='w-4 h-4 text-white animate-spin' /> Cargando...</span> : 'Iniciar Sesión'  
      }</button>
    </form>
  )
}