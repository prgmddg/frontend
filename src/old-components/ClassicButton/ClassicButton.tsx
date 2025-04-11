import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface props
{
  label:string|ReactNode,
  styles?:string,
  href?:string|Url,
  onClick?:(e:any)=>void
}

export const ClassicButton = (props:props) => {
  const { label, styles, href, onClick } = props
  const defaultStyles = `py-[10px] px-[45px] text-[#1e3a8a] text-[19px] bg-[#c2c8f9] font-bold rounded-[.5rem] ${styles}`

  return (
    <>
      {!href && (
        <button className={defaultStyles} onClick={onClick}>
          {label}
        </button>
      )}
      {href && (
        <Link href={href} className={defaultStyles} target='_blank' rel='noreferrer'>
          {label}
        </Link>
      )}
    </>
  )
}
