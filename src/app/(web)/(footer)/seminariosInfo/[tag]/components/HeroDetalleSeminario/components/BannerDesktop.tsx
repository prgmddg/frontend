import React from 'react'

export default function BannerDesktop ({ banner }:{banner:string}) {
  return (
    <div className='bg-slate-200 w-[100%] relative rounded-[.8rem] 1200px:hidden'>
      <picture>
        <img
          src={banner}
          alt=''
          className='w-[100%] z-[999] absolute top-[1.3rem] right-[1.3rem] rounded-[.8rem]'
        />
      </picture>
      <picture>
        <img
          src={banner}
          alt=''
          className='w-[100%] opacity-0'
        />
      </picture>
      <div className='absolute bg-slate-200 w-[3.8rem] h-[3.8rem] z-[99] left-[-3rem] bottom-[-3rem] rounded-[.5rem]' />
      <div className='absolute bg-slate-200 w-[3.8rem] h-[3.8rem] z-[99] top-[-1.3rem] left-[-4.4rem] rounded-[.5rem]' />
    </div>
  )
}
