import React, { ReactNode } from 'react'
import { Transition } from '@headlessui/react'

const MyTransition = ({ children }:{children:ReactNode}) => {
  return (
    <Transition
      enter='transition-all duration-200'
      enterFrom='opacity-0 translate-y-[.5rem]'
      enterTo='opacity-1 translate-y-[1.3rem]'
      leave='transition-all duration-200'
      leaveFrom='opacity-1 translate-y-[.5rem]'
      leaveTo='opacity-0 translate-y-[1rem]'
    >
      {children}
    </Transition>
  )
}

export default MyTransition
