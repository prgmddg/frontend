'use client'

import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useContext } from 'react'
import MyLinkButton from './components/MyLinkButton'
import { contextSeminario } from '../../context/Context'
import proximoSeminario from '@/interfaces/proximoSeminario'
import MyInput from './components/MyInput/MyInput'
import postRequest from '@/helpers/postRequest'
import { globalContext } from '@/context/GlobalContext'

interface values
{
   email:string
   phone:string
   name:string
}

export default function FaltaPoco () {
  const { fecha, titulo } = useContext(contextSeminario) as proximoSeminario
  const { setShowMsg } = useContext(globalContext)
  const [userParams, setUserParams] = useState<values>({
    email: '',
    phone: '',
    name: ''
  })

  async function submittingForm (e:any) {
    e.preventDefault()
    const data = new FormData()
    data.append('titulo', titulo)
    data.append('fecha_seminario', fecha)
    data.append('correo', userParams.email)
    data.append('nombres', userParams.name)
    data.append('telefono', userParams.phone)

    const { res, err } = await postRequest('seminarios', data, true)

    if (err) return setShowMsg({ type: 'fail', show: true, content: 'Ocurrio un Error' })
    if (res) return setShowMsg({ type: 'success', show: true, content: 'Se Enviaron los Datos Correctamente' })
    setShowMsg({ type: 'fail', show: true, content: 'Ocurrio un Error' })
  }

  return (
    <div>
      <div className='w-[1200px] max-w-[100%] my-0 mx-auto justify-between 1200px:items-center bg-[#fff] px-[4rem] mob2:px-[1.5rem] flex py-[3rem] 1200px:flex-col 1200px:gap-[2rem]'>
        <section className='w-[25rem] mob2:w-[100%] flex flex-col items-center justify-center text-center gap-[1.7rem]'>
          <strong className='text-[1.5rem]'>Falta poco para el seminario</strong>
          <p className='max-w-[25rem] block'>
            Únete a nuestros grupos de Telegram y WhatsApp para mantenerte
            informado de todos nuestros seminarios Gratuitos.
          </p>
          <div className='flex gap-[1rem] flex-col items-stretch w-[100%]'>
            <MyLinkButton
              icon={faTelegram}
              label='Únete al Grupo de Telegram'
              path='https://t.me/DesarrolloGlobal'
              styles='!justify-center'
            />
            <MyLinkButton
              icon={faWhatsapp}
              path='https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w'
              label='Únete al Grupo Whatsapp'
              styles='!bg-green-600 hover:!bg-green-700 !justify-center'
            />
          </div>
        </section>
        <form
          className='block border-[3px] border-blue-500 rounded-[.5rem] px-[2rem] 1200px:px-[1.5rem] py-[2rem] max-w-[450px] 1200px:w-[100%]'
          onSubmit={submittingForm}
        >
          <h3 className='font-bold text-[1.5rem] text-center block mb-[1.2rem] mob2:text-[1.2rem]'>
            Regístrate y participa en esta 👇 transmisión en vivo !Gratuita!
          </h3>
          <p className='text-center block mb-[1.5rem]'>
            Te enviaremos un recordatorio antes del inicio.
          </p>
          <div className='flex flex-col gap-[1.6rem] mb-[2.5rem]'>
            <MyInput
              icon={faUser} placeholder='Nombres'
              onChange={(e:any) => setUserParams(prev => { return { ...prev, name: e.target.value } })}
              isOnlyText
              required
              value={userParams.name}
            />
            <MyInput
              icon={faEnvelope} placeholder='Correo Electronico'
              onChange={(e:any) => setUserParams(prev => { return { ...prev, email: e.target.value } })}
              type='email'
              required
              value={userParams.email}
            />
            <MyInput
              icon={faWhatsapp} placeholder='Celular o Whatapp'
              isOnlyNum
              required
              onChange={(e:any) => {
                if (e.target.value.length > 9) {
                  e.target.value = e.target.value.substr(0, e.target.value.length - 1)
                  return
                }

                setUserParams(prev => { return { ...prev, phone: e.target.value } })
              }}
              value={userParams.phone}
            />
          </div>
          <MyLinkButton
            type='button'
            onClick={() => null}
            icon={faPen}
            iconSize='xl'
            label='Registrarme a este Seminario'
            styles='!text-center !w-[100%] !gap-[1.5rem] !justify-center py-[.6rem] 1200px:!text-[.8rem] 1200px:!gap-[.6rem] 1200px:!px-[.8rem]'
          />
        </form>
      </div>
    </div>
  )
}
