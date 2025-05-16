import Link from 'next/link'
import FormSignIn from './_components/FormSignIn'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo Global | Iniciar Sesión',
  description: 'Inicia sesión en tu cuenta de Desarrollo Global y accede a nuestros cursos y capacitaciones en gestión pública.',
  alternates: {
    canonical: 'https://desarrolloglobal.pe/iniciar-sesion'
  },
}

export default function SignInPage () {
  return (
    <div className='grid gap-8 max-w-[800px] w-full'>
      <header className='grid gap-4'>
        <h1 className='text-2xl font-bold'>Bienvenido de Nuevo</h1>
        <p className='text-gray-600'>Por favor inicia sesión para continuar.</p>
      </header>
      <FormSignIn />
      <span className='text-sm font-medium'>¿Aun no tienes una cuenta?, <Link href='/registro' className='text-sm font-bold text-blue-800 transition-all hover:underline'>Regístrate</Link></span>
    </div>
  )
}