import { Footer } from '@/old-components/Footer/Footer'
import React, { ReactNode } from 'react'

export default function layout ({ children }:{ children:ReactNode}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
