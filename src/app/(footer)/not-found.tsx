import Image from 'next/image'
import Link from 'next/link'

export default function NotFound () {
  return (
    <section className='bg-red-500 h-[calc(100vh_-_66px)] pageNoFound'>
      <article className='container flex justify-center items-center h-full p-5'>
        <div>
          <Image src='/img/lapError.webp' width={474} height={298} alt='Desarrollo Global - Pagina no encontrada' className='mx-auto' />
          <h1 className='text-[#263160] text-3xl font-normal text-center'>¡Oops! Parece que te has perdido.</h1>
          <div className='text-center mt-5 font-normal'>
            <p>La página que buscas no está disponible en este momento. </p>
            <p>Puedes regresar a la página principal o usar el buscador para encontrar lo que necesitas.</p>
            <p>¡Estamos aquí para ayudarte!</p>
          </div>
          <Link href='/' className='bg-blue-500 text-white p-2 rounded-md mx-auto text-center w-1/2 flex items-center justify-center mt-5'>PAGINA DE INICIO</Link>
        </div>
      </article>
    </section>
  )
}
