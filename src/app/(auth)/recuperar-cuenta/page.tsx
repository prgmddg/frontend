import { Metadata } from 'next'
import FormRecoverAccount from './_section/FormRecoverAccount'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Desarrollo Global | Recuperar Cuenta',
  description: 'Recupera el acceso a tu cuenta de Desarrollo Global.',
  alternates: {
    canonical: 'https://desarrolloglobal.pe/recuperar-cuenta'
  },
}

export default function RecoverAccountPage () {
  return (
    <div className='grid gap-8 max-w-[800px] w-full'>
      <header className='grid gap-4'>
        <h1 className='text-2xl font-bold'>Bienvenido de Nuevo</h1>
        <p className='text-gray-600'>Recupera el acceso a tu cuenta de Desarrollo Global.</p>
      </header>
      <FormRecoverAccount />
      <span className='text-sm font-medium'>¿Yá tienes una cuenta?, <Link href='/iniciar-sesion' className='text-sm font-bold text-blue-800 transition-all hover:underline'>Iniciar Sesión</Link></span>
    </div>
  )
}