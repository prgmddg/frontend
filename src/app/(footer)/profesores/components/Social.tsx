import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Social ({ label, icon }:{label:string, icon:IconProp}) {
  return (
    <li>
      <a
        href='#'
        className='flex gap-[21px] my-shadow bg-[#FBFBFB] rounded-[.5rem] px-[21px] h-[47px] items-center 1151px:px-0 1151px:w-[47px] 1151px:justify-center'
      >
        <FontAwesomeIcon size='2xl' icon={icon} />
        <span className='font-bold text-[18px] 1151px:hidden'>{label}</span>
      </a>
    </li>
  )
}
