import program from '@/types/program'
import React, { Dispatch, SetStateAction } from 'react'
import { categorias } from './helpers/categorias'
import { CategoriaButton } from '.'

interface props
{
  myProgram:program
  setMyProgram:Dispatch<SetStateAction<program>>
}

export const Categoria = ({ myProgram, setMyProgram }:props) => {
  return (
    <div className='bg-primary rounded-2xl flex py-2.5 px-10 w-[100%] gap-[.5rem] my-0 mx-auto program-selector:rounded-[1.8rem] flex-wrap justify-between'>
      <CategoriaButton label='proximos inicios' program={myProgram} setMyProgram={setMyProgram} bigger />
      {
        categorias.map((cat, pos) =>
          (
            <CategoriaButton key={pos} label={cat} program={myProgram} setMyProgram={setMyProgram} />
          ))
      }
      <CategoriaButton label='inHouse' href='/inhouse' />
    </div>
  )
}
