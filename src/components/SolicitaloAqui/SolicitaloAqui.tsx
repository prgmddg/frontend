import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { SolicitaloForm } from '../SolicitaloForm/SolicitaloForm'
import solicitaloAqui from '@/context/solicitaloAqui'

export const SolicitaloAqui = ({ setIsOpen }:{setIsOpen:Dispatch<SetStateAction<boolean>>}) => {
  const value = { setIsOpen }

  return (
    <solicitaloAqui.Provider value={value}>
      <div className='flex'>
        <section className='bg-myLightPurple flex flex-col text-[#fff] p-[48px] gap-[1rem] w-[581px] popUp:hidden'>
          <Image
            src='/img/nuevo_logo_blanco.webp'
            width={180}
            height={50.27}
            alt='DG-LogoDG'
          />
          <div className='flex items-center max-w-[485px]'>
            <p className='font-medium text-[28px] block'>
              Tenemos mas de 100 Programas disponibles para ser dictados en tu
              Entidad/Institución
            </p>
            <Image
              src='/img/FechaInHouse.webp'
              width={150}
              height={134}
              alt='DG-Flecha'
              className='flex-1'
            />
          </div>
          <Image
            src='/img/LoginRegistro.webp'
            width={485}
            height={238}
            className='w-[100%]'
            alt='DG-solicitaloImage'
          />
        </section>
        <section className='flex-1 p-[48px] bg-[#fff] w-[581px] popUp:w-auto popUp:px-[24px] flex flex-col'>
          <div>
            <h2 className='text-[32px] block mb-[1rem]'>Solicítalo aquí</h2>
            <p className='mb-[1rem]'>
              Completa el formulario para que un asesor se comunique para
              enviarte una proforma de acuerdo a las especificaciones de la
              entidad donde laboras.
            </p>
          </div>
          <SolicitaloForm />
        </section>
      </div>
    </solicitaloAqui.Provider>
  )
}
