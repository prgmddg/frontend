import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Header () {
  return (
    <div className='bg-myRealBlue px-[1rem] 1000px:hidden'>
      <div className='flex text-white w-[1295px] mx-auto max-w-[100%] justify-between items-center py-[1rem]'>
        <Image src='/img/DesarrolloGlobalInfo.webp' width={250} height={89} alt='logo de desarrollo global' />
        <div className='flex gap-[1.5rem]'>
          <FontAwesomeIcon size='xl' icon={faLock} />
          <span className='font-bold'>
            Pago Seguro
          </span>
        </div>
      </div>
    </div>
  )
}
