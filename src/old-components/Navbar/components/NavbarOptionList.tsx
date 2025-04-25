'use client'

import Link from 'next/link'
import Options from '../interfaces/options'
import { NavBarOption } from './NavBarOption'

export const NavbarOptionList = ({ options }: { options: Array<Options> }) => {
  return (
    <>
      <ul className='hidden justify-between xl:flex w-[1059px] max-w-[100%] items-center'>
        <li>
          {options.map((opt, pos) => (
            <NavBarOption
              key={pos}
              {...opt}
            />
          ))}

          <Link
            className='relative text-white text-sm flex items-center capitalize font-bold bg-[#2A50E8] rounded-xl p-2 grid text-center w-full max-w-[150px]'
            href='/buscar_certificado'
          >
            <span>Verificación de</span>
            <span>Certificados</span>
          </Link>
        </li>
      </ul>
    </>
  )
}
