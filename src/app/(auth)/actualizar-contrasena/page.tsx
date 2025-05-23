import Link from 'next/link'
import FormUpdatePassword from './_sections/FormUpdatePassword'

export default function UpdatePasswordPage () {
  return (
    <div className='grid gap-8 max-w-[800px] w-full'>
      <header className='grid gap-4'>
        <h1 className='text-2xl font-bold'>Bienvenido de Nuevo</h1>
        <p className='text-gray-600'>Actualiza tu contraseña</p>
      </header>
      <FormUpdatePassword />
      <span className='text-sm font-medium'>¿Yá tienes una cuenta?, <Link href='/iniciar-sesion' className='text-sm font-bold text-blue-800 transition-all hover:underline'>Iniciar Sesión</Link></span>
    </div>
  )
}