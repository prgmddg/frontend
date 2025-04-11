import React from 'react'
import { PoliticaBlock } from './components/PoliticaBlock/PoliticaBlock'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata =
{
  robots:
  {
    nocache: true
  }
}

export default function page () {
  return (
    <PoliticaBlock title='Política de Protección de Datos Personales de Desarrollo Global '>
      <p>Última actualización: Enero del 2023 </p>
      <div className='space-y-3'>
        <h3>1. Introducción</h3>
        <p>
          Esta política tiene como objetivo proporcionar a los usuarios del Centro de Capacitación y Desarrollo Global EIRL, información clara y detallada sobre el tratamiento de datos personales en nuestras plataformas web. Reflejamos nuestro compromiso con la transparencia y la privacidad, asegurando que la información personal obtenida se utilice con responsabilidad. Nos comprometemos a no compartir ni utilizar su información con terceros, salvo lo especificado en esta política de protección de datos.
        </p>
        <h3>
          2. Recolección y Uso de Información Personal
        </h3>
        <p>
          Durante el uso de nuestro servicio, podemos solicitarle cierta información personal identificable, como su nombre, número de teléfono, dirección postal, etc. Esta información se utiliza para mejorar y proporcionar el servicio, y su uso está sujeto a los términos y condiciones disponibles en <Link className='text-mybluDesarrollo' href='/politicas-de-privacidad'>https://www.desarrolloglobal.pe/terminos.</Link>
        </p>
        <h3>3. Datos del Registro </h3>
        <p>
          Recopilamos información del navegador, como la dirección IP, tipo y versión del navegador, páginas visitadas, fecha y hora de la visita, y otras estadísticas. Estos datos de registro se utilizan para analizar el uso del servicio y mejorar su funcionamiento.
        </p>
        <h3>
          4. Cookies
        </h3>
        <p>
          Consulte nuestra Política de Cookies haciendo clic <Link className='text-mybluDesarrollo' href='/politicas-de-privacidad/politicas-de-cookies'>Aqui</Link>.
        </p>
        <h3>5. Proveedores de Servicios </h3>
        <p>
          Colaboramos con terceras empresas (GetResponse, pepocampaigns, AWS SES, Google Drive y Zendesk) para facilitar y mejorar nuestros servicios. Estos proveedores tienen acceso a su información personal solo para realizar tareas específicas en nuestro nombre y están obligados a no divulgarla ni utilizarla para otros fines.
        </p>

        <h3>
          6. Seguridad
        </h3>
        <p>
          La seguridad de su información personal es una prioridad para nosotros. Aunque implementamos medidas de seguridad comercialmente aceptables, no podemos garantizar la seguridad absoluta en la transmisión por Internet o el almacenamiento electrónico.
        </p>

        <h3>
          7. Finalidad de sus Datos Personales en Desarrollo Global
        </h3>
        <p>
          Recopilamos datos personales con diversas finalidades, como mantener relaciones comerciales, gestionar contratos laborales, cumplir obligaciones laborales y contractuales, garantizar la seguridad de las instalaciones, gestionar reclamos y quejas, y promocionar nuestros servicios, entre otros.
        </p>
        <h3>
          8. Flujo Transfronterizo
        </h3>
        <p>
          Realizamos transferencias internacionales de datos a un centro de datos en Estados Unidos con altos estándares de seguridad informática. Esta transferencia es esencial para garantizar la operatividad y seguridad de nuestro servidor web.
        </p>
        <h3>9. Plazo de Conservación de Datos </h3>
        <p>
          Conservamos los datos indefinidamente, pero los usuarios tienen derecho a acceder, rectificar, suprimir u oponerse a sus datos administrados por la empresa.
        </p>
        <h3>
          10. Base de Datos
        </h3>
        <p>
          Contamos con una base de datos registrada ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.
        </p>
        <h3>
          11. Enlaces a Otros Sitios
        </h3>
        <p>
          Nuestros servicios pueden contener enlaces a sitios de terceros. Le recomendamos revisar las políticas de protección de datos personales de estos sitios, ya que no tenemos control sobre ellos.
        </p>
        <h3>
          12. Cambios en Esta Política
        </h3>
        <p>Esta política puede actualizarse, y cualquier cambio será notificado mediante la publicación en nuestra página. Le recomendamos revisarla periódicamente. </p>
        <h3>
          13. Derechos del Usuario
        </h3>
        <p>
          Usted tiene derechos sobre sus datos, incluido el acceso, rectificación, supresión y oposición al tratamiento de los mismos.
        </p>
        <h3>
          14. Cómo Contactarnos
        </h3>
        <p>
          Si tiene preguntas sobre esta política, contáctenos en info@desarrolloglobal.pe o visite nuestras oficinas en Av. Julio C Tello 741, Lince, Lima, Perú.
        </p>
      </div>
    </PoliticaBlock>
  )
}
