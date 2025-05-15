'use client'

import { MyProgramContext } from '@/app/(web)/contextMyProgram'
import program from '@/types/program'
import Link from 'next/link'
import { useContext, useState } from 'react'
import Options from '../interfaces/options'

export const NavBarOption = ({ href, label }:Options) => {
  const [hover, setHover] = useState<boolean>(false)
  const labellst = [
    'proximos inicios',
    'cursos',
    'diplomas',
    'diplomados',
    'inHouse',
    'seminarios',
    'grabados'
  ]

  const cn = useContext(MyProgramContext)
  if (cn === null) return

  return (
    <li>
      {
        label === 'blog'
          ? (
            <a
              className='relative text-[18px] hover:text-[#485BFF] hover-animation h-[40px] flex items-center capitalize font-bold'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href={href}
            >
              {label}
              <div className='flex justify-center w-[100%] absolute bottom-0 left-0'>
                <div
                  className={`h-[3px] bg-[#485BFF] text-center hover-animation ${
                    hover ? 'w-[100%]' : 'w-[0px]'
                  }`}
                />
              </div>
            </a>
          )
          : (
            <Link
              className='relative text-[18px] hover:text-[#485BFF] hover-animation h-[40px] flex items-center capitalize font-bold'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => cn.togglePr(labellst.includes(label) ? label as program : 'proximos inicios')}
              href={href}
            >
              {label}
              <div className='flex justify-center w-[100%] absolute bottom-0 left-0'>
                <div
                  className={`h-[3px] bg-[#485BFF] text-center hover-animation ${
                    hover ? 'w-[100%]' : 'w-[0px]'
                  }`}
                />
              </div>
            </Link>
          )
      }
    </li>
  )
}
