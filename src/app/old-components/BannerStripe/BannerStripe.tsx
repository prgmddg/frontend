import Link from 'next/link'

export default function BannerStripe () {
  return (
    <div className='bg-[#485aff]'>
      <Link href='/inhouse'>
        <span className='sr-only'>Banner In House</span>
        <picture>
          <img src='/web/banner-in-house.webp' alt='' width={0} height={0} className='w-full max-w-[1200px] mx-auto aspect-auto' loading='lazy' />
        </picture>
      </Link>
    </div>
  )
}
