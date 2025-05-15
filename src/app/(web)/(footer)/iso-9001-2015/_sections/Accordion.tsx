'use client'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode, useEffect, useState } from 'react'

export default function Accordion ({ title, description, isOpen = false }:{title:string, description: ReactNode, isOpen?:boolean}) {
  const [show, setShow] = useState<boolean>(false)
    
  useEffect(() => {
    if (!isOpen) return
    setShow(true)
  }, [isOpen])
    
  return (
    <div className='rounded-[9px] border-[1px] border-[#707070] overflow-hidden'>
      <button
        className={`text-[24px] bg-[#F5F5F5] py-[37px] rounded-[0px_0px_9px_9px] border-b-[1px] px-[1rem] relative flex justify-center items-center w-[100%] font-bold 1067px:text-[16px] 800px:justify-between 800px:gap-[.5rem] ${show ? 'border-b-[#707070]' : 'border-b-[transparent]'}`}
        onClick={() => setShow((prev) => !prev)}
      >
        <span>
          {
            title
          }
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          size='lg'
          className='absolute right-[61px] 800px:relative 800px:right-[initial]'
        />
      </button>
      {show && (
        <div className='flex justify-center items-center py-[58px] w-[100%] px-[1rem] text-[22px] leading-[35px]'>
          <div className='max-w-[912px] block 800px:text-[14px] 800px:leading-[20px]'>
            {
              description
            }
          </div>
        </div>
      )}
    </div>
  )
}