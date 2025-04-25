'use client'

import { MyForm } from '@/old-components/MyForm/MyForm'
import { MyInput } from '@/old-components/MyInput/MyInput'
import React, { useContext, useState } from 'react'
import { loginContext } from '../LoginSignup'
import postRequest from '@/helpers/postRequest'

export const LoginForm = () => {
  const { settingShow: setShow, setType } = useContext(loginContext)

  const [values, setValues] = useState<{
    correoElectronico: string;
    contraseña: string;
  }>({ correoElectronico: '', contraseña: '' })

  const isOk = Object.values(values).every(v => v !== '')

  const form = new FormData()
  form.append('correo', values.correoElectronico)
  form.append('clave', values.contraseña)

  return (
    <>
      <span className='text-[24px] mb-[1rem] block'>Bienvenidos 🙂</span>
      <span className='text-[24px]'>Iniciar Sesión</span>
      <p className='block mb-[2rem]'>
        Ingresa tu email y contraseña para que ingresar al aula virtual
      </p>
      <MyForm
        label='Iniciar Sesión'
        container='grid gap-4'
        styles='bg-myLightBlue'
        isOk={isOk}
        setIsOpen={setShow}
        user
        submit={() => postRequest('login', form)}
      >
        <MyInput
          label='Correo Electronico'
          type='email'
          value={values.correoElectronico}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, correoElectronico: e.target.value }
            })}
        />
        <MyInput
          label='Contraseña'
          type='password'
          value={values.contraseña}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, contraseña: e.target.value }
            })}
        />
      </MyForm>
      <button onClick={() => setType('signup')} className='hover:underline text-myLightBlue mt-[.5rem] block'>
        No tengo cuenta, Quiero registrarme
      </button>
    </>
  )
}
