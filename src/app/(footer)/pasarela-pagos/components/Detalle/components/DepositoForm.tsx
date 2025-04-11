import cartItem from '@/interfaces/cartItem'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function DepositoForm ({ cart }:{cart:Array<cartItem>}) {
  const productsArr = cart.map((entry) => {
    return entry.titulo
  })
  const productsStr = productsArr.join(' | ')

  function WpButton () {
    return (
      <a
        className='bg-[#16c121] inline-flex px-[2rem] py-[.8rem] mob:px-[1rem] items-center rounded-[.5rem] gap-[1rem] text-white mob:gap-[.5rem]'
        href={`https://api.whatsapp.com/send?phone=51987756735&text=Hola quisiera comprar los programas:${productsStr}`}
        target='_blank' rel='noreferrer'
      >
        <FontAwesomeIcon icon={faWhatsapp} size='xl' />
        <span className='text-[#fff] mob:text-[.8rem] font-bold'>Ayuda con el pago por WhatsApp</span>
      </a>
    )
  }

  function BankCard ({ img, nacion = false }:{img:ReactNode, nacion?:boolean}) {
    return (
      <div className='flex w-[100%] justify between gap-[1rem] mb-[2rem]'>
        <div
          className='flex w-[62px] h-[62px] rounded-[100%] overflow-hidden justify-center items-center bg-[#002a8d]'
          style={nacion ? { backgroundColor: '#fff' } : {}}
        >
          {img}
        </div>
        <p className='flex flex-col flex-[1]'>
          <span className='text-[14px]'>Cuenta Corriente Soles</span>
          <span className='text-[18px] font-bold'>N° 00-015-013982</span>
        </p>
      </div>
    )
  }

  return (
    <div className='mt-[2.5rem] relative z-[999]'>
      <h3 className='text-[18px] font-medium mb-[1rem]'>
        Tarjeta de Crédito / Débito
      </h3>
      <p className='mb-[2rem] text-[14px]'>
        Puedes realizar depósitos a nuestras cuentas bancarias y enviarnos el
        voucher de deposito o el reporte de transferencia por whatsap 987756735
        o al correo asesoría@desarrolloglobal.pe
      </p>
      <h3 className='text-[18px] font-medium mb-[1.5rem]'>
        Titular: Centro de Capacitación y Desarrollo Global EIRL
      </h3>
      <div className='flex mob:flex-col justify-center'>
        <BankCard nacion img={<Image src='/img/icons/IconNacion.webp' alt='logo de banco de la nacion' width={55} height={55} className='w-[90%]' />} />
        <BankCard img={<Image src='/img/icons/IconBcp.webp' className='w-[90%]' alt='logo de banco de bcp' width={62} height={62} />} />
      </div>
      <span className='mb-[1rem] block'>Necesitas ayuda para realizar tu pago por transferencia</span>
      <WpButton />
    </div>
  )
}
