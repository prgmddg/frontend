'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

export default function AuthLayout ({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
    
  useEffect(() => {
    const user = localStorage.getItem('DG-USER')
    if (user) {
      const { token } = JSON.parse(user)
      document.cookie = `token=${token};domain=.desarrolloglobal.pe`
      router.push('/')
    } else {
      setMounted(true)
    }
  }, [router])
    
  if (!mounted) {
    return (
      (
        <div className='flex items-center justify-center w-full font-semibold h-dvh'>
            ...cargando
        </div>
      )
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
        {children}
      </section>
    </main>
  )
}