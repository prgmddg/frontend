'use client'

import { useAuth } from './useAuth'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { saveUserSession } from '@/helpers/saveUserSession'
import ToastError from '@/components/ToastError'
import { ErrorCodes } from '@/types/errors'
import { signIn } from '@/app/_services/apiAuth'
import { useRouter } from 'next/navigation'

export default function useSignIn () {
  const route = useRouter()
  const { setAuth } = useAuth()
  
  const [data, setData] = useState<{ email: string, password: string, remember: boolean }>({ email: '', password: '', remember: false })
  const [error, setError] = useState<{ email: string, password: string, general: string }>({ email: '', password: '', general: '' })
  
  const mutation = useMutation({
    onSuccess: (data) => {
      setAuth(data)
      saveUserSession(data)
      route.push('/')
    },
    onError: (error) => {
      setError({ email: '', password: '', general: error.message })
      ToastError({ error: error.message as ErrorCodes })
    },
    mutationFn: (data: { email: string, password: string, remember: boolean }) => signIn(data)
  })

  const handleData = ({ target: { name, value, type, checked } }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim()
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const prevError = { email: '', password: '', general: '' }
    
    setError(prevError)

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) === false) {
      prevError.email = ErrorCodes.INVALID_EMAIL
    }

    if (data.password.length < 8) {
      prevError.password = ErrorCodes.INVALID_PASSWORD
    }

    if (prevError.email.length > 0 || prevError.password.length > 0) {
      setError(prevError)
      ToastError({ error: ErrorCodes.INVALID_EMAIL_OR_PASSWORD })
      return
    }

    mutation.mutate(data)
  }

  return {
    data,
    isLoading: mutation.isPending,
    error,
    handleData,
    handleSubmit
  }
}