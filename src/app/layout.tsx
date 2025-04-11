import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GlobalContext } from '@/context/GlobalContext'
import { TheMsg } from '.'
import getRequest from '@/helpers/getRequest'
import Script from 'next/script'
import { Metadata } from 'next'
import cursos from '@/interfaces/cursos'
import diplomas from '@/interfaces/diplomas'
import seminarios from '@/interfaces/seminarios'
import diplomados from '@/interfaces/diplomados'
import { Navbar } from '@/components/Navbar/Navbar'
import { Open_Sans } from 'next/font/google'
import { ProviderMyProgram } from './contextMyProgram'
const title = 'Desarrollo Global | Cursos y Diplomados en Gestión Pública en Línea'
const description = '¡Bienvenido a Desarrollo Global, tu fuente confiable para Cursos, Diplomas y Diplomados en Gestión Pública en línea! Explora nuestras opciones de capacitación en SIAF, SIGA, SEACE, Invierte.pe, Contrataciones del Estado, OSCE, y Obras Públicas. Potencia tu carrera en gestión pública de manera conveniente y efectiva.'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata:Metadata =
{
  title,
  description,
  openGraph:
  {
    title,
    description
  },
  alternates:
  {
    canonical: 'https://desarrolloglobal.pe/'
  }
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const { res: resC, err: errC } = await getRequest('cursos')
  const { res: resD, err: errD } = await getRequest('diplomas')
  const { res: resS, err: errS } = await getRequest('seminarios')
  const { res: resDi, err: errDi } = await getRequest('diplomados')

  const { envivo: cursos } = resC as {envivo:Array<cursos>}
  const { envivo: diplomas } = resD as {envivo:Array<diplomas>}
  const { proximos: seminarios } = resS as {proximos:Array<seminarios>}
  const { envivo: diplomados } = resDi as {envivo:Array<diplomados>}

  return (
    <html lang='es'>
      <head>
        <title>{title}</title>
        <Script src='//code.jivosite.com/widget/5kqbbZ9lmq' async />
        <Script src='https://api.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js' />
      </head>
      <GlobalContext
        cursos={errC ? [] : cursos}
        diplomas={errD ? [] : diplomas}
        seminarios={errS ? [] : seminarios}
        diplomados={errDi ? [] : diplomados}
      >
        <ProviderMyProgram>
          <body className={inter.className}>
            <TheMsg />
            <header className='z-[9999] relative bg-white my-shadow'>
              <Navbar />
            </header>
            {children}
          </body>
        </ProviderMyProgram>
      </GlobalContext>
      <GoogleAnalytics gaId='G-V810B1M8GG' />
    </html>
  )
}
