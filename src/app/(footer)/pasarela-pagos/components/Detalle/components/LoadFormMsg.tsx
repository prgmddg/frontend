import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function LoadFormMsg () {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3700)
  }, [])

  return (
    <>
      {show && (
        <p className='flex justify-between items-center gap-[.3rem] mt-[1rem] text-[13px] bg-yellow-500 px-[.5rem] py-[.2rem] rounded-[.3rem]'>
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span className='text-[#fff]'>
            Por favor espere a que cargue el formulario
          </span>
        </p>
      )}
    </>
  )
}
