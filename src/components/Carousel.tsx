'use client'

import { usePrevNextButtons } from '@/hooks/usePrevNextButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ReactNode } from 'react'
import Icon from './Icon'

export default function Carousel ({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true }, [Autoplay()])
  const { nextBtnDisabled, onNextButtonClick, onPrevButtonClick, prevBtnDisabled } = usePrevNextButtons(emblaApi!)

  return (
    <div className='relative'>
      <button className='absolute top-0 bottom-0 left-0 z-50 p-4' title='Card Anterior' disabled={prevBtnDisabled} onClick={onPrevButtonClick}>
        <Icon name='caret-left' className='w-10 h-10 text-gray-400' />
      </button>
      <button className='absolute top-0 bottom-0 right-0 z-50 p-4' title='Card Siguiente' disabled={nextBtnDisabled} onClick={onNextButtonClick}>
        <Icon name='caret-right' className='w-10 h-10 text-gray-400' />
      </button>
      <div className='w-full overflow-x-hidden' ref={emblaRef}>
        <div className='flex'>
          {children}
        </div>
      </div>
    </div>
  )
}