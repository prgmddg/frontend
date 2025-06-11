'use client'

import { saveUserSession } from '@/helpers/saveUserSession'
import { useAuth } from '@/hooks/useAuth'
import user from '@/interfaces/user'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

export default function VerifyTokenPage() {
  const { setAuth } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSetAuth = useCallback((user: user | null) => {
    setAuth(user)
  }, [setAuth])

  const token = searchParams.get('token')

  const { data } = useQuery({
    queryKey: ['verify'],
    enabled: !!token,
    queryFn: async (): Promise<{ status: boolean, data: user | null, action: 'UA' | 'PA' }> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/verificarcuenta?token=${token}`, {
        method: 'GET'
      })

      if (!response.ok) {
        return { status: false, data: null, action: 'UA' }
      }

      return (await response.json()) as { status: boolean, data: user | null, action: 'UA' | 'PA' }
    }
  })

  if (!token) {
    router.push('/')
  }

  useEffect(() => {
    if (data && data.status === false) {
      return router.push('/')
    }

    if (data && data.data && data.status === true && data.action === 'UA') {
      handleSetAuth(data.data)
      saveUserSession(data.data)
      return router.push('/')
    }

    if (data && data.status === true && data.action === 'PA') {
      return router.push(`/actualizar-contrasena?token=${token}`)
    }
  }, [data, router, token, handleSetAuth])

  return (
    <div>
      <h1>Verificando...</h1>
      <p>No cierre esta ventana.</p>
    </div>
  )
}
