'use client'

import React from 'react'
import Link from 'next/link'

export default function BannerStripe () {
  return (
    <div className='bg-[#8a5afa]'>
      <Link href='/'>
        <span className='sr-only'>Banner In House</span>
        <video className='w-full max-w-2xl mx-auto h-auto max-h-[61.63px]' width={0} height={0} autoPlay loop muted playsInline>
          <source src='/web/banner-in-house.webm' type='video/webm'/>
          <source src='/web/banner-in-house.mp4' type='video/mp4'/>
        </video>
      </Link>
    </div>
  )
}
