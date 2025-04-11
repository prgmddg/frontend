import { useEffect, useRef, useState } from 'react'

export default function useObserver (option: any) {
  const [element, setElement] = useState<any>([])
  const [entrie, setEntrie] = useState<any>([])

  const observer = useRef<IntersectionObserver>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(function (observeEntries: any) {
      setEntrie(observeEntries)
    }, option)

    const currentObserver = observer.current

    currentObserver.disconnect()

    if (element.length > 0) {
      element.forEach((element:any) => currentObserver.observe(element))
    }
    return function cleanUp () {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [element, option])
  return [observer.current, setElement, entrie]
}
