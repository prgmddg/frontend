import footerBox from '../../interfaces/footerBox'
import Link from 'next/link'
import Image from 'next/image'
import IconComplaintsBook from '@/components/IconComplaintsBook'
import { FooterList } from './components/FooterList'

const footerBoxers: Array<footerBox> = [
  {
    header: 'Certificado',
    content: (
      <>
        <p className='mb-[1rem]'>
          Verifica la validez de tu certificado a traves de este botón.
        </p>
        <Link
          className='rounded-lg bg-white inline-block text-center p-2.5 text-black w-full'
          href={{ pathname: '/buscar_certificado' }}
        >
          Verificación de Certificado
        </Link>
      </>
    )
  },
  {
    header: 'Ayuda',
    content: (
      <>
        <FooterList />
        <li className='list-none mt-4'>
          <Link href='/libro-de-reclamaciones' rel='noreferrer'>
            <IconComplaintsBook />
          </Link>
        </li>
              
      </>
    )
  },
  {
    header: 'ISO 9001:2015',
    content:
  <>
    <p>
      COD N°. CO18.00048/U
    </p>
    <Image src='/ISO-2025-BLANCO.webp' className='w-full aspect-auto h-auto' width={0} height={0} alt='certifacion iso 9001' />
  </>
  },
  {
    header: 'Contáctanos',
    content: (
      <FooterList
        list={[
          'Visítanos:',
          'Av. Julio Cesar Tello 741 - Lince',
          'Fijo: (01) 555 6005',
          'info@desarrolloglobal.pe'
        ]}
      />
    )
  }
]

export default footerBoxers
