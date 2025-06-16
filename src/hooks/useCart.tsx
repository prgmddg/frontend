'use client'
import { globalContext } from '@/context/GlobalContext'
import cartItem from '@/interfaces/cartItem'
import { useContext } from 'react'
import { programContext } from '@/context/ProgramContext'
import ToastSuccess from '@/components/ToastSuccess'

export default function useCart () {
  const { setCart } = useContext(globalContext)
  const context = useContext(programContext)

  if (context === undefined) return { updatingCart }

  const { isConvenio } = context.values
  function updatingCart (item:cartItem) {
    const { imagen, titulo, precio, id, tipo, total_sesiones } = item

    setCart((prev) => {
      const isIn = prev.find((item) => item.id === id)

      if (isIn) {
        if (item.isViewMessage !== undefined) {
          isIn.isConvenio = item.isConvenio
          return prev
        }

        ToastSuccess({
          position: 'top-right',
          isToast: true,
          isConfirmed: false,
          timer: 2000,
          confirmedAction: () => {},
          message: 'El producto ya se encuentra en el carrito'
        })
        return prev
      }

      if (item.isViewMessage !== undefined) {
        return prev
      }

      ToastSuccess({
        position: 'top-right',
        isToast: true,
        isConfirmed: false,
        timer: 2000,
        confirmedAction: () => {},
        message: 'Producto Agregado'
      })

      return [
        ...prev,
        {
          imagen,
          titulo,
          precio,
          id,
          tipo,
          total_sesiones,
          isConvenio
        }
      ]
    })
  }

  return {
    updatingCart
  }
}
