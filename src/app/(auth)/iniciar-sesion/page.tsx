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
              <input type='text' id='first_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='exampl@gmail.com' required />
            </div>
            <button className='py-2.5 px-5 w-full font-medium text-sm rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-all'>Iniciar Sesión</button>
          </form>
        </div>
      </section>
    </main>
  )
}