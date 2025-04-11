import { useCallback, useEffect, useRef, useState } from 'react'

export default function useAcordeon () {
  const [abrirSub, setAbrirSub] = useState<boolean>(true)
  const [alturaMaxima, setAlturaMaxima] = useState<any>(0)
  const contenidoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (contenidoRef.current) {
      setAlturaMaxima(contenidoRef.current.scrollHeight)
    }
  }, [])

  const handleAbrirSub = useCallback(() => {
    setAbrirSub((prev) => !prev)
  }, [])

  return [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub]
}
