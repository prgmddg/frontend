import React from 'react'
import { PoliticaBlock } from '@/app/(footer)/politicas-de-privacidad'
import { Metadata } from 'next'
export const metadata:Metadata =
{
  robots:
  {
    nocache: true
  }
}

export default function page () {
  return (
    <PoliticaBlock title='POLÍTICA DE LA CALIDAD'>
      <h3>DESARROLLO GLOBAL</h3>
      <p>
      Brindar programas de capacitación en gestión pública y empresarial, con el compromiso de cumplir con los requisitos aplicables, mejorar continuamente la eficacia del sistema y lograr la satisfacción de nuestros clientes.
      </p>
      <p>Nuestros compromisos son:</p>
      <ul>
        <li>Lograr la satisfacción de nuestros clientes.</li>
        <li>
          Mejorar el desempeño de nuestro sistema de gestión de la calidad.
        </li>
      </ul>
    </PoliticaBlock>
  )
}
