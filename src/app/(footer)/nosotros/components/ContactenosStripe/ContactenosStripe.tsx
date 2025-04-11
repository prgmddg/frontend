import React, { ReactNode } from 'react'
import Image from 'next/image'

export const ContactenosStripe = () => {
  return (
    <div className=' bg-myPurple2 relative z-[9]'>
      <ul className='text-[#fff] flex container flex-wrap !py-0'>
        <div className='flex flex-wrap flex-1'>
          <Item>
            <p className='text-[.9rem]'>
              Nuestra empresa cuenta con la &quot;Certificación de calidad&quot; ISO 9001-2015
            </p>
          </Item>
          <Item>
            <Image
              src='/img/logo-nav-bar.webp'
              height={66}
              width={270}
              alt='logo de desarrollo global'
            />
          </Item>
        </div>
        <div className='flex flex-wrap flex-1'>
          <Item>
            <span className='font-bold'>En Programas de Postgrado</span>
          </Item>
          <Item>
            <Image
              className='w-full max-w-[250px] h-auto aspect-auto'
              src='/ISO-2025-BLANCO.webp'
              height={0}
              width={0}
              alt='certificado iso 9001-2015'
            />
          </Item>
        </div>
      </ul>
    </div>
  )
}

function Item ({ children }:{children:ReactNode}) {
  return <li className='flex-1 flex justify-center items-center text-center p-[.8rem] min-w-[120px]'>{children}</li>
}
