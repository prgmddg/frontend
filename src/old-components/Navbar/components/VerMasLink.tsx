import React from 'react'
import Link from 'next/link'

export const VerMasLink = ({ label, styles, onClick }:{label:string, styles?:string, onClick?:()=>void}) => {
  return (
    <Link
      href={`/${label}`}
      onClick={onClick}
      className={`bg-blue-600 transition-all duration-200 hover:bg-blue-500 inline-block px-[7rem] py-[.4rem] text-[#fff] rounded-[.5rem] ${styles}`}
    >
      Ver mas {label}
    </Link>
  )
}
