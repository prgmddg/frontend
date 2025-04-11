import { MyBannerContainer } from '@/old-components/MyBannerContainer/MyBannerContainer'
import { MostrarCards } from '@/old-components/Servicios'
import { InHouseContext } from '@/context/InHouseContext'
import getRequest from '@/helpers/getRequest'
import inHouse from '@/interfaces/inHouse'
import { AcercaDeNosotros, BeneficiosDeLa, Cotizacion, InHouseBanner, InHouseCard, ListaDeProgramas, MyButtons } from '.'
import AsesoresInHouse from './components/AsesoresInHouse'
import { NavbarInHouse } from './components/InHouseBanner/components/NavbarInHouse'
import { LastBlock } from './components/LastBlock/LastBlock'

export default async function page () {
  const { res: inHouses } = await getRequest('inhouse')
  const myInHouses = inHouses as Array<inHouse>

  return (
    <InHouseContext inHouse={myInHouses}>
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
          myInHouses.map((item: any) =>
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
