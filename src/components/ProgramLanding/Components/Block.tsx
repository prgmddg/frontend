import React, { ReactNode } from 'react'

interface props
{
  title:string
  subtitle:string
  children:ReactNode
  id?:string
  invert?:boolean
  className?:string
}

export default function Block (props:props) {
  const { title, subtitle, children, id = '', invert = false } = props

  return (
    <div className={`px-[1rem] ${!props.className ? 'py-[59px]' : props.className} ${invert ? 'bg-myBlue3 text-white' : ''}`} id={id}>
      <article className='w-[1283px] mx-auto max-w-[100%] flex justify-start'>
        <section className='w-[842px] max-w-[100%]'>
          <h2 className={`${invert ? 'text-white' : 'text-[#0D31A7]'} text-[40px] text-center mb-[25px] block mob:text-[30px]`}>
            {title}
          </h2>
          <p className='text-[22px] text-center mb-[37px] mob:text-[16px] font-medium max-w-[555px] leading-[25px] mx-auto mob:mb-[22px]'>{subtitle}</p>
          {children}
        </section>
      </article>
    </div>
  )
}
