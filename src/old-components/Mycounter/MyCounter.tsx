'use client'

import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import renderCount from './util/renderCount'

export default function MyCounter ({ fecha, hora = false, type = '1' }:any) {
  const [targetDate, setTargetDate] = useState<number>(0)
  const [nowToday, setNowToDay] = useState<number>(0)
  const [restTime, setRestTime] = useState<number>(0)

  const MyFecha = hora ? `${fecha} ${hora}` : fecha

  useEffect(() => {
    setTargetDate(new Date(MyFecha).getTime())
    setNowToDay(new Date().getTime())
    setRestTime(targetDate - nowToday)
  }, [MyFecha, nowToday, targetDate])

  function switching (type:string) {
    if (type === '1') return renderCount
    if (type === '2') return renderCount2
  }

  return (
    <>
      {fecha && (restTime > 0) && (
        <Countdown
          date={Date.now() + restTime}
          renderer={switching(type)}
        />
      )}
      {
        (restTime <= 0) &&
        <>
          {
            type === '1' && <DummyAssCounter />
          }
          {
            type === '2' && <Counter2 />
          }
        </>
      }
    </>
  )
}

function DummyAssCounter () {
  return (
    renderCount({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  )
}

function Counter2 () {
  return (
    renderCount2({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  )
}

function renderCount2 (props:any) {
  const { days, hours, minutes, seconds } = props

  return (
    <ul className='flex items-center bg-red-600'>
      <Box label='Días' time={days} />
      <Dots />
      <Box label='Horas' time={hours} />
      <Dots />
      <Box label='Minutos' time={minutes} />
      <Dots />
      <Box label='Segundos' time={seconds} />
    </ul>
  )
}

function Box ({ time, label }:any) {
  return (
    <li className='flex flex-col justify-center items-center w-[80px]'>
      <p className='w-[3rem] h-[3rem] bg-[#fff] text-[#000] flex justify-center items-center font-bold text-[1.3rem] rounded-[.4rem]'>{time}</p>
      <p className='text-[#fff] text-center font-medium'>{label}</p>
    </li>
  )
}

function Dots () {
  return (
    <div className='flex flex-col justify-center h-[100%]'>
      <div className='flex flex-col gap-[1rem] justify-center'>
        <p className='w-[.3rem] h-[.3rem] bg-[#fff]' />
        <p className='w-[.3rem] h-[.3rem] bg-[#fff]' />
      </div>
    </div>
  )
}
