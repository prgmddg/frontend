import Image from 'next/image'
import Link from 'next/link'

export default function NotFound () {
  return (
    <section className='bg-red-500 h-[calc(100vh_-_66px)] pageNoFound'>
      <article className='container flex items-center justify-center h-full p-5'>
        <div>
          <Image src='/img/lapError.webp' width={474} height={298} alt='Desarrollo Global - Pagina no encontrada' className='mx-auto' />
          <h1 className='text-[#263160] text-3xl font-normal text-center'>¡Oops! Parece que te has perdido.</h1>
          <div className='mt-5 font-normal text-center'>
            <p>La página que buscas no está disponible en este momento. </p>
            <p>Puedes regresar a la página principal o usar el buscador para encontrar lo que necesitas.</p>
            <p>¡Estamos aquí para ayudarte!</p>
          </div>
          <Link href='/' className='flex items-center justify-center w-1/2 p-2 mx-auto mt-5 text-center text-white bg-blue-500 rounded-md'>PAGINA DE INICIO</Link>
        </div>
      </article>
    </section>
  )
}
