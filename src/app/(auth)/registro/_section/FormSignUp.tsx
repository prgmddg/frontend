'use client'

import Icon from '@/components/Icon'
import InputCheckBox from '@/components/InputCheckBox'
import InputEmail from '@/components/InputEmail'
import InputText from '@/components/InputText'
import useSignUp from '@/hooks/useSignUp'
import Link from 'next/link'

export default function FormSignUp () {
  const { data, error, isLoading, handleSubmit, handleData } = useSignUp()
  
  return (
    <form className='grid gap-8' onSubmit={handleSubmit}>
      <InputText value={data.names} onChangeAction={handleData} isError={error.names.length > 0 || error.general.length > 0} label='Nombres' id='names' placeholder='Joe' />
      <InputText value={data.surnames} onChangeAction={handleData} isError={error.surnames.length > 0 || error.general.length > 0} label='Apellidos' id='surnames' placeholder='Doe' />
      <InputEmail value={data.email} onChangeAction={handleData} isError={error.email.length > 0 || error.general.length > 0} />
      <InputText value={data.document} onChangeAction={handleData} isError={error.document.length > 0 || error.general.length > 0} label='Número de Documento' id='document' placeholder='11111111' />
      <InputText value={data.phone} onChangeAction={handleData} isError={error.phone.length > 0 || error.general.length > 0} label='Teléfono' id='phone' placeholder='999999999' />

      <div className='grid gap-4'>
        <InputCheckBox label={
          <span>
            Al registrarse, crea una cuenta de Desarrollo Global y acepta nuestros <Link className='text-sm font-bold text-blue-800 transition-all hover:underline' href='/politicas-de-privacidad/terminos-de-servicio'>Términos de servicio</Link> y las <Link className='text-sm font-bold text-blue-800 transition-all hover:underline' href='/politicas-de-privacidad'>Políticas de Privacidad</Link>.
          </span>
        } isChecked={data.terms} onChangeAction={handleData} id='terms' />
        <InputCheckBox label='Envíeme un correo electrónico con actualizaciones de nuestros programas' isChecked={data.newsletter} onChangeAction={handleData} id='newsletter' />
      </div>
    
      <button type='submit' className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>{
        isLoading ? <span className='flex items-center justify-center gap-2'><Icon name='loader-circle' className='w-4 h-4 text-white animate-spin' /> Cargando...</span> : 'Registrarme'  
      }</button>
    </form>
  )
}