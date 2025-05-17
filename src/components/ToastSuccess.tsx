import Swal from 'sweetalert2'

export default function ToastSuccess ({ message, confirmedAction }: { message: string, confirmedAction: () => void }) {
  Swal.fire({
    icon: 'success',
    text: message,
    position: 'center',
    showConfirmButton: true,
    confirmButtonText: 'Aceptar',
    timer: 1200
  })
    .then(({ isConfirmed }) => {
      if (isConfirmed) confirmedAction()
    })
}