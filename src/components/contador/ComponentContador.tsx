
export const ComponentContador = () => {
  return (
    <div className='flex items-center gap-4'>
      <div className='bg-rojo rounded-md text-white font-bold px-4 py-1'>
        <p className='text-3xl text-center'>0</p>
        <p className='text-xs text-center'>Dias</p>
      </div>
      <div className='bg-rojo rounded-md text-white font-bold px-4 py-1'>
        <p className='text-3xl text-center'>0</p>
        <p className='text-xs text-center'>Horas</p>
      </div>
      <div className='bg-rojo rounded-md text-white font-bold px-4 py-1'>
        <p className='text-3xl text-center'>0</p>
        <p className='text-xs text-center'>Minutos</p>
      </div>
      <div className='bg-rojo rounded-md text-white font-bold px-4 py-1'>
        <p className='text-3xl text-center'>0</p>
        <p className='text-xs text-center'>Segundos</p>
      </div>
    </div>
  )
}
