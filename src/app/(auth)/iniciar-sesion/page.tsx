export default function SignInPage () {
  return (
    <main className='grid w-full h-screen grid-cols-1 lg:grid-cols-2'>
      <section className='relative bg-blue-900'>
       
      </section>
      <section>
        <div>
          <form>
            <div>
              <label className='text-sm font-medium'>Correo:</label>
              <input type='email' id='email' className='border border-gray-300 focus:outline-blue-800 text-sm rounded-lg block w-full p-2.5' placeholder='example@example.com' />
            </div>
            <div>
              <label className='text-sm font-medium'>Contraseña:</label>
              <input type='password' id='password' className='border border-gray-300 focus:outline-blue-800 text-sm rounded-lg block w-full p-2.5' placeholder='*********' />
            </div>
            <button className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>Iniciar Sesión</button>
          </form>
        </div>
      </section>
    </main>
  )
}