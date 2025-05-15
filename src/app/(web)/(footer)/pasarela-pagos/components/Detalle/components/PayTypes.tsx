import Image from 'next/image'
import React from 'react'

export default function PayTypes ({ setPayType, payType }:any) {
  const title = payType === 'card' ? 'Pago con Tarjeta Crédito/Débito' : 'Transferencia Bancaria'

  return (
    <>
      <h3 className='font-bold 1000px:text-[1.3rem] text-[1.8rem] 1000px:text-center'>
        {
          title
        }
      </h3>
      <div className='flex gap-[1rem] mt-[1rem] mob:justify-center'>
        <button
          onClick={() => setPayType('card')}
          style={payType === 'card' ? { border: '2px solid #3F8DFD', borderRadius: '.4rem' } : { border: '2px solid transparent' }}
        >
          <Image alt='icono de tarjeta' src='https://nuevapagina.s3.amazonaws.com/iconTarjeta.webp' width={81} height={53} />
        </button>
        <button
          onClick={() => setPayType('deposito')}
          style={payType === 'deposito' ? { border: '2px solid #3F8DFD', borderRadius: '.4rem' } : { border: '2px solid transparent' }}
        >
          <Image src='https://nuevapagina.s3.amazonaws.com/iconBanco.webp' alt='icono de universidad' width={81} height={53} />
        </button>
      </div>
    </>
  )
}
