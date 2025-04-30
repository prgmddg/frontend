'use client'

import { programContext } from '@/context/ProgramContext'
import useAcordeon from '@/hooks/useAcordeon'
import programData from '@/types/programData'
import { faClockRotateLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext } from 'react'
import { SubAcordeonCur } from './components/SubAcordeonCur'

export const AcrodeonCursos = ({ data }:{data:any}) => {
  const [abrirSub, , , handleAbrirSub] = useAcordeon()
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { titulo, icono, color, tipo } = program as programData

  return (
    <>
      <div className='w-full shadow-lg'>
        <button
          className='px-[30px] 680px:px-[1rem] h-[80px] w-full rounded-lg flex items-center text-white font-bold justify-between text-lg gap-[20px] 680px:gap-[7px]'
          onClick={handleAbrirSub}
          style={{ backgroundColor: color }}
        >
          <div className='flex items-center justify-between gap-3'>
            {
              data.icono && (
                <Image
                  src={tipo === 'curso' ? icono : data.icono}
                  width='50'
                  height='50'
                  alt='siaf'
                  className='hidden lg:block xl:block 2xl:block'
                />
              )
            }
            <p
              className='text-left mob:text-[.9rem] mob:leading-[1.1rem] capitalize text-[18px] line-clamp-2 leading-[22px]'
              title=''
            >
              {tipo !== 'curso'
                ? (
                  <>{data.titulo.toLowerCase()}</>
                )
                : (
                  <>{titulo.toLowerCase()}</>
                )}{' '}
            </p>
          </div>
          <div className='flex items-center justify-between gap-[36px] ml-[.3rem] leading-[22px] text-[16px] 680px:gap-[8px] 680px:text-[12px]'>
            <p className='680px:hidden'>
              <FontAwesomeIcon size='lg' icon={faClockRotateLeft} />
            </p>
            {tipo === 'curso' && <p>{data.length}&nbsp;Sesiones</p>}
            {tipo !== 'curso' && <p>{data.sesiones.length}&nbsp;Sesiones</p>}
            {abrirSub && <FontAwesomeIcon size='lg' icon={faMinus} />}
            {!abrirSub && <FontAwesomeIcon size='lg' icon={faPlus} />}
          </div>
        </button>
        {abrirSub && (
          <div
            className={`w-full h-auto rounded-lg ${
              tipo === 'curso'
                ? 'p-5 space-y-4'
                : 'p-[1rem] px-[1.5rem] my-shadow mt-[.8rem]'
            }`}
          >
            {tipo !== 'curso' && (
              <>
                <span className='font-bold block mb-[.4rem]'>
                  Ejes tematicos
                </span>
                {tipo !== 'curso' &&
                    data.sesiones.map((dat: any) => (
                      <SubAcordeonCur key={dat.id} data={dat} />
                    ))}
              </>
            )}
            {tipo === 'curso' &&
                data.map((dat: any) => (
                  <SubAcordeonCur key={dat.id} data={dat} />
                ))}
          </div>
        )}
      </div>
    </>
  )
}
