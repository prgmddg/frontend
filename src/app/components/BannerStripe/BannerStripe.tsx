'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerStripe () {
  return (
    <div className='mx-auto max-w-[100%]'>
      <div className='1000px:hidden bg-[#8a5bfa]'>
        <Link className='1000px:hidden' href='/inhouse'>
          <Image
            className='w-full aspect-auto max-w-[1000px] mx-auto'
            src='/img/BannerInHouse.gif'
            width='0'
            height='0'
            alt='banner'
          />
        </Link>
      </div>
    </div>
  )
}
