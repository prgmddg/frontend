import { MyBlock } from '@/old-components/MyBlock/MyBlock'
import Image from 'next/image'
import React from 'react'

export const DondeEstamos = () => {
  let myBoxes:Array<number> = []

  for (let i = 1; i <= 10; i++) {
    myBoxes = [...myBoxes, i]
  }

  return (
    <MyBlock header={{ h: 'Donde estamos Ubicados' }}>
      <span className='font-bold'>Visítanos en nuestra sede lince</span>
      <p>
        <span className='font-bold'>Lunes a viernes:&nbsp;</span>
        9:00 am - 18:00 pm
      </p>
      <p>
        <span className='font-bold'>Sábados:&nbsp;</span>
        9:00 pm - 1:30 pm
      </p>
      <span className='text-myLightBlue my-[2rem] font-bold'>
        Av. Julio Cesar Tello 741 - Lince, Lima Perú
      </span>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] dondeEstamos:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[1rem] w-[100%]'>
        {myBoxes.map((num, pos) => (
          <Box key={pos} num={num} />
        ))}
      </div>
    </MyBlock>
  )
}

function Box ({ num }:{num:number}) {
  return (
    <Image src={`/img/Noso${num}.webp`} className='w-[100%]' alt='personas reunidas en clases' width={640} height={249} />
  )
}
