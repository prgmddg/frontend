import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    styles?:{container:string}
    children:ReactNode
}

export default function MyBlock2 (props:props) {
  const { styles, children } = props
  const { container } = styles || { container: '' }

  return (
    <article
      className={twMerge(
        'max-w-[100%] w-[1364px] rounded-[9px] bg-white my-shadow px-[100px] mx-auto',
        container
      )}
    >
      {children}
    </article>
  )
}
