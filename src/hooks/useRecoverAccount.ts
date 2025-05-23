'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import ToastError from '@/components/ToastError'
import { ErrorCodes } from '@/types/errors'
import { recoverAccount } from '@/app/_services/apiAuth'
import ToastSuccess from '@/components/ToastSuccess'
import { useRouter } from 'next/navigation'

export default function useRecoverAccount () { 
  const router = useRouter() 
  const [data, setData] = useState<{ email: string }>({ email: '' })
  const [error, setError] = useState<{ email: string, general: string }>({ email: '', general: '' })

  const mutation = useMutation({
    onSuccess: () => {
      ToastSuccess({
        message: '😁 Hemos enviado un correo para recuperar tu cuenta',
        isConfirmed: true,
        confirmedAction: () => {
          setData({ email: '' })
          router.push('/iniciar-sesion')
        }
      })
    },
    onError: (error) => {
      setError({ email: '', general: error.message })
      ToastError({ error: error.message as ErrorCodes })
    },
    mutationFn: ({ email }: { email: string }) => recoverAccount({ email })
  })

  const handleData = ({ target: { name, value, type, checked } }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim()
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const prevError = { email: '', general: '' }
    
    setError(prevError)

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) === false) {
      prevError.email = ErrorCodes.INVALID_EMAIL
    }

    if (prevError.email.length > 0) {
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