'use client'

import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import cartItem from '@/interfaces/cartItem'
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
  useEffect(() => {
    const dgCart = localStorage.getItem('DG-CART')
    if (dgCart === null) return
    setCart(JSON.parse(dgCart))
  }, [])

  useEffect(() => {
    localStorage.setItem('DG-CART', JSON.stringify(cart))
  }, [cart])

  const values: values = {
    cart,
    setCart,
    showMsg,
    setShowMsg,
    cursos,
    diplomas,
    seminarios,
    diplomados
  }

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  )
}
