import React from 'react'
import Header from './components/Header'
import CheckPoints from './components/CheckPoints'
import Detalle from './components/Detalle/Detalle'
import { Metadata } from 'next'

export const metadata:Metadata =
{
  robots:
  {
    nocache: true
  }
}

export default function page () {
  return (
    <>
      <Header />
      <CheckPoints />
      <Detalle />
    </>
  )
}
