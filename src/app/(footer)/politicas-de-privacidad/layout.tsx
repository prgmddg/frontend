import { LinkItems } from '@/components/LinkItems/LinkItems'
import React, { ReactNode } from 'react'

export default function layaout ({ children }:{children:ReactNode}) {
  return (
    <article className='flex py-[2rem] flex-wrap'>
      <section className='text-left w-[25rem] pl-[48px] mob-first:pl-[30px]'>
        <h1 className='text-[40px] block mb-[3.5rem]'>Legal</h1>
        <ul className='flex flex-col gap-[1rem]'>
          <LinkItems styles='font-bold' />
        </ul>
      </section>
      <section className='flex-1 p-[48px] mob-first:px-[30px]'>{children}</section>
    </article>
  )
}
