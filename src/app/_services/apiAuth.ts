import user from '@/interfaces/user'
import { ErrorCodes } from '@/types/errors'

export async function signIn ({ email, password }: { email: string, password: string, remember: boolean }) {
  const formData = new FormData()
    
  formData.append('correo', email)
  formData.append('clave', password)
          
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/login`, {
    method: 'POST',
    body: formData
  })
    
  if (!response.ok) {
    throw new Error(ErrorCodes.INTERNAL_SERVER_ERROR)
  }
    
  const result = (await response.json()) as user | boolean
    
  if (typeof result === 'boolean') {
    throw new Error(ErrorCodes.INVALID_EMAIL_OR_PASSWORD)
  }
    
  return result
}

export async function signUp ({
  email,
  names,
  surnames,
  document,
  phone,
}: { 
  email: string
  names: string
  surnames: string
  document: string
  phone: string
  terms: boolean
}) {
  const formData = new FormData()
    
  formData.append('correo', email)
  formData.append('clave', document)
  formData.append('dni', document)
  formData.append('nombres', names)
  formData.append('apellidos', surnames)
  formData.append('celular', phone)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/registrar`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(ErrorCodes.INTERNAL_SERVER_ERROR)
  }
    
  const result = (await response.json()) as boolean | string
    
  if (typeof result === 'string') {
    throw new Error(ErrorCodes.INVALID_DATA)
  }

  if (result === false) {
    throw new Error(ErrorCodes.INTERNAL_SERVER_ERROR)
  }

  return result
}

export async function recoverAccount ({ email }: { email: string }) {
  const formData = new FormData()
    
  formData.append('correo', email)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/recuperar`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(ErrorCodes.INVALID_DATA)
  }

  const result = (await response.json()) as { status: boolean }

  if (result.status === false) {
    throw new Error(ErrorCodes.INVALID_DATA)
  }

  return result
}

export async function updatePassword ({ password, repeatPassword, token }: { password: string, repeatPassword: string, token: string }) {
  const formData = new FormData()
    
  formData.append('clave', password)
  formData.append('repetir_clave', repeatPassword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sesiones/actualizar?token=${token}`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error(ErrorCodes.INVALID_DATA)
  }

  const result = (await response.json()) as { status: boolean, data: user }

  if (result.status === false) {
    throw new Error(ErrorCodes.INVALID_DATA)
  }

  return result
}
