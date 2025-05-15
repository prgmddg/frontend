import { faBookOpen, faComment, faGift } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Option from './components/Option'

export default function MenuBar () {
  return (
    <div className='flex w-[100%] gap-[.2rem]'>
      <Option label='Chat en Vivo' icon={faComment} />
      <Option label='Detalles' icon={faBookOpen} />
      <Option label='Promocion' icon={faGift} />
    </div>
  )
}
