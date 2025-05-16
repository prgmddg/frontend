'use client'

import Icon from '@/components/Icon'
import listErrors from '@/data/errors'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function SignInPage () {
  const route = useRouter()
  const { setAuth } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState<{ email: string, password: string, remember: boolean }>({ email: '', password: '', remember: false })
  const [error, setError] = useState<{ email: string, password: string, general: string }>({ email: '', password: '', general: '' })
  const [viewPassword, setViewPassword] = useState(false)
  
  const mutation = useMutation({
    onSettled: (data) => {
      setAuth(data)
      
      localStorage.setItem('DG-USER', JSON.stringify(data))
      document.cookie = `token=${data.token};domain=.desarrolloglobal.pe`
      
      route.push('/')
    },
    onError: (error) => {
      setError({ email: '', password: '', general: error.message })
      Swal.fire({
        toast: true,
        icon: 'error',
        text: listErrors[error.message],
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200
      })
    },
    mutationFn: async (data: { email: string, password: string, remember: boolean }) => {
      const formData = new FormData()

      formData.append('correo', data.email)
      formData.append('clave', data.password)
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/login`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('INTERNAL_SERVER_ERROR')
      }

      const result = await response.json()

      if (result === false) {
        throw new Error('INVALID_EMAIL_OR_PASSWORD')
      }

      return result
    }
  })

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim()
    }))
  }

  const handleViewPassword = () => setViewPassword(!viewPassword)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const prevError = { email: '', password: '', general: '' }
    
    setError(prevError)

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) === false) {
      prevError.email = 'INVALID_EMAIL'
    }

    if (data.password.length < 8) {
      prevError.password = 'INVALID_PASSWORD'
    }
    
    if (prevError.email.length > 0 || prevError.password.length > 0) {
      setError(prevError)
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Correo y/o contraseña inválidos',
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200
      })
      return
    }

    mutation.mutate(data)
  }

  useEffect(() => {
    const user = localStorage.getItem('DG-USER')
    if (user) {
      const { token } = JSON.parse(user)
      document.cookie = `token=${token};domain=.desarrolloglobal.pe`
      route.push('/')
    } else {
      setMounted(true)
    }
  }, [route])

  if (!mounted) {
    return (
      <div className='flex items-center justify-center w-full font-semibold h-dvh'>
        ...cargando
      </div>
    )
  }

  return (
    <main className='grid w-full h-screen grid-cols-1 lg:grid-cols-2'>
      <section className='relative flex items-center justify-center order-2 p-8 bg-blue-900 lg:order-1'>
        <div className='max-w-[750px] w-full grid gap-8'>
          <picture>
            <img src='/img/logo-nav-bar.webp' alt='Logo Desarrollo Global' className='w-full max-w-[250px] aspect-auto' width={0} height={0} />
          </picture>
          <h2 className='text-3xl text-white lg:text-5xl text-balance'>Formación especializada en gestión pública</h2>
          <p className='text-gray-300'>
            Miles de profesionales y entidades públicas confían en Desarrollo Global para fortalecer sus competencias en sistemas como SIAF, SIGA, SEACE y más.
          </p>
          <p className='text-sm text-gray-300'><span className='text-2xl'>🎓</span> | Más de <span className='font-semibold text-white'>50 000</span> egresados respaldan nuestra experiencia.</p>
        </div>
      </section>
      <section className='flex items-center justify-center order-1 p-8 lg:order-2'>
        <div className='grid gap-8 max-w-[800px] w-full'>
          <header className='grid gap-4'>
            <h1 className='text-2xl font-bold'>Bienvenido de Nuevo</h1>
            <p className='text-gray-600'>Por favor inicia sesión para continuar.</p>
          </header>
          <form className='grid gap-8' onSubmit={handleSubmit}>
            <div>
              <label className='text-sm font-medium' htmlFor='email'>Correo:</label>
              <input required type='email' value={data.email} onChange={handleData} id='email' name='email' className={`border ${error.email.length > 0 || error.general.length > 0 ? 'border-red-500 focus:outline-red-500': 'focus:outline-blue-800 border-gray-300'} text-sm rounded-lg block w-full p-2.5`} placeholder='example@example.com' />
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='password'>Contraseña:</label>
              <div className='relative'>
                <input required type={viewPassword ? 'text' : 'password'} id='password' name='password' value={data.password} onChange={handleData} className={`border pe-20 text-sm rounded-lg block w-full p-2.5 ${ error.password.length > 0 || error.general.length > 0 ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-800 border-gray-300' }`} placeholder='*********' />
                <button className='absolute top-0 bottom-0 right-0 text-sm font-medium p-2.5' type='button' onClick={handleViewPassword}>{viewPassword ? 'Ocultar' : 'Mostrar'}</button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <input type='checkbox' id='remember' name='remember' checked={data.remember} onChange={handleData} />
                <label htmlFor='remember' className='text-sm font-medium'>Recordar Sesión</label>
              </div>
              <Link href='/recuperar-cuenta' className='text-sm font-medium text-blue-800 transition-all hover:underline'>¿Has Olvidado tu Contraseña?</Link>
            </div>
            <button type='submit' className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>{
              mutation.isPending ? <span className='flex items-center justify-center gap-2'><Icon name='loader-circle' className='w-4 h-4 text-white animate-spin' /> Cargando...</span> : 'Iniciar Sesión'  
            }</button>
          </form>
          <span className='text-sm font-medium'>¿Aun no tienes una cuenta?, <Link href='/registro' className='text-sm font-medium text-blue-800 transition-all hover:underline'>Regístrate</Link></span>
        </div>
      </section>
    </main>
  )
}