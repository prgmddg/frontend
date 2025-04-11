
import { FormError } from '@/old-components/NoFound/FormError'
import { InformacionError } from '@/old-components/NoFound/InformacionError'

export default function NotFound () {
  return (
    <section className='bg-[#2a50e8]'>
      <article className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <InformacionError />
          <FormError />
        </div>
      </article>
    </section>
  )
}
