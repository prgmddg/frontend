import Swal from 'sweetalert2'

export default function ToastSuccess ({ message, isConfirmed = false, confirmedAction }: { message: string, isConfirmed: boolean, confirmedAction: () => void }) {
  Swal.fire({
    icon: 'success',
    text: message,
    position: 'center',
    showConfirmButton: true,
    confirmButtonText: 'Aceptar',
    timer: isConfirmed ? 0 : 12000,
  })
    .then(({ isConfirmed }) => {
      if (isConfirmed) confirmedAction()
    })
}