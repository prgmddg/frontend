'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerStripe () {
  return (
    <div className='hidden mx-auto md:block'>
      <div className='bg-[#8b52fe]'>
        <Link href='/inhouse'>
          <Image
            className='w-full aspect-auto max-w-[800px] mx-auto'
            src='/img/BannerInHouse.gif'
            width={0}
            height={0}
            alt='banner'
          />
        </Link>
      </div>
    </div>
  )
}
