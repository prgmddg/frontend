import MyBlock2 from '@/old-components/MyBlock2/MyBlock2'
import React from 'react'
import HeaderLeftBox from '../components/HeaderLeftBox/HeaderLeftBox'
import HeaderRiteBox from '../components/HeaderRiteBox/HeaderRiteBox'
import getRequest from '@/helpers/getRequest'
import { profesor } from '@/interfaces/profesor'
import { CardsGlo } from '@/old-components/Cards'
import { notFound } from 'next/navigation'
import { Video } from '@/old-components/Video/Video'

async function gettinPic (pic: string): Promise<string> {
  try {
    await fetch(pic)
    return pic
  } catch {
    return '/img/NosotrosDesarrollo.webp'
  }
}

export default async function page ({ params }: any) {
  const { res: profesor } = await getRequest('profesores', '', params.id.split('-').at(-1)) as { res: profesor | 'ERROR 02: $Id de Curso no existe', err: boolean }
  if (profesor === 'ERROR 02: $Id de Curso no existe') return notFound()

  profesor.foto = await gettinPic(profesor.foto)

  return (
    <>
      <div className='w-[100%] bg-primary2  h-[401px] relative flex justify-center px-[1.5rem] mob:px-[.7rem]'>
        <div className='w-[100%] relative h-[100%]'>
          <MyBlock2
            styles={{
              container:
                'absolute h-[652px] 1151px:h-[initial] 1151px:py-[2rem] left-[50%] flex items-center justify-center translate-x-[-50%] bottom-0 translate-y-[50%] 1151px:px-[3rem] mob:px-[1.5rem]'
            }}
          >
            <div className='w-[100%] flex justify-between gap-[128px] 1151px:justify-center'>
              <HeaderLeftBox {...profesor} />
              <HeaderRiteBox {...profesor} />
            </div>
          </MyBlock2>
        </div>
      </div>

      {
        profesor.video.length !== 0 && (
          <div className='pt-[342px] mob:px-[.7rem] 1151px:pt-[400px] '>
            <MyBlock2 styles={{ container: 'px-10 py-14 1151px:px-[3rem] mob:px-[.5rem] bg-primary2 ' }}>
              <h2 className='text-white text-[35px] font-bold mb-[5px] ml-[38px] mob:text-[25px] mob:ml-0 mob:text-center'>Clase maestra</h2>
              <p className='text-white mb-[30px] text-2xl mob:text-center ml-[38px] mob:ml-0'>{profesor.nombres} {profesor.apellidos}</p>
              <div className='h-[300px] w-[] md:h-[550px] px-5'>
                <Video src={profesor.video} styles='w-full h-full' />
              </div>
            </MyBlock2>
          </div>
        )
      }

      <div className={`${profesor.video.length === 0 ? 'pt-[342px]' : 'pt-5'} pb-[10rem]  px-[1.5rem] mob:px-[.7rem]`}>
        <MyBlock2 styles={{ container: 'pt-[51px] pb-[98px] 1151px:px-[3rem] mob:px-[.5rem]' }}>
          <h2 className='text-primary2 text-[35px] font-bold mb-[30px] ml-[38px] mob:text-[25px] mob:ml-0 mob:text-center'>Cursos que enseña</h2>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(20.3rem,1fr))] gap-y-[.5rem]'>
            {
              profesor?.cursos.map((curso, pos) =>
                (
                  <CardsGlo {...curso} tipo='curso' key={pos} />
                ))
            }
          </div>
        </MyBlock2>
      </div>
    </>
  )
}
