'use client'

import { globalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'
import { Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTriangleExclamation, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const TheMsg = () => {
  const { showMsg, setShowMsg } = useContext(globalContext)

  if (showMsg.show) {
    setTimeout(() => {
      setShowMsg(prev => { return { ...prev, show: false } })
    }, 1500)
  }
  const type = showMsg.type
  let options:{color:string, icon:IconProp} = { color: 'bg-green-500', icon: faCheckCircle }

  if (type === 'fail')options = { color: 'bg-red-500', icon: faXmarkCircle }
  if (type === 'success')options = { color: 'bg-green-500', icon: faCheckCircle }
  if (type === 'alert')options = { color: 'bg-yellow-500', icon: faTriangleExclamation }

  const { color, icon } = options

  return (
    <div className='fixed right-[2rem] top-0 z-[99999999999999999999] 800px:right-[.6rem]'>
      <Transition
        show={showMsg.show}
        enter='transition-all duration-200'
        enterFrom='opacity-0 translate-y-[.5rem]'
        enterTo='opacity-1 translate-y-[1.3rem]'
        leave='transition-all duration-200'
        leaveFrom='opacity-1 translate-y-[.5rem]'
        leaveTo='opacity-0 translate-y-[1rem]'
      >
        <div className={`${color} text-[#fff] px-[1rem] 800px:font-normal 800px:px-[1rem] py-[.4rem] font-bold flex text-[1.4rem] 800px:text-[1.1rem] items-center gap-[.5rem] rounded-[.5rem]`}><FontAwesomeIcon icon={icon} />{showMsg.content}</div>
      </Transition>
    </div>
  )
}
