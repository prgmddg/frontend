'use client'

import { useEffect, useRef, useState } from 'react'

export default function useAccordion () {
  const [open, setOpen] = useState<boolean>(false)
  const [maxHeight, setMaxHeight] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) { setMaxHeight(ref.current.scrollHeight) }
  }, [])

  const handleOpen = () => setOpen(!open)

  return {open, maxHeight, ref, handleOpen}
}