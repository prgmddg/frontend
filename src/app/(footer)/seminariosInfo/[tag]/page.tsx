import getRequest from '@/helpers/getRequest'
import proximoSeminario from '@/interfaces/proximoSeminario'
import React from 'react'
import HeroDetalleSeminario from './components/HeroDetalleSeminario/HeroDetalleSeminario'
import Context from './context/Context'
import FaltaPoco from './components/FaltaPoco/FaltaPoco'
import Docente from './components/Docente/Docente'
import Solicita from './components/Solicita/Solicita'

export default async function page ({ params }:any) {
  const { res, err } = await getRequest('seminarios', params.tag)
  const proximoSeminario = res as proximoSeminario

  if (err || proximoSeminario === null) return <div className='capitalize font-bold text-[2rem] text-center'>an error was occurred</div>

  return (
    <Context proximoSeminario={proximoSeminario}>
      <HeroDetalleSeminario />
      <FaltaPoco />
      <Docente />
      <Solicita />
    </Context>
  )
}
