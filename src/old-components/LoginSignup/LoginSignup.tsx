'use client'

import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { NavbarForm } from './components/NavbarForm'
import MyType from '../Navbar/types/MyType'
import { twMerge } from 'tailwind-merge'

interface values {
  show: boolean;
  type: MyType;
  settingShow:(bool:boolean)=>void;
  setType: Dispatch<SetStateAction<MyType>>;
}

export const loginContext = React.createContext<values>({
  show: false,
  settingShow: () => null,
  type: 'login',
  setType: () => null
})

interface props
{
  styles?:string
  label?:string
  initialType?:'login'|'signup'
}

const LoginSignup = ({ styles, label, initialType }:props) => {
  const [show, setShow] = useState<boolean>(false)
  const [type, setType] = useState<MyType>('login')

  useEffect(() => {
    if (initialType) {
      setType(initialType)
    }
  }, [initialType])

  function settingShow (bool:boolean) {
    setShow(bool)
    setType(initialType || 'login')
  }

  const values =
  {
    show,
    settingShow,
    setType,
    type
  }

  return (
    <loginContext.Provider value={values}>
      <button
        className={twMerge('font-bold py-[8px] bg-[#2A50E8] text-white rounded-[.5rem] px-[55px] pt-[15px] pb-[12px] text-[18px] ml-[16px] 800px:px-[14px] 800px:text-[1rem]', styles)}
        onClick={() => setShow(true)}
      >
        <span>
          {
            label || 'Aula Virtual'
          }
        </span>
      </button>
      <MyPopUp
        setIsOpen={settingShow}
        isOpen={show}
        popUp={
          <NavbarForm type={type} />
        }
      />
    </loginContext.Provider>
  )
}

export default LoginSignup
