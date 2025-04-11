'use client'

import {MostrarCards, Stripe} from '@/components/Servicios'
import {Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion, CertificiacionIso} from '..'
import BannerStripe from '../components/BannerStripe/BannerStripe'
import WhatsAppIcon from '@/app/components/WhatsAppIcon'
import {useEffect, useState} from 'react'
import {MyPopUp} from '@/components/MyPopUp/MyPopUp'
import dynamic from 'next/dynamic'
import {WheelData} from '@/components/Wheel/src/components/Wheel/types'
import confetti from 'canvas-confetti'

const Wheel = dynamic(() => import('@/components/Wheel/src').then((mod) => mod.Wheel), {ssr: false})

export default function Home() {
  const data: WheelData[] = [
    {option: 'descuento de s/.20', image: { offsetY: 100, uri: '/DESCUENTO.webp', sizeMultiplier: 1.45 }, style: { backgroundColor: '#be123c', fontSize: 15, textColor: 'black' }},
    {option: 'envio gratis', image: { offsetY: 100, uri: '/ENVIO_GRATIS.webp', sizeMultiplier: 1.4 }, style: { backgroundColor: '#003399', fontSize: 15, textColor: '#f2f2f2' }},
    {option: 'cuotas sin intereses en diplomas', image: { offsetY: 160, uri: '/SIN_INTERESES.webp', sizeMultiplier: 1.6 }, style: { backgroundColor: '#7e22ce', fontSize: 15, textColor: 'black' }},
    {option: 'PIÑA', image: { offsetY: 100, uri: '/BUEN_INTENTO.webp', sizeMultiplier: 1.6 }, style: { backgroundColor: '#f2f2f2', fontSize: 70, textColor: 'black' }},
    {option: '1 sesión gratis', image: { offsetY: 100, uri: '/SESION_GRATIS.webp', sizeMultiplier: 1.8 }, style: { backgroundColor: '#15803d', fontSize: 70, textColor: 'black' }},
  ]

  const [s, setS] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [terminate, setTerminate] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('https://back.desarrolloglobal.pe/lotteries/verify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error('Error al obtener los datos')
        return resp.json()
      })
      .then(() => {
        setS(true)
      })
      .catch(() => {
        setS(false)
        setMustSpin(false)
      })
  }, [data.length])

  return (
    <>
      {
        s && (
          <MyPopUp
            popUp={
              <div className='flex flex-col gap-4 items-center justify-end h-[500px] sm:h-[650px] md:h-[700px]'>
                <p className='font-bold text-3xl text-white'>✨ Juega y Gana ✨</p>
                {
                  data.length > 0 && (
                    <Wheel
                      textDistance={60}
                      perpendicularText={true}
                      innerBorderColor={'white'}
                      outerBorderColor={'white'}
                      innerBorderWidth={0}
                      outerBorderWidth={1}
                      radiusLineWidth={1}
                      radiusLineColor={'white'}
                      mustStartSpinning={mustSpin}
                      prizeNumber={prizeNumber}
                      data={data}
                      fontFamily={'Arial'}
                      onStopSpinning={() => {
                        setMustSpin(false)
                        setMessage(prizeNumber === 3 ? 'Volver a Intentar 😊' : '¡Felicidades! 🎉 Reclama tu premio aquí')
                        setTerminate(true)
                        if (prizeNumber !== 3) {
                          confetti({
                            zIndex: 9999999999,
                            particleCount: 300,
                            spread: 100,
                            scalar: 1.5,
                            origin: { y: 0.6 }
                          })
                        }
                      }}
                    />
                  )
                }
                {
                  message.length === 0 && (
                    <button onClick={() => {
                      setPrizeNumber(Math.floor(Math.random() * data.length))
                      setMustSpin(true)
                    }} className='bg-[#003399] w-full text-center text-white font-semibold rounded-3xl p-3 text-xl'>Probar mi Suerte 🥳</button>
                  )
                }
                {
                  terminate && (
                    message.includes('Volver') ? (
                      <button onClick={() => {
                        setPrizeNumber(Math.floor(Math.random() * data.length))
                        setMustSpin(true)
                      }} className='bg-[#003399] w-full text-center text-white font-semibold rounded-3xl p-3 text-xl'>{message}</button>
                    ) : (
                      <a onClick={() => {
                        fetch('https://back.desarrolloglobal.pe/lotteries/register', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                        })
                          .then((resp) => {
                            if (!resp.ok) throw new Error('Error al obtener los datos')
                            return resp.json()
                          })
                          .finally(() => setVisible(false))
                      }} target='_blank' href={`https://wa.me/51980407786?text=Hola,%20acabo%20de%20ganar%20este%20premio:%0A.%20*${data[prizeNumber].option?.toUpperCase()}*%0Ami%20correo%20es:`} className='bg-[#003399] w-full text-center text-white font-semibold rounded-3xl p-3 text-xl'>{message}</a>
                    )
                  )
                }
              </div>
            }
            isOpen={visible}
            setIsOpen={setVisible}
            classNameButtonClose='absolute top-0 px-2 py-1 border border-white text-white right-0 rounded-full'
            classNameIcon='w-4 h-4'
          />
        )
      }
      <WhatsAppIcon/>
      <BannerStripe/>
      <Carosuel/>
      <Stripe/>
      <MostrarCards program='proximos inicios' programSelector/>
      <BeneficiosDeNuestrosProgramas/>
      <CentroDeCapacitacion/>
      <CertificiacionIso/>
    </>
  )
}
