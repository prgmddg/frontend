'use client'

import { AcercaDeNosotros, BeneficiosDeLa, Cotizacion, InHouseBanner, InHouseCard, LastBlock, ListaDeProgramas, MyButtons } from '@/app/(web)/(footer)/inhouse'
import AsesoresInHouse from '@/app/(web)/(footer)/inhouse/components/AsesoresInHouse'
import { NavbarInHouse } from '@/app/(web)/(footer)/inhouse/components/InHouseBanner/components/NavbarInHouse'
import { InHouseContext } from '@/context/InHouseContext'
import { useInHouses } from '@/hooks/useInHouses'
import { MyBannerContainer } from '@/old-components/MyBannerContainer/MyBannerContainer'
import { MostrarCards } from '@/old-components/Servicios'

export default function ViewInHouses() {
  const { data: inHouses } = useInHouses()
  if (!inHouses) return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold'>Cargando...</h1>
    </div>
  )
  
  return (
    <InHouseContext inHouse={inHouses}>
      <MyBannerContainer styles='bg-gradient-to-r from-[#000482] via-[#3e0953] to-[#ae050b]'>
        <NavbarInHouse />
        <InHouseBanner />
      </MyBannerContainer>
      <MostrarCards
        program='inHouse'
        header={{
          h2: 'Elige el programa de tu interes',
          p: 'Tenemos mas de 100 programas disponibles para ser dictados en tu Entidad / Empresa'
        }}
        footer={<MyButtons />}
      >
        {
          inHouses.map((item: any) =>
            (
              <InHouseCard key={item.id} {...item} />
            ))
        }
      </MostrarCards>
      <ListaDeProgramas />
      <AcercaDeNosotros />
      <BeneficiosDeLa />
      <AsesoresInHouse />
      <LastBlock />
      <Cotizacion />
    </InHouseContext>
  )
}