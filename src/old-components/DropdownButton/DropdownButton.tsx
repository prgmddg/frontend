'use client'

import React, { ReactNode, useState } from 'react'
import { Menu } from '@headlessui/react'
import MyTransition from '../MyTransition/MyTransition'
import Image, { ImageProps } from 'next/image'
import { MyPopUp } from '../MyPopUp/MyPopUp'
import Icon from '@/components/Icon'

interface props
{
  img?:ImageProps
  icon?: string
  arr:Array<any>
  desktop:ReactNode
  mobile:ReactNode
}

export const DropdownButton = (props:props) => {
  const { desktop, img, icon, arr, mobile } = props

  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className='relative 800px:hidden'>
        <Menu>
          <Menu.Button
            className='w-[43px] h-[43px] flex justify-center items-center relative bg-[#F5F5F5] rounded-[100%]'
          >
            {
              icon && (
                <Icon name={icon} className='w-7 h-7 text-[#2A50E8]' /> 
              )
            }

            {
              img && (
                <Image {...img} alt={img.alt} />
              )
            }
            {arr.length > 0 && (
              <span className='bg-red-500 text-[#fff] absolute top-[-.5rem] right-[-.5rem] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[100%] text-[.9rem] font-bold'>
                {arr.length}
              </span>
            )}
          </Menu.Button>
          <MyTransition>
            <Menu.Items>{desktop}</Menu.Items>
          </MyTransition>
        </Menu>
      </div>
      <button
        onClick={() => setShow(true)}
        className='w-[43px] h-[43px] justify-center items-center relative bg-[#F5F5F5] rounded-[100%] hidden 800px:flex'
      >
        { img && (<Image {...img} alt={img.alt} />) }
        {arr.length > 0 && (
          <span className='bg-red-500 text-[#fff] absolute top-[-.5rem] right-[-.5rem] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-[100%] text-[.9rem] font-bold'>
            {arr.length}
          </span>
        )}
      </button>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={
          mobile
        }
      />
    </>
  )
}
