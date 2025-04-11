import parsearFecha from '@/helpers/parsearFecha'
import twentyfourToTwelve from '@/helpers/twentyfourToTwelve'
import seminarios from '@/interfaces/seminarios'
import { faCalendar, faClock, faEye, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const CardsSeminar = (props:seminarios) => {
  const { banner, titulo, fecha, hora, etiqueta, tipo } = props

  return (
    <div className='w-[302px] max-w-[302px] mx-auto h-[466px] flex flex-col rounded-[.3rem] overflow-hidden 370px:w-[100%]'>
      <picture>
        <img src={banner.oferta} alt='banner de seminario' width='302' height='180' className='w-[302px] h-[180px]' />
      </picture>
      <div className='bg-[#000b4e] text-white p-5 flex-1 flex flex-col justify-between'>
        <div>
          <div className='flex items-center gap-3 font-bold'>
            <div className='border border-[#0c7aff] text-[#0c7aff] rounded-full px-5'>
              Seminario
            </div>
            <div className='flex items-center gap-2 px-5 text-white bg-black border border-black rounded-full'>
              <FontAwesomeIcon icon={faVideoCamera} />
              {tipo === 'PROXIMO' ? 'En Vivo' : 'Seminario'}
            </div>
          </div>
          <p className='mt-5 font-bold text-white line-clamp-3'>{titulo}</p>
        </div>
        <div className='mt-5'>
          <p className='flex items-center gap-3 font-bold text-white'>
            <FontAwesomeIcon icon={faCalendar} /> Fecha: {fecha.split('-')[2]} de {parsearFecha(fecha)}
          </p>
          <p className='flex items-center gap-3 font-bold text-white'>
            <FontAwesomeIcon icon={faClock} />{twentyfourToTwelve(hora)}
          </p>
          <Link href={`/${tipo === 'PROXIMO' ? 'seminariosInfo' : 'seminarios'}/${etiqueta}`} className='flex items-center justify-center w-full gap-3 py-3 mt-5 font-bold text-white border border-white rounded-md'>
            <FontAwesomeIcon icon={faEye} />
            {tipo === 'PROXIMO' ? 'Mas Información' : 'Ver Seminario'}
          </Link>
        </div>
      </div>
    </div>
  )
}
