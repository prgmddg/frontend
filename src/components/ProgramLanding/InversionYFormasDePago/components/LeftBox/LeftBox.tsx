'use client'
import { programContext } from '@/context/ProgramContext'
import useCart from '@/hooks/useCart'
import programData from '@/types/programData'
import { faCreditCard, faEye, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Bancos from './components/Bancos'
import { MyPopUp } from '@/components/MyPopUp/MyPopUp'

export default function LeftBox () {
  const [show, setShow] = useState<boolean>(false)
  const { updatingCart } = useCart()
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program, isConvenio } = context.values
  const { imagen, id, titulo, precio, total_sesiones, tipo } = program as programData

  return (
    <>
      <MyPopUp setIsOpen={setShow} isOpen={show} popUp={<Bancos />} />
      <div className='flex-1 px-[28px] py-[38px] border-[3px] border-[#0074FF] rounded-[.5rem] mob:text-center'>
        <span className='text-[22px] font-bold mb-[12px]'>
          Pago por Aplicativo
        </span>
        <p className='text-[14px] mb-[27px] block'>
          Puedes pagar usando medios digitales como yape, plin o transferencia.
        </p>
        <Image
          src='/img/bancos.webp'
          height={39}
          width={321}
          alt='logos de bancos'
          className='mb-[26px] mx-auto'
        />
        <button onClick={() => setShow(true)} className='text-[18px] mb-[30px] mob:text-[16px] bg-[#0074FF] py-[19px] px-[1rem] rounded-[.5rem] gap-[12px] flex text-white justify-center w-[100%] items-center font-bold'>
          <FontAwesomeIcon icon={faEye} />
          <span className=''>Ver Cuentas disponibles</span>
        </button>
        <span className='font-bold text-[22px] mb-[18px] block leading-[1.6rem]'>
          Pago en linea con tarjeta<br /> crédito y/o debito
        </span>
        <p className='text-[14px] mb-[20px]'>
          Aceptamos IZIPAY y PAGO EFECTIVO, dos opciones confiables y seguras
          para que puedas realizar tus transacciones con total tranquilidad.
        </p>
        <button
          onClick={() =>
            updatingCart({ imagen, id, titulo, precio, total_sesiones, tipo, isConvenio })}
          className='border-[3px] mb-[37px] mob:text-[16px] border-[#0074FF] text-[#0074FF] font-bold text-[18px] flex items-center w-[100%] py-[19px] px-[1rem] justify-center gap-[24px] rounded-[.5rem]'
        >
          <FontAwesomeIcon icon={faCreditCard} />
          <span>Pagar con tarjeta</span>
        </button>
        <p className='flex w-[100%] gap-[.2rem] justify-center text-center text-[14px] mb-[8px]'>
          <FontAwesomeIcon icon={faLock} />
          <span>Pagos seguros encriptados con seguridad SSL</span>
        </p>
        <Image
          src='/img/creditCards.webp'
          alt='tarjetas de credito'
          height={32}
          width={240}
          className='mx-auto'
        />
      </div>
    </>
  )
}
