'use client'

import React, { ReactNode } from 'react'
import inHouse from '@/interfaces/inHouse'

interface values
{
  inHouse:Array<inHouse>|[]
}

export const inHouseContext=React.createContext<values>({inHouse:[]})

export const InHouseContext = ({children,inHouse}:{children:ReactNode,inHouse:Array<inHouse>}) => 
{
  const values=
  {
    inHouse
  }

  return (
    <inHouseContext.Provider
      value={values}
    >
      {
        children
      }
    </inHouseContext.Provider>
  )
}
