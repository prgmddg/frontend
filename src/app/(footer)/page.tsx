'use client'

import { MostrarCards, Stripe } from '@/old-components/Servicios'
import { Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion, CertificiacionIso } from '..'
import WhatsAppIcon from '@/app/old-components/WhatsAppIcon'
import { useEffect, useState } from 'react'
import getRequest from '@/helpers/getRequest'
import InitialPopups from '../old-components/InitialPopups/InitialPopups'

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
      <Carosuel />
      <Stripe />
      <MostrarCards program='proximos inicios' programSelector />
      <BeneficiosDeNuestrosProgramas />
      <CentroDeCapacitacion />
      <CertificiacionIso />
    </>
  )
}
