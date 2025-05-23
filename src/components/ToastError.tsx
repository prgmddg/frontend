import errorMessages from '@/data/errors'
import { ErrorCodes } from '@/types/errors'
import Swal from 'sweetalert2'

export default function ToastError ({ error }: { error: ErrorCodes }) {
  Swal.fire({
    toast: true,
    icon: 'error',
    text: errorMessages[error],
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })
}