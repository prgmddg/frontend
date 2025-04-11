'use client'

import React, { Dispatch, SetStateAction, useContext } from 'react'
import { DropDownItem } from '.'
import { VerMasLink } from './VerMasLink'
import { globalContext } from '@/context/GlobalContext'

interface props
{
  label:string
  setShow:Dispatch<SetStateAction<boolean>>
}

export const MobSubMenu = ({ label, setShow }:props) => {
  const { cursos, diplomas } = useContext(globalContext)
  const data = label === 'cursos' ? cursos : diplomas
  const finalData = data.slice(0, 10)

  return (
    <>
      <div className='flex flex-col gap-[.5rem] max-h-[15rem] overflow-y-auto'>
        {
          finalData.map(data =>
            (
              <DropDownItem
                key={data.id}
                img={data.imagen}
                title={data.titulo}
                date={data.inicio}
                onClick={() => setShow(false)}
                mob
                type={label}
                icon={data.icono}
                tag={data.etiqueta}
              />
            ))
        }
      </div>

      <VerMasLink
        label={label}
        styles='!mt-[.5rem] !px-[0] !w-[100%] text-center'
        onClick={() => setShow(false)}
      />
    </>
  )
}
