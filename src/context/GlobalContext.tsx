'use client'

import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import cartItem from '@/interfaces/cartItem'
import postRequest from '@/helpers/postRequest'
import user from '@/interfaces/user'
import cursos from '@/interfaces/cursos'
import diplomas from '@/interfaces/diplomas'
import msg from '@/interfaces/msg'
import seminarios from '@/interfaces/seminarios'
import diplomados from '@/interfaces/diplomados'

export const globalContext = React.createContext<values>({
  cart: [],
  setCart: () => [],
  showMsg: { show: false },
  setShowMsg: () => null,
  setUser: () => null,
  user: undefined,
  cursos: [],
  diplomas: [],
  seminarios: [],
  diplomados: []
})

interface values {
  cart: Array<cartItem>;
  setCart: Dispatch<SetStateAction<Array<cartItem>>>;
  showMsg: msg;
  setShowMsg:Dispatch<SetStateAction<msg>>
  user:user|undefined,
  setUser:Dispatch<SetStateAction<user|undefined>>
  cursos:Array<cursos>|[],
  diplomas:Array<diplomas>|[]
  seminarios:Array<seminarios>|[]
  diplomados:Array<diplomados>|[]
}

interface props
{
  children: ReactNode;
  cursos: Array<cursos> | [];
  diplomas: Array<diplomas> | [];
  seminarios: Array<seminarios> | [];
  diplomados:Array<diplomados>|[]
}

export const GlobalContext = ({ children, cursos, diplomas, seminarios, diplomados }: props) => {
  const [cart, setCart] = useState<Array<cartItem>>([])
  const [showMsg, setShowMsg] = useState<msg>({
    show: false,
    type: 'fail',
    content: ''
  })
  const [user, setUser] = useState<user | undefined>(undefined)

  useEffect(() => {
    const dgCart = localStorage.getItem('DG-CART')
    if (dgCart === null) return
    setCart(JSON.parse(dgCart))
  }, [])

  useEffect(() => {
    localStorage.setItem('DG-CART', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const currentUser = localStorage.getItem('DG-USER')
    if (currentUser === null) return

    const form = new FormData()
    form.append('token', JSON.parse(currentUser).token)

    postRequest('validation', form).then(({ res }) => {
      if (res === false) return
      setUser(res)
    })
  }, [])

  const values: values = {
    cart,
    setCart,
    showMsg,
    setShowMsg,
    setUser,
    user,
    cursos,
    diplomas,
    seminarios,
    diplomados
  }

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  )
}
