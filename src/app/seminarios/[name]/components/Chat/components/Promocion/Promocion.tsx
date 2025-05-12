'use client'

import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { seminarioContext } from '../../../../context/SeminarioContext'
import { globalContext } from '@/context/GlobalContext'
import seminarios from '@/interfaces/seminarios'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState, InputHTMLAttributes } from 'react'
import Image from 'next/image'
import postRequest from '@/helpers/postRequest'
import { useAuth } from '@/hooks/useAuth'

export default function Promocion () {
  const seminario = useContext(seminarioContext) as seminarios
  const { asesor, titulo, tipo_programa } = seminario
  const [show, setShow] = useState<boolean>(false)
  const { auth } = useAuth()

  return (
    <>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={<Form {...seminario} />}
      />
      <div className='pt-[2rem] w-[100%]'>
        <p className='text-white text-[1.1rem] block text-center mb-[1rem]'>
          Estamos en linea 😃
        </p>
        <a
          target='_blank'
          href={`https://api.whatsapp.com/send?phone=${asesor && asesor[0]?.telefono}&text=Hola,%20solicito%20información%20del%20%20${tipo_programa}: ${titulo},%20mi%20correo%20es: ${auth?.correo}`}
          className='bg-green-500 text-white font-bold text-[1.7rem] w-[100%] px-[1rem] py-[.5rem] flex gap-[1rem] rounded-[.5rem] justify-center items-center mb-[1rem]' rel='noreferrer'
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          {asesor && asesor[0]?.telefono}
        </a>
        <button
          className='rounded-[.5rem] bg-[#fff] text-black w-[100%] px-[1rem] h-[58.48px] flex items-center justify-center'
          onClick={() => setShow(true)}
        >
          👉 Quiero la Promocion !Registrate!
        </button>
      </div>
    </>
  )
}

function Form (props:seminarios) {
  const { setShowMsg } = useContext(globalContext)
  const [values, setValues] = useState<{nombre:string, email:string, telefono:string, isChecked:boolean}>({ nombre: '', email: '', telefono: '', isChecked: true })

  async function submittingForm (e:any) {
    e.preventDefault()
    const data = new FormData()
    data.append('titulo', props.titulo)
    data.append('fecha_seminario', props.fecha)
    data.append('correo', values.email)
    data.append('nombres', values.nombre)
    data.append('telefono', values.telefono)

    const { res } = await postRequest('seminarios', data, true)

    if (res) return setShowMsg({ show: true, content: 'Se enviaron los datos con exito', type: 'success' })
    setShowMsg({ show: true, content: 'Ocurrio un Error', type: 'fail' })
  }

  return (
    <div className='bg-[#fff]'>
      <section className='p-[24px] max-w-[701px]'>
        <div className='mb-[1rem] flex justify-between'>
          <span className='block text-[24px] leading-[28.8px]'>
            <b>Regístrate Gratis</b> y obtén el 36% Dscto. para el{' '}
            <b>Curso Formulación y Evaluación de Proyectos de Inversión.</b>
          </span>
          <Image
            src='/img/descuentazo.webp'
            width={110}
            height={86}
            alt='imagen de 36% de descuento'
            className='mob:hidden'
          />
        </div>
        <form className='flex flex-col gap-[1rem]' onSubmit={submittingForm}>
          <Input
            placeholder='Ingresa tu Nombre'
            type='text'
            key={1}
            value={values.nombre}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, nombre: e.target.value }
              })}
          />
          <Input
            placeholder='Ingresa tu Correo'
            type='email'
            key={2}
            value={values.email}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, email: e.target.value }
              })}
          />
          <Input
            placeholder='Ingresa tu telefono'
            type='number'
            key={3}
            value={values.telefono}
            onChange={(e) =>
              setValues((prev) => {
                return { ...prev, telefono: e.target.value }
              })}
          />
          <div className='flex gap-[.5rem] items-center'>
            <input
              type='checkbox'
              checked={values.isChecked}
              onChange={(e) =>
                setValues((prev) => {
                  return { ...prev, isChecked: e.target.checked }
                })}
            />
            Acepto politica de datos
          </div>
          <button className='bg-[#2a50e8] p-[8px] w-[100%] text-center text-white rounded-[.3rem]'>
            Quiero La Promocion
          </button>
        </form>
      </section>
    </div>
  )
}

function Input ({ ...props }:InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} required className='text-[16px] py-[6px] px-[12px] border-[1px] border-[#ced4da] rounded-[.3rem]' />
  )
}
