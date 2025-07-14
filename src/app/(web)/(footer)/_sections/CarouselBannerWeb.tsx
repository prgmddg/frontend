import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function CarouselBannerWeb () {
  return (
    <Carousel>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/b-carousel-1.webp' />
          <img src='/web/b-carousel-1.webp' className='w-full h-full max-h-[600px]' alt='Banner 1' loading='eager' />
        </picture>
      </div>
      <div className='flex-shrink-0 w-full'>
        <Link href='/cursos/contratacion-publicas-de-la-nueva-ley-general-32069'>
          <picture>
            <source media='(max-width: 1024px)' srcSet='/web/b-carousel-2.webp' />
            <img src='/web/b-carousel-2.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
          </picture>
        </Link>
      </div>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/b-carousel-3.webp' />
          <img src='/web/b-carousel-3.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
        </picture>
      </div>
      <div className='flex-shrink-0 w-full'>
        <picture>
          <source media='(max-width: 1024px)' srcSet='/web/b-carousel-4.webp' />
          <img src='/web/b-carousel-4.webp' className='w-full h-full max-h-[600px]' alt='Banner 2' loading='eager' />
        </picture>
      </div>
    </Carousel>
  )
}