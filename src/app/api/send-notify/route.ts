import {
  SendEmailCommand,
  SESClient
} from '@aws-sdk/client-ses'

export async function POST (request: Request) {
  try {
    const data = await request.formData()

    const email = `
    <table>
        <thead>
            <tr>
                <th>ALERTA DE FORMULARIO WEB INHOUSE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Correo</td>
            <td>${data.get('correo')}</td>
            </tr>
            <tr>
            <td>telefono</td>
            <td>${data.get('telefono')}</td>
            </tr>
            <tr>
            <td>nombres</td>
            <td>${data.get('nombres')}</td>
            </tr>
            <tr>
            <td>cantidad</td>
               <td>${data.get('cantidad')}</td>
        </tr>
        <tr>
        <td>entidad</td>
        <td>${data.get('entidad')}</td>
        </tr>
    </tbody>
    </table>
    `

    const client = new SESClient({
      region: 'us-west-2',
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID_SES ?? '',
        secretAccessKey: process.env.SECRET_ACCESS_KEY_SES ?? ''
      }
    })

    await client.send(new SendEmailCommand({
      Destination: {
        ToAddresses: ['asesoria@desarrolloglobal.pe', 'prgmddg@gmail.com']
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: email
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Solicitud Inhouse'
        }
      },
      Source: 'noreply@desarrolloglobal.pe'
    }))

    return new Response(null, {
      status: 200
    })
  } catch (error) {
    console.error(error)
    return new Response(null, {
      status: 500
    })
  }
}
