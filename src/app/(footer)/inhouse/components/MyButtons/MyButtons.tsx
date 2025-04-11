'use client'
import React, { useState, useContext } from 'react'
import { ClassicButton } from '@/old-components/ClassicButton/ClassicButton'
import Image from 'next/image'
import { MyPopUp } from '@/old-components/MyPopUp/MyPopUp'
import { SolicitaloAqui } from '@/old-components/SolicitaloAqui/SolicitaloAqui'
import { globalContext } from '@/context/GlobalContext'

export const MyButtons = ({ styles }:{styles?:string}) => {
  const [show, setShow] = useState<boolean>(false)
  const { user } = useContext(globalContext)

  return (
    <>
      <div className={`mt-[1.8rem] inline-flex gap-[1rem] flex-wrap myButtons:flex-col ${styles}`}>
        <ClassicButton
          onClick={() => setShow(true)}
          label='Solicitar Cotización Aquí'
          styles='!flex-1 !bg-myBlue text-[#fff]'
        />
        <ClassicButton
          label={
            <p className='flex justify-between items-center text-[#fff] gap-[1rem] myButtons:w-fit'>
              WhatsApp
              <Image
                src='/img/WhatsInHouse.webp'
                height={34}
                width={34}
                alt='DG-wp'
              />
            </p>
          }
          styles='!bg-green-500 myButtons:!flex-1 flex justify-center'
          href={`https://api.whatsapp.com/send?phone=51993403219&text=Hola, solicito información de los cursos In-House, mi correo es:%20${user?.correo || ''}`}
        />
      </div>
      <MyPopUp
        setIsOpen={setShow}
        isOpen={show}
        popUp={<SolicitaloAqui setIsOpen={setShow} />}
      />
    </>
  )
}
