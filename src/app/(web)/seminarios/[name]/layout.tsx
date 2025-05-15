import React, { ReactNode } from 'react'

export default function layout ({ children }: { children: ReactNode }) {
  return (
    <main className='px-[1rem] h-[calc(100vh_-_80px)] bg-[#000a48] relative'>
      {children}
    </main>
  )
}
