import { ErrorCodes } from '@/types/errors'

export const errorMessages: Record<ErrorCodes, string> = {
  [ErrorCodes.INVALID_EMAIL] : 'El correo electrónico no es válido',
  [ErrorCodes.INVALID_PASSWORD]: 'La contraseña no es válida',
  [ErrorCodes.INVALID_EMAIL_OR_PASSWORD]: 'Correo electrónico y/o contraseña inválidos',
  [ErrorCodes.INTERNAL_SERVER_ERROR]: 'Error interno, por favor intenta más tarde',
}

export default errorMessages