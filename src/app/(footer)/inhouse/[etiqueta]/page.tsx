import getRequest from '@/helpers/getRequest'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FormInHouse } from './components/FormInHouse'
import { notFound } from 'next/navigation'

export default async function InoHouseEtiqueta ({ params }: any) {
  const { etiqueta } = await params
  const { res: inhouse } = await getRequest('inhouse', etiqueta)

  if (inhouse === 'ERROR 02: $Id de Curso InHouse no existe') return notFound()

  return (
    <section className='bg-myBlue2'>
      <article className='container grid items-center grid-cols-1 gap-5 p-5 md:grid-cols-2'>
        <div className='py-20'>
          <span className='bg-myYellow mb-[23px] inline-block 900px:justify-start 900px:px-[22px] 900px:mb-[26px] 900px:w-[100%] 900px:text-[18px] 900px:max-w-[375px] text-white px-[22px] pt-[9px] pb-[5px] rounded-[.4rem] text-[22px] font-bold mob:text-[18px] mob:px-[10px]'>Programas INHOUSE</span>
          <h1 className='text-white font-bold text-5xl leading-[55px] 900px:text-[32px] 900px:leading-[32px] 900px:mb-[22px] mb-[29px]'>{inhouse.titulo}</h1>
          <p className='text-white text-[18px] leading-[30px] 900px:hidden mb-[34px] block'>{inhouse.descripcion}</p>
          <p className='text-lg font-bold text-white'>Mas informacion contactate con nuestros asesores:</p>
          <div className='grid grid-cols-2'>
            {
              inhouse.asesores.map((ase: any) => (
                <div key={ase.id} className='bg-white w-[380px] rounded-md p-3 lg:p-5 mt-5 flex justify-between items-center'>
                  <Image
                    src={ase.avatar}
                    alt='imagen de asesor'
                    width={120}
                    height={120}
                    className='h-[120px] w-[120px] rounded-[100%] border-[5px] border-[#00c9a2]'
                  />
                  <div>
                    <p className='text-center font-bold bg-[#003399] rounded-full text-white'>{ase.nombre}</p>
                    <p className='mt-2 font-bold text-center'>{ase.nombre.toLowerCase() === 'joan' ? 'Asesor' : 'Asesora'} Académica</p>

                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      className='flex w-[202px] mx-auto items-center h-[40px] mt-1 text-green-500 text-2xl gap-3'
                      href={`https://api.whatsapp.com/send?phone=51${ase.telefono}&text=Solicito información del programa InHouse ${inhouse.titulo}`}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
                      <p className='font-bold'>{ase.telefono}</p>
                    </a>

                  </div>
                </div>

              ))
            }
          </div>
        </div>
        <div>
          <FormInHouse id={inhouse.id} titulo={inhouse.titulo} imagen={inhouse.imagen} />
        </div>
      </article>
    </section>
  )
}
