import { GlobalContext } from '@/context/GlobalContext'
import getRequest from '@/helpers/getRequest'
import cursos from '@/interfaces/cursos'
import diplomados from '@/interfaces/diplomados'
import diplomas from '@/interfaces/diplomas'
import seminarios from '@/interfaces/seminarios'
import { Navbar } from '@/old-components/Navbar/Navbar'
import Script from 'next/script'
import { ReactNode } from 'react'
import BannerStripe from '../old-components/BannerStripe/BannerStripe'
import { TheMsg } from '../old-components/TheMsg/TheMsg'
import { ProviderMyProgram } from './contextMyProgram'

export default async function WebLayout({ children }: { children: ReactNode }) {
  const { res: resC, err: errC } = await getRequest('cursos')
  const { res: resD, err: errD } = await getRequest('diplomas')
  const { res: resS, err: errS } = await getRequest('seminarios')
  const { res: resDi, err: errDi } = await getRequest('diplomados')

  const { envivo: cursos } = resC as {envivo:Array<cursos>}
  const { envivo: diplomas } = resD as {envivo:Array<diplomas>}
  const { proximos: seminarios } = resS as {proximos:Array<seminarios>}
  const { envivo: diplomados } = resDi as {envivo:Array<diplomados>}
  
  return (
    <GlobalContext
      cursos={errC ? [] : cursos}
      diplomas={errD ? [] : diplomas}
      seminarios={errS ? [] : seminarios}
      diplomados={errDi ? [] : diplomados}
    >
      <Script src='//code.jivosite.com/widget/5kqbbZ9lmq' async />
      <ProviderMyProgram>
        <TheMsg />
        <header className='relative bg-white my-shadow'>
          <BannerStripe />
          <Navbar />
        </header>
        {children}
      </ProviderMyProgram>
    </GlobalContext>
  )
}