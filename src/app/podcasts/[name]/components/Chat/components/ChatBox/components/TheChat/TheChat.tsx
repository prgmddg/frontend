'use client'
import { globalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'
import LoginSigIn from '../LoginSigIn'
import ChatForReal from './components/ChatForReal'

export default function TheChat () {
  const { user } = useContext(globalContext)

  return (
    <>
      {
        !user && <LoginSigIn />
      }
      {
        user && <ChatForReal />
      }
    </>
  )
}
