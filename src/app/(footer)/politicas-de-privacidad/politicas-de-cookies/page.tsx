import React from 'react'
import { PoliticaBlock } from '@/app/(footer)/politicas-de-privacidad'
import { Metadata } from 'next'
export const metadata: Metadata =
{
  robots:
  {
    nocache: true
  }
}

export default function page () {
  return (
    <PoliticaBlock title='POLÍTICAS DE COOKIES'>
      <div className='space-y-3'>
        <p>Última actualización: 18 de Noviembre de 2020</p>
        <p>
          Bienvenido/a a las políticas de cookies de CENTRO DE CAPACITACION Y DESARROLLO GLOBAL, EIRL. A continuación, te explicamos cómo utilizamos cookies y tecnologías similares en nuestro sitio web para proporcionar un servicio de calidad y mejorar tu experiencia como usuario.
        </p>
        <h3>¿Qué son las cookies?</h3>
        <p>
          Las cookies son pequeños archivos de texto que contienen información y se descargan en tu dispositivo cuando visitas nuestro sitio web. Estos archivos permiten que la página web te reconozca, facilitando la navegación, recordando preferencias y mejorando tu experiencia general.
          Es importante destacar que las cookies no almacenan información sensible como tarjetas de crédito, datos bancarios o información personal.
          La legislación vigente nos permite almacenar cookies estrictamente necesarias para el funcionamiento del sitio. Para otros tipos de cookies, necesitamos tu permiso.
        </p>
        <h3>Tipos de cookies que utilizamos:</h3>
        <h3>Cookies Técnicas o Necesarias:</h3>
        <p>
          Activan funciones básicas para la navegación y el acceso a áreas seguras del sitio. Sin estas cookies, el sitio no funcionaría correctamente.
        </p>
        <h3>Cookies Estadísticas o de Análisis:</h3>
        <p>
          Ayudan a comprender cómo interactúas con nuestro sitio de manera anónima, proporcionando información sobre la navegación.
        </p>
        <h3>Cookies de Preferencias o Personalización:</h3>
        <p>Permiten recordar información que cambia la forma en que se muestra el sitio, como el idioma preferido o la región.</p>
        <h3>Cookies de Marketing o Publicidad:</h3>
        <p>
          Se utilizan para mostrar anuncios relevantes y atractivos para ti, haciendo que la experiencia sea más valiosa.
        </p>

        <h3>Cookies No Clasificadas:</h3>
        <p>
          Aquellas en proceso de clasificación junto con proveedores individuales.
        </p>
        <h3>Duración de las cookies:</h3>
        <h3>Cookies de Sesión:</h3>
        <p>
          Guardan información durante tu visita.
        </p>

        <h3>Cookies Persistentes:</h3>
        <p>
          Retienen información de usuarios que acceden repetidamente, recordando preferencias.

        </p>
        <h3>Gestión de cookies:</h3>
        <p>
          En tu primer acceso, puedes aceptar o rechazar las cookies. Posteriormente, puedes cambiar o retirar tu consentimiento en cualquier momento siguiendo las indicaciones proporcionadas en esta Política de Cookies o configurando tu navegador.
        </p>
        <h3>Desactivación o eliminación de cookies:</h3>
        <p>
          Te proporcionamos enlaces para eliminar cookies en navegadores populares:
        </p>
        <ul>
          <li><a className='text-myBlue' href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'>Mozilla Firefox</a></li>
          <li><a className='text-myBlue' href='https://support.google.com/chrome/answer/95647'>Google Chrome</a></li>
          <li><a className='text-myBlue' href='https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'>Microsoft Edge</a></li>
          <li><a className='text-myBlue' href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'>Safari</a></li>
        </ul>
        <h3>Consecuencias de desactivar cookies:</h3>
        <p>
          Si desactivas algunas cookies, el sitio puede no funcionar correctamente, y no podremos adaptar contenidos o apariencia según tus preferencias. Además, la publicidad personalizada y la interacción con redes sociales podrían verse afectadas.
        </p>
        <h3>Protección de datos personales:</h3>
        <p>Las cookies recopilan información sobre ti, tus preferencias o tu dispositivo, permitiendo que el sitio funcione correctamente. Generalmente, no permiten tu identificación directa. Obtén más información sobre cómo tratamos tus datos en nuestra Política de Protección de Datos Personales.</p>
        <h3>Modificaciones de la Política de Cookies:</h3>
        <p>Nos reservamos el derecho de modificar esta Política de Cookies, cumpliendo con la legislación española vigente y comunicándolo previamente a través de esta página o cualquier medio considerado oportuno.</p>
        <span>Si tienes dudas, contáctanos en info@desarrolloglobal.pe.</span>
      </div>
    </PoliticaBlock>
  )
}
