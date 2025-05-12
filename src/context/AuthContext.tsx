'use client'

import user from '@/interfaces/user'
import postRequest from '@/helpers/postRequest'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const AuthContext = createContext<{auth: user | null, setAuth: (auth: user | null) => void} | undefined>(undefined)

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<user | null>(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('DG-USER')
    if (currentUser === null) return

    const form = new FormData()
    form.append('token', JSON.parse(currentUser).token)

    postRequest('validation', form).then(({ res }) => {
      if (res === false) return
      setAuth(res)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}