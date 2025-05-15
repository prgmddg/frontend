import { AuthProvider } from '@/context/AuthContext'
import { ReactQueryProvider } from '@/context/ReactQueryContext'
import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'
const title = 'Desarrollo Global | Cursos y Diplomados en Gestión Pública en Línea'
const description = '¡Bienvenido a Desarrollo Global, tu fuente confiable para Cursos, Diplomas y Diplomados en Gestión Pública en línea! Explora nuestras opciones de capacitación en SIAF, SIGA, SEACE, Invierte.pe, Contrataciones del Estado, OSCE, y Obras Públicas. Potencia tu carrera en gestión pública de manera conveniente y efectiva.'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata:Metadata =
{
  title,
  description,
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/web/icon/light.ico',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/web/icon/dark.ico',
      media: '(prefers-color-scheme: dark)'
    }
  ],
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
  return (
    <html lang='es'>
      <head>
        <Script src='https://api.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js' /> 
      </head>
      <ReactQueryProvider>
        <AuthProvider>
          <body className={inter.className}>
            {children}
          </body>
        </AuthProvider>
      </ReactQueryProvider>
      <GoogleAnalytics gaId='G-V810B1M8GG' />
    </html>
  )
}
