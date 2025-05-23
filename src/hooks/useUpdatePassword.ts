'use client'

import { updatePassword } from '@/app/_services/apiAuth'
import ToastError from '@/components/ToastError'
import ToastSuccess from '@/components/ToastSuccess'
import { saveUserSession } from '@/helpers/saveUserSession'
import { ErrorCodes } from '@/types/errors'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { useAuth } from './useAuth'

export default function useUpdatePassword () {
  const { setAuth } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const [data, setData] = useState<{
    password: string
    repeatPassword: string
  }>({
    password: '',
    repeatPassword: '',
  })

  const mutation = useMutation({
    onSuccess: (data) => {
      ToastSuccess({
        message: 'Contraseña actualizada correctamente 😀',
        isConfirmed: true,
        confirmedAction: () => {
          setAuth(data.data)
          saveUserSession(data.data)
          return router.push('/')
        }
      })
    },
    onError: (error) => {
      setError({ password: '', repeatPassword: '', general: error.message })
      ToastError({ error: error.message as ErrorCodes })
    },
    mutationFn: (data: {
      password: string
      repeatPassword: string
      token: string
    }) => updatePassword(data)
  })

  const [error, setError] = useState<{
        password: string
        repeatPassword: string
        general: string
    }>({
      password: '',
      repeatPassword: '',
      general: ''
    })

  const handleData = ({ target: { name, value, type, checked } }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.trim()
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const prevError = {
      password: '',
      repeatPassword: '',
      general: ''
    }
    setError(prevError)

    if (data.password.length < 8) {
      prevError.password = ErrorCodes.INVALID_PASSWORD
    }

    if (data.repeatPassword.length < 8) {
      prevError.repeatPassword = ErrorCodes.INVALID_PASSWORD
    }

    if (prevError.password.length > 0 || prevError.repeatPassword.length > 0 || prevError.general.length > 0) {
      setError(prevError)
      ToastError({ error: ErrorCodes.INVALID_DATA })
      return
    }

    mutation.mutate({ ...data, token: token ?? '' })
  }

  if (!token) {
    router.push('/')
  }

  return {
    data,
    isLoading: mutation.isPending,
    error,
    handleData,
    handleSubmit
  }
}