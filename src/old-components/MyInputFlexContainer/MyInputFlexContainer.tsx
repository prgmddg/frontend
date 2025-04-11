import React, { ReactNode } from 'react'

const MyInputFlexContainer = ({ children }:{children:ReactNode}) => {
  return (
    <div className='flex justify-center gap-[1rem] items-center w-[100%] mb-[1rem] flexContainer:flex-col flexContainer:items-stretch flexContainer:gap-[.5rem] flexContainer:mb-[.5rem]'>
      {
        children
      }
    </div>
  )
}

export default MyInputFlexContainer
