import { faCalendar, faClock, faEye, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const CardsSeminar = (props: { id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string }) => {
  const { video, titulo, fecha, hora, etiqueta } = props

  return (
    <div className='w-[302px] max-w-[302px] mx-auto h-[466px] flex flex-col rounded-[.3rem] overflow-hidden 370px:w-[100%]'>
      <picture>
        <img src={`https://i3.ytimg.com/vi/${video}/maxresdefault.jpg`} alt='banner de seminario' width='302' height='180' className='w-[302px] h-[180px]' />
      </picture>
      <div className='bg-[#000b4e] text-white p-5 flex-1 flex flex-col justify-between'>
        <div>
          <div className='flex items-center gap-3 font-bold'>
            <div className='border border-[#0c7aff] text-[#0c7aff] rounded-full px-5'>
              Podcast
            </div>
            <div className='flex items-center gap-2 px-5 text-white bg-black border border-black rounded-full'>
              <FontAwesomeIcon icon={faVideoCamera} />
              Podcast
            </div>
          </div>
          <p className='mt-5 font-bold text-white line-clamp-3'>{titulo}</p>
        </div>
        <div className='mt-5'>
          <p className='flex items-center gap-3 font-bold text-white'>
            <FontAwesomeIcon icon={faCalendar} /> Fecha: {fecha}
          </p>
          <p className='flex items-center gap-3 font-bold text-white'>
            <FontAwesomeIcon icon={faClock} />{hora}
          </p>
          <Link href={`/podcasts/${etiqueta}`} className='flex items-center justify-center w-full gap-3 py-3 mt-5 font-bold text-white border border-white rounded-md'>
            <FontAwesomeIcon icon={faEye} />
            Ver Podcast Realizado
          </Link>
        </div>
      </div>
    </div>
  )
}
