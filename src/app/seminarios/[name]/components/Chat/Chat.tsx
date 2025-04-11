'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import MenuBar from './components/MenuBar/MenuBar'
import options from './interfaces/options'
import ChatBox from './components/ChatBox/ChatBox'
import Detalles from './components/Detalles/Detalles'
import Promocion from './components/Promocion/Promocion'

interface values
{
    option:options
    setOption:Dispatch<SetStateAction<options>>
    setParticipar:Dispatch<SetStateAction<boolean>>
    participar:boolean
}

export const chatContenxt = React.createContext<values>(
  {
    option: 'Chat en Vivo',
    participar: false,
    setParticipar: () => null,
    setOption: () => null
  }
)

export default function Chat () {
  const [option, setOption] = useState<options>('Promocion')
  const [participar, setParticipar] = useState<boolean>(false)

  const values =
  {
    option,
    setOption,
    participar,
    setParticipar
  }

  return (
    <chatContenxt.Provider value={values}>
      <div className='w-[439px] 1500px:w-[100%] bg-[#000a48] pt-[.7rem] flex flex-col 1500px:flex-1'>
        <MenuBar />
        <div className='flex-1 flex items-stretch pt-[1rem]'>
          {option === 'Chat en Vivo' && <ChatBox />}
          {option === 'Detalles' && <Detalles />}
          {option === 'Promocion' && <Promocion />}
        </div>
      </div>
    </chatContenxt.Provider>
  )
}
