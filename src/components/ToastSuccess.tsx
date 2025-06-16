import Swal, { SweetAlertPosition } from 'sweetalert2'

export default function ToastSuccess ({ message, isConfirmed = false, confirmedAction, isToast = false, position = 'center', timer = 0 }: { message: string, isConfirmed: boolean, confirmedAction: () => void, isToast?: boolean, position?: SweetAlertPosition, timer?: number }) {
  Swal.fire({
    toast: isToast,
    icon: 'success',
    text: message,
    position,
    showConfirmButton: isConfirmed,
    confirmButtonText: isConfirmed ? 'Aceptar' : undefined,
    timer,
  })
    .then(({ isConfirmed }) => {
      if (isConfirmed) confirmedAction()
    })
}