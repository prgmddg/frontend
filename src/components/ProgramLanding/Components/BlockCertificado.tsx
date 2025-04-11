import React, { ReactNode } from 'react'

interface props
{
  title:string
  subtitle:string
  children:ReactNode
  id?:string
  invert?:boolean
}

export default function BlockCertificado (props:props) {
  const { title, subtitle, children, id = '', invert = false } = props

  return (
    <div className={`px-[1rem] py-[59px] ${invert ? 'bg-myBlue3 text-white' : ''}`} id={id}>
      <article className='w-[1283px] mx-auto max-w-[100%] flex justify-start'>
        <section className='w-[842px] max-w-[100%]'>
          <h2 className={`${invert ? 'text-white' : 'text-[#0D31A7]'} text-[40px] text-center mb-[25px] block mob:text-[30px]`}>
            {title}
          </h2>
          <p className='text-balance max-w-[750px] text-[18px] text-left mb-[37px] mob:text-[16px] font-medium leading-[25px] mx-auto mob:mb-[18px]'>{subtitle}</p>
          {children}
        </section>
      </article>
    </div>
  )
}
