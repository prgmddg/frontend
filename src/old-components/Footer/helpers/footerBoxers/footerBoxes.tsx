import IconComplaintsBook from '@/old-components/IconComplaintsBook'
import Image from 'next/image'
import Link from 'next/link'
import footerBox from '../../interfaces/footerBox'
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
        <li className='mt-4 list-none'>
          <Link href='/libro-de-reclamaciones' rel='noreferrer' aria-label='Libro de reclamaciones' title='Libro de reclamaciones'>
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
    <Image src='/ISO-2025-BLANCO.webp' className='w-full h-auto aspect-auto' width={0} height={0} alt='certifacion iso 9001' />
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
