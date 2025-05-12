'use client'

import LoginSigIn from '../LoginSigIn'
import ChatForReal from './components/ChatForReal'
import { useAuth } from '@/hooks/useAuth'

export default function TheChat () {
  const { auth } = useAuth()

  return (
    <>
      {
        !auth && <LoginSigIn />
      }
      {
        auth && <ChatForReal />
      }
    </>
  )
}
