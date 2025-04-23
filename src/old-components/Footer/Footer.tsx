import Image from 'next/image'
import Link from 'next/link'
import { FooterBox } from './components/FooterBox'
import footerBoxers from './helpers/footerBoxers/footerBoxes'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-primaryDark py-[3rem]'>
      <div className='container text-[#fff] '>
        <article className='flex flex-wrap mb-[1.6rem]'>
          <section className='flex-1 p-[1rem] min-w-[197px]'>
            <Image
              src='/img/logo-nav-bar.webp'
              width={200}
              height={49.39}
              alt='logo de desarrollo global'
              className='mb-[1.5rem]'
            />
            <p className=''>
              Más de 13 años Capacitación para Funcionarios y Servidores
              Públicos ❤️️
            </p>

            <Link className='mt-[1.5rem] bg-white p-2.5 rounded-lg inline-block text-center text-black w-full' href={{ pathname: '/trabajos' }}>Trabaja con Nosotros</Link>
          </section>
          {footerBoxers.map((box, pos) => (
            <FooterBox key={pos} {...box} />
          ))}
        </article>
        <section className='relative block py-[1rem] my-padding'>
          <span className='h-[2px] block w-[100%] bg-[#fff] absolute top-0 left-0' />
          <p className='block text-center'>
            &copy; Todos los derechos reservados 2011 - {year} CENTRO DE
            CAPACITACIÓN Y DESARROLLO GLOBAL (DESARROLLO GLOBAL)
          </p>
        </section>
      </div>
    </footer>
  )
}
