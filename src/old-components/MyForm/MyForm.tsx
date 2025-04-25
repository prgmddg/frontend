'use client'

import { globalContext } from '@/context/GlobalContext'
import postRequest from '@/helpers/postRequest'
import user from '@/interfaces/user'
import React, { ReactNode, useContext } from 'react'

interface props
{
  styles: string;
  label: string;
  children: ReactNode;
  isOk:boolean,
  setIsOpen:(value:boolean)=>void,
  container?:string,
  submit?:()=>any,
  user?:boolean,
  autoLogin?:boolean
}

export const MyForm = (props:props) => {
  const {
    styles,
    label,
    children,
    isOk,
    setIsOpen,
    container,
    submit = () => Promise<any>,
    user,
    autoLogin
  } = props

  const { setUser, setShowMsg } = useContext(globalContext)

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={async (e) => {
        e.preventDefault()
        if (!isOk) return

        const { res, values, err } = await submit()
        if (err || (res === false)) {
          setShowMsg({ show: true, type: 'fail', content: 'A ocurrido un error vuelve a intentarlo' })
          return
        }

        if (res) {
          if (user) {
            setShowMsg({ show: true, content: '¡Bievenido a Desarrollog Global!' })
            if (autoLogin) {
              const form = new FormData()
              form.append('correo', values.get('correo'))
              form.append('clave', values.get('clave'))
              const { res } = await postRequest('login', form)
              storing(res)
              setUser(res)
              document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`
              setIsOpen(false)

              return
            }
            storing(res)
            setUser(res)
          }
          setShowMsg({ show: true, type: 'success', content: 'Se han enviado los datos con Exito' })
          setIsOpen(false)
        }
      }}
    >
      <div className={container}>{children}</div>
      <button
        className={`px-[16px] py-[12px] transition-all duration-200 w-[100%] text-[#fff] rounded-[.5rem] font-bold capitalize ${styles} ${
          isOk ? '' : 'brightness-[70%] pointer-events-none'
        }`}
      >
        {label}
      </button>
    </form>
  )
}

function storing (user:user) {
  localStorage.setItem('DG-USER', JSON.stringify(user))
  document.cookie = `token=${user.token};domain=.desarrolloglobal.pe`
}
