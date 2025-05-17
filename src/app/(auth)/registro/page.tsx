import Link from 'next/link'
import { Metadata } from 'next'
import FormSignUp from './_section/FormSignUp'

export const metadata: Metadata = {
  title: 'Desarrollo Global | Iniciar Sesión',
  description: 'Inicia sesión en tu cuenta de Desarrollo Global y accede a nuestros cursos y capacitaciones en gestión pública.',
  alternates: {
    canonical: 'https://desarrolloglobal.pe/iniciar-sesion'
  },
}

export default function SignUpPage () {
  return (
    <div className='grid gap-8 max-w-[800px] w-full'>
      <header className='grid gap-4'>
        <h1 className='text-2xl font-bold'>Bienvenido de Nuevo</h1>
        <p className='text-gray-600'>Regístrate y empieza con tu capacitación con nosotros</p>
      </header>
      <FormSignUp />
      <span className='text-sm font-medium'>¿Yá tienes una cuenta?, <Link href='/iniciar-sesion' className='text-sm font-bold text-blue-800 transition-all hover:underline'>Iniciar Sesión</Link></span>
    </div>
  )
}