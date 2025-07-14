import Carousel from '@/components/Carousel'
import Icon from '@/components/Icon'

export default function CarouselBannerWeb () {
  return (
    <Carousel>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/banner-carousel-1-mob.webp' />
          <img src='/web/b-carousel-1.webp' className='w-full h-full max-h-[600px]' alt='Banner 1' loading='eager' />
        </picture>
      </div>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/banner-carousel-2-mob.webp' />
          <img src='/web/b-carousel-2.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
        </picture>
      </div>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/banner-carousel-1-mob.webp' />
          <img src='/web/b-carousel-3.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
        </picture>
      </div>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/banner-carousel-2-mob.webp' />
          <img src='/web/b-carousel-4.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
        </picture>
      </div>
    </Carousel>
  )
}