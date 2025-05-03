'use client'

import WhatsAppIcon from '@/app/old-components/WhatsAppIcon'
import getRequest from '@/helpers/getRequest'
import { MostrarCards, Stripe } from '@/old-components/Servicios'
import { useEffect, useState } from 'react'
import { CertificiacionIso } from '..'
import InitialPopups from '../old-components/InitialPopups/InitialPopups'
import CarouselBannerWeb from './_sections/CarouselBannerWeb'
import OurBenefits from './_sections/OurBenefits'
import VideoBanner from './_sections/VideoBanner'

export default function Home() {
  const [popups, setPopups] = useState<any>()
  const [errPopup, setErrPopup] = useState<any>()

  useEffect(() => {
    getRequest('modal')
      .then((response) => {
        setPopups(response.res)
        setErrPopup(response.err)

        if (window.scrollY > 925) window.scrollTo(0, 925)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      {popups?.length > 0 && !errPopup && (
        <InitialPopups initialPopups={popups} />
      )}
      <WhatsAppIcon />
      <CarouselBannerWeb />
      <Stripe />
      <MostrarCards program='proximos inicios' programSelector />
      <OurBenefits />
      <VideoBanner />
      <CertificiacionIso />
    </>
  )
}
