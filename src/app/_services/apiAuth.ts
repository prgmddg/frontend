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