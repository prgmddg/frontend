import { ErrorCodes } from '@/types/errors'

export const errorMessages: Record<ErrorCodes, string> = {
  [ErrorCodes.INVALID_EMAIL] : 'El correo electrónico no es válido',
  [ErrorCodes.INVALID_PASSWORD]: 'La contraseña no es válida',
  [ErrorCodes.INVALID_EMAIL_OR_PASSWORD]: 'Correo electrónico y/o contraseña inválidos',
  [ErrorCodes.INTERNAL_SERVER_ERROR]: 'Error interno, por favor intenta más tarde',
  [ErrorCodes.INVALID_DATA]: 'Datos inválidos',
  [ErrorCodes.INVALID_DOCUMENT]: 'El documento no es válido',
  [ErrorCodes.INVALID_NAMES]: 'Los nombres no son válidos',
  [ErrorCodes.INVALID_SURNAMES]: 'Los apellidos no son válidos',
  [ErrorCodes.INVALID_PHONE]: 'El teléfono no es válido',
  [ErrorCodes.INVALID_TERMS]: 'Debes aceptar los términos y condiciones',
  [ErrorCodes.INVALID_TOKEN]: 'El token no es válido',
}

export default errorMessages