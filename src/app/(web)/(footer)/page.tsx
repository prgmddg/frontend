'use client'

import InitialPopups from '@/app/old-components/InitialPopups/InitialPopups'
import WhatsAppIcon from '@/app/old-components/WhatsAppIcon'
import getRequest from '@/helpers/getRequest'
import { MostrarCards, Stripe } from '@/old-components/Servicios'
import { useEffect, useState } from 'react'
import CarouselBannerWeb from './_sections/CarouselBannerWeb'
import CompaniesTrusted from './_sections/CompaniesTrusted'
import ContactUs from './_sections/ContactUs'
import OurBenefits from './_sections/OurBenefits'
import VideoBanner from './_sections/VideoBanner'
import BannerWhatsapp from '@/components/BannerWhatsapp'

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
      <BannerWhatsapp />
      <CarouselBannerWeb />
      <Stripe />
      <MostrarCards program='proximos inicios' programSelector />
      <OurBenefits />
      <VideoBanner />
      <CompaniesTrusted />
      <ContactUs />
    </>
  )
}
