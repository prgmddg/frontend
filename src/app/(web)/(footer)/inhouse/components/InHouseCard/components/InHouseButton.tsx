'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface props {
  img: {src:string, h:number, w:number}
  href?:string,
  label?: string
  styles?:string
  onClick?:()=>void
}

export const InHouseButton = ({ img, label, styles, onClick, href }:props) => {
  const className = twMerge('flex font-bold px-[3px] bg-[#0D30A7] rounded-[.3rem] text-white justify-center items-center gap-[.4rem] py-[.6rem] w-full', styles)

  return (
    <>
      {!href && (
        <button className={className + ' text-[.9rem]'} onClick={onClick}>
          {label}
        </button>
      )}
      {
        href &&
          <a
            className={className}
            target='_blank'
            href={href} rel='noreferrer'
          >
            <Image
              src={img.src}
              alt='DG-inHouseIcon'
              height={img.h}
              width={img.w}
            />
          </a>
      }
    </>
  )
}
