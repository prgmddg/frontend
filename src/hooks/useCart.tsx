'use client'
import { globalContext } from '@/context/GlobalContext'
import cartItem from '@/interfaces/cartItem'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { programContext } from '@/context/ProgramContext'

export default function useCart () {
  const router = useRouter()
  const { setCart, setShowMsg } = useContext(globalContext)
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

        setShowMsg({ show: true, type: 'alert', content: 'Ya se encuentra agregado!' })
        return prev
      }

      if (item.isViewMessage !== undefined) {
        return prev
      }

      setShowMsg({ show: true, content: 'Producto agregado!' })
      router.push('/pasarela-pagos')

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
