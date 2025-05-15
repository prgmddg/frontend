import React, { InputHTMLAttributes, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  icon:IconProp
  placeholder:string,
  isOnlyNum?:boolean,
  isOnlyText?:boolean,
}

export default function MyInput (props:props) {
  const [focus, setFocus] = useState(false)

  const
    {
      icon,
      placeholder = '',
      onChange = () => null,
      isOnlyNum = false,
      isOnlyText = false,
      type = 'text',
      ...myProps
    } = props

  let keyPressFunc:any = () => null

  if (isOnlyNum)keyPressFunc = onlyNumFunc
  if (isOnlyText)keyPressFunc = onlyTextFunc

  return (
    <div className={`flex gap-[.8rem] px-[2rem] py-[.6rem] mob2:px-[1rem] border-[1px] border-[transparent] items-center shadow-[0_.3rem_.5rem_.1rem_#cfd1cf] rounded-[.5rem] relative ${focus ? '!border-blue-500' : ''}`}>
      <FontAwesomeIcon className='text-[#a4a4a4]' icon={icon} />
      <input
        {...myProps}
        placeholder={placeholder}
        className='placeholder:text-[#a4a4a4] outline-none flex-1 !min-w-[0rem]'
        type={type}
        onKeyPress={keyPressFunc || (() => null)}
        onChange={onChange}
        size={1}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

function onlyNumFunc (e:any) {
  if (e.code.length === 7 || e.code.includes('Digit')) return
  e.preventDefault()
}

function onlyTextFunc (e:any) {
  if (e.code.includes('Key')) return
  e.preventDefault()
}
