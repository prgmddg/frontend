'use client'

import React, { useContext } from 'react'

import { contextSeminario } from '../../context/Context'
import proximoSeminario from '@/interfaces/proximoSeminario'

export default function Docente () {
  const { profesor } = useContext(contextSeminario) as proximoSeminario

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='container-for-real flex justify-between items-center gap-[4rem] 1200px:flex-col-reverse'>
        <section className='flex-[1] bg-[#fff] px-[2.5rem] py-[2rem] rounded-[.5rem] shadow-md max-w-[690px]'>
          <strong className='text-[26px] block mb-[1rem]'>
            Docente
          </strong>
          <h3 className='text-[#341ff5] font-bold block mb-[1rem]'>
            {
              profesor?.nombre
            }
          </h3>
          <p className='text-[20px]'>
            {
              profesor?.descripcion
            }
          </p>
        </section>
        <section className='flex-[.5] flex justify-center'>
          <picture>
            <img src={profesor?.perfil} className='w-[100%] 1200px:w-[50%] mob2:w-[75%] rounded-[.5rem] shadow-md' alt='' />
          </picture>
        </section>
      </div>
    </div>
  )
}
