import { MyForm } from '@/components/MyForm/MyForm'
import { MyInput } from '@/components/MyInput/MyInput'
import React, { useContext, useState } from 'react'
import { loginContext } from '../LoginSignup'
import MyInputFlexContainer from '@/components/MyInputFlexContainer/MyInputFlexContainer'
import { CheckBoxTerminos } from '@/components/CheckBoxTerminos/CheckBoxTerminos'
import postRequest from '@/helpers/postRequest'

interface values
{
  nombres:string,
  apellidos:string,
  correoElectronico:string,
  celular:string,
  dni:string,
  contraseña:string,
  repetirContraseña:string
  terminos:boolean
}

export const SignupForm = () => {
  const { settingShow: setShow, setType } = useContext(loginContext)
  const [values, setValues] = useState<values>(
    {
      nombres: '',
      apellidos: '',
      correoElectronico: '',
      celular: '',
      dni: '',
      contraseña: '',
      repetirContraseña: '',
      terminos: false
    })

  const isOk = Object.values(values).every(v => v !== '')
  const samePassword = values.contraseña === values.repetirContraseña
  const isChecked = values.terminos

  return (
    <>
      <button className='hover:underline text-myLightBlue self-start' onClick={() => setType('login')}>{'< volver'}</button>
      <span className='text-[40px] block mb-[.7rem] login:text-[25px] font-bold'>Bienvenido 🙂</span>
      <span className='text-[24px] block mb-[.7rem] login:text-[20px] font-bold'>
        Soy Nuevo Usuario
      </span>
      <p className='mb-[1rem]'>
        Registrate para poder acceder al aula virtual de Centro de Capacitación
        y Desarrollo Global.
      </p>
      <MyForm
        styles='bg-myLightBlue'
        label='registrarse'
        container='flex flex-col'
        isOk={isOk && samePassword && isChecked}
        setIsOpen={setShow}
        user
        autoLogin
        submit={() => postRequest('signUp', creatingForm(values))}
      >
        <MyInputFlexContainer>
          <MyInput label='Nombres' onlyText onChange={(e) => setValues(prev => { return { ...prev, nombres: e.target.value } })} />
          <MyInput label='Apellidos' onlyText onChange={(e) => setValues(prev => { return { ...prev, apellidos: e.target.value } })} />
        </MyInputFlexContainer>
        <MyInputFlexContainer>
          <MyInput label='Correo Electronico' type='email' onChange={(e) => setValues(prev => { return { ...prev, correoElectronico: e.target.value } })} />
          <MyInput label='Celular' type='number' onChange={(e) => setValues(prev => { return { ...prev, celular: e.target.value } })} />
        </MyInputFlexContainer>
        <MyInputFlexContainer>
          <MyInput label='Dni' max={8} type='number' onChange={(e) => setValues(prev => { return { ...prev, dni: e.target.value } })} />
          <MyInput label='Contraseña' type='password' onChange={(e) => setValues(prev => { return { ...prev, contraseña: e.target.value } })} />
        </MyInputFlexContainer>
        <MyInput label='Repetir Contraseña' type='password' onChange={(e) => setValues(prev => { return { ...prev, repetirContraseña: e.target.value } })} />
        <span className='text-red-500 mt-[.4rem] block'>*Las contraseñas deben ser iguales</span>
        <span className='text-red-500'>*El correo no se debe de encontrar registrado</span>
        <CheckBoxTerminos values={values} setValues={setValues} />
      </MyForm>
    </>
  )
}

function creatingForm (values:values) {
  const form = new FormData()
  form.append('correo', values.correoElectronico)
  form.append('clave', values.contraseña)
  form.append('nombres', values.nombres)
  form.append('apellidos', values.apellidos)
  form.append('dni', values.dni)
  form.append('celular', values.celular)

  return form
}
