'use client'

import { signUp } from '@/app/_services/apiAuth'
import ToastError from '@/components/ToastError'
import ToastSuccess from '@/components/ToastSuccess'
import { ErrorCodes } from '@/types/errors'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function useSignUp () {
  const router = useRouter()

  const [data, setData] = useState<{
    email: string
    document: string
    names: string
    surnames: string
    phone: string
    terms: boolean
    newsletter: boolean
  }>({
    email: '',
    document: '',
    names: '',
    surnames: '',
    phone: '',
    terms: false,
    newsletter: false
  })

  const mutation = useMutation({
    onSuccess: () => {
      ToastSuccess({
        message: '😁 Registro exitoso, hemos enviado un correo para verificar tu cuenta',
        confirmedAction: () => router.push('/iniciar-sesion')
      })
    },
    onError: (error) => {
      setError({ email: '', document: '', names: '', surnames: '', phone: '', terms: '', general: error.message })
      ToastError({ error: error.message as ErrorCodes })
    },
    mutationFn: (data: {
      email: string
      document: string
      names: string
      surnames: string
      phone: string
      terms: boolean
    }) => signUp(data)
  })

  const [error, setError] = useState<{
        email: string
        names: string
        surnames: string
        document: string
        phone: string
        terms: string
        general: string
    }>({
      email: '',
      document: '',
      names: '',
      surnames: '',
      phone: '',
      terms: '',
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
      email: '',
      document: '',
      names: '',
      surnames: '',
      phone: '',
      terms: '',
      general: ''
    }
    setError(prevError)

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) === false) {
      prevError.email = ErrorCodes.INVALID_EMAIL
    }

    if (data.document.length < 8) {
      prevError.document = ErrorCodes.INVALID_DOCUMENT
    }

    if (data.names.length < 3) {
      prevError.names = ErrorCodes.INVALID_NAMES
    }

    if (data.surnames.length < 3) {
      prevError.surnames = ErrorCodes.INVALID_SURNAMES
    }

    if (!/^[9][0-9]{8}$/.test(data.phone)) {
      prevError.phone = ErrorCodes.INVALID_PHONE
    }

    if (!data.terms) {
      prevError.terms = ErrorCodes.INVALID_TERMS
    }

    if (prevError.email.length > 0 || prevError.document.length > 0 || prevError.names.length > 0 || prevError.surnames.length > 0 || prevError.phone.length > 0 || prevError.terms.length > 0) {
      setError(prevError)
      ToastError({ error: ErrorCodes.INVALID_DATA })
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