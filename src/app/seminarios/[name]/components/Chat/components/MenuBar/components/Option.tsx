import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import options from '../../../interfaces/options'
import { twMerge } from 'tailwind-merge'
import { chatContenxt } from '../../../Chat'

interface props
{
    icon:IconProp
    label:options
}

export default function Option ({ label, icon }:props) {
  const { setOption, option } = useContext(chatContenxt)
  const isActive = label === option

  return (
    <button
      className={twMerge('flex flex-col bg-[#14206b] hover:bg-[#3f8dfd] text-white flex-1 items-center rounded-[.7rem_.7rem_0px_0px] py-[1rem] border-b-[6px] hover:border-white border-[#4b58a5]', `${isActive ? 'border-white bg-[#3f8dfd]' : ''}`)}
      onClick={() => setOption(label)}
    >
      <FontAwesomeIcon icon={icon} size='xl' />
      <span className='font-bold'>{label}</span>
    </button>
  )
}
