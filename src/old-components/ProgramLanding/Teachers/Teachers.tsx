'use client'

import React, { useContext } from 'react'
import Block from '../Components/Block'
import Slider from 'react-slick'
import sliderOptions from '@/helpers/sliderOptions'
import { CustomArrow } from '@/old-components/CustomArrow/CustomArrow'
import { programContext } from '@/context/ProgramContext'
import programData from '@/types/programData'
import Card from './Card/Card'

export function Teachers () {
  const context = useContext(programContext)

  if (context === undefined) return (<></>)

  const { program } = context.values
  const { profesores } = program as programData

  return (
    <Block
      title='Profesores'
      id='Profesores'
      subtitle='Profesionales con amplia experiencia en la Gestión Pública'
      className='pb-10'
    >
      <Slider
        {...sliderOptions}
        infinite={false}
        prevArrow={<CustomArrow direction='left' />}
        nextArrow={<CustomArrow direction='rite' />}
        slidesToShow={profesores?.length < 3 ? profesores.length : 3}
        slidesToScroll={profesores?.length < 3 ? profesores.length : 3}
        responsive={[
          {
            breakpoint: 900,
            settings: {
              slidesToShow: profesores?.length < 2 ? 1 : 2,
              slidesToScroll: profesores?.length < 2 ? 1 : 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {profesores?.map((profesor, pos) => (
          <Card key={pos} {...profesor} />
        ))}
      </Slider>
    </Block>
  )
}
