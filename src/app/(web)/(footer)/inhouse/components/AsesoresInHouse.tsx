import { MyBlock } from '@/old-components/MyBlock/MyBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

export default function AsesoresInHouse() {
  return (
    <MyBlock header={{ h: '¿Deseas una cotizacion In House?' }}>
      <div className='grid gap-8'>
        <h2 className='text-2xl text-[#0E2FAA]'>Te Llamamos</h2>
        <div className='grid grid-cols-1'>
          <div className='bg-white w-[380px] rounded-md p-3 lg:p-5 mt-5 flex justify-between items-center'>
            <Image
              src='https://desarrollo-global.s3.amazonaws.com/images/users/milagros_mejia.webp'
              alt='imagen de asesor'
              width={120}
              height={120}
              className='h-[120px] w-[120px] rounded-[100%] border-[5px] border-[#00c9a2]'
            />
            <div>
              <p className='text-center font-bold bg-[#003399] rounded-full text-white'>Milagros Mejia</p>
              <p className='text-center font-bold mt-2'>Asesora Académica</p>

              <a
                rel='noopener noreferrer'
                target='_blank'
                className='flex w-[202px] mx-auto items-center h-[40px] mt-1 text-green-500 text-2xl gap-3'
                href={'https://api.whatsapp.com/send?phone=51949642410&text=Solicito información del programa InHouse'}
              >
                <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
                <p className='font-bold'>949 642 410</p>
              </a>

            </div>
          </div>
        </div>
      </div>
    </MyBlock>
  )
}