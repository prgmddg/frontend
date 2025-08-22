'use client'
import { programContext } from '@/context/ProgramContext'
import useAcordeon from '@/hooks/useAcordeon'
import programData from '@/types/programData'
import { faLayerGroup, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'

export const SubAcordeonCur = ({ data }:{data:any}) => {
  const [abrirSub, alturaMaxima, contenidoRef, handleAbrirSub] = useAcordeon()

  useEffect(() => { handleAbrirSub() }, [handleAbrirSub])

  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { tipo } = program as programData

  function isCurOrDip (tipo:string) {
    if (tipo === 'curso') {
      return (
        <button
          className='px-5 text-left lg:px-10 xl:px-10 2xl:px-10 py-[27px] bg-[#F4F5F7] w-full rounded-lg flex items-center justify-between my-shadow border-[#C9D6E4] border-[1px]'
          onClick={handleAbrirSub}
        >
          <span className='flex items-center w-[100%] mob:flex-col mob:items-start'>
            <span className='font-bold w-[5.5rem]'>{data.titulo}:</span>
            <span className='flex-1 line-clamp-[2]'>{data.sub_titulo}</span>
          </span>
          <FontAwesomeIcon
            className='mr-auto text-primary'
            icon={abrirSub ? faMinus : faPlus}
          />
        </button>
      )
    }
    return (
      <div className='text-left flex flex-col py-[.5rem] border-b-[1px] border-gray-300'>
        <span className='flex items-center'>
          <FontAwesomeIcon className='text-gray-400 mr-[.4rem]' icon={faLayerGroup} />
          <span className='w-[5.5rem]'>{data.titulo}:</span>
          <span className='flex-1'>
            {data.sub_titulo}
          </span>
        </span>
      </div>
    )
  }

  return (
    <div className='w-full'>
      {
        isCurOrDip(tipo)
      }
      {tipo === 'curso' && (
        <div
          className='block w-full overflow-hidden transition-all duration-300 ease-in-out rounded-lg '
          style={{ maxHeight: abrirSub ? alturaMaxima : 0 }}
        >
          <div
            className='px-[43px] mob:px-[.8rem] pt-[29px] grid gap-2 [&>ul]:list-disc [&>p:not(:first-child)]:pt-4'
            ref={contenidoRef}
            dangerouslySetInnerHTML={{ __html: data.descripcion }}
          />
        </div>
      )}
    </div>
  )
}
