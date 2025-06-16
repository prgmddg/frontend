import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import MyIziInput from './MyIziInput'
import Cvv from './Cvv'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import Link from 'next/link'

export default function Izi ({ payType, load }: { payType: string, load: boolean }) {
  const [show, setShow] = useState(false)

  const isLoad = !load ? '' : '!opacity-0 !pointer-events-none'
  const hidden = payType === 'card' ? '' : '!opacity-0 !pointers-events-none !hidden'

  return (
    <>
      <div className={`flex justify-center pt-[1rem] ${hidden} ${isLoad}`}>
        <div id='myPaymentForm' className='w-[100%] relative'>
          <button
            className='absolute top-[5.5rem] left-[28rem] z-[999] question1:left-[26rem] question2:left-[26.5rem] question3:left-[24.5rem] question4:left-[22.5rem] question5:left-[0rem] question5:top-[11.5rem] question6:top-[8.6rem] question6:left-[9rem] question7:left-[8.2rem] question8:left-[4.3rem]'
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon size='xl' icon={faQuestionCircle} />
          </button>
          <div className='grid w-full gap-8 kr-embedded'>
            <div className='flex flex-col'>
              <label className='font-bold text-[.9rem] mb-[.4rem]'>
                Número de Tarjeta
              </label>
              <MyIziInput field={<div className='kr-pan' />} />
            </div>
            <div className='flex gap-[.8rem] mob:flex-col'>
              <div className='flex flex-[1.3] items-center gap-[.5rem]'>
                <label className='font-bold text-[.8rem] flex-[1.3]'>
                  Fecha de Expiracion de tarjeta MM/AA
                </label>
                <MyIziInput field={<div className='kr-expiry' />} />
              </div>
              <div className='flex flex-[1] items-center gap-[.5rem] question1:gap-[2.5rem]'>
                <label className='font-bold text-[.8rem] flex-[1]'>
                  Código de Seguridad
                </label>
                <MyIziInput field={<div className='kr-security-code' />} />
              </div>
            </div>
            <div className='grid gap-2'>
              <label className='font-bold text-[.8rem] flex-[1.3]'>
                Nombre del Titular
              </label>
              <MyIziInput field={<div className='kr-card-holder-name' />} />
            </div>
            
            <div className='grid gap-2'>
              <label className='font-bold text-[.8rem] flex-[1.3]'>
                Correo
              </label>
              <MyIziInput field={<div className='kr-card-holder-mail' />} />
            </div>
            
            <div className='flex gap-[.5rem]'>
              <input id='private' name='private' type='checkbox' defaultChecked={true} />
              <label htmlFor='private'>
                Aceptar Términos, Condiciones y Política de{' '}
                <Link
                  className='text-[#3F8DFD] hover:underline'
                  target='_blank'
                  href='/politicas-de-privacidad'
                >
                  Protección de Datos.
                </Link>
              </label>
            </div>
            <div className='kr-form-error w-[100%] text-center border-[1px] border-red-500' />
            <button className='kr-payment-button'/>
          </div>
        </div>
      </div>
      <MyPopUp isOpen={show} setIsOpen={setShow} popUp={<Cvv />} />
    </>
  )
}
