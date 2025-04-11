import {
  PutObjectCommand,
  S3Client
} from '@aws-sdk/client-s3'

export async function POST (request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('cv')
    const name = formData.get('name')
    const site = formData.get('site')

    if (file === null || typeof file === 'object' || name === null || typeof name === 'object' || site === null || typeof site === 'object') {
      return new Response(null, {
        status: 400
      })
    }

    const client = new S3Client({
      region: process.env.REGION,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.SECRET_ACCESS_KEY ?? ''
      }
    })

    const d = new Date()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const path = `cvs/${year}/${month < 10 ? '0' : ''}${month}/${name}.pdf`
    const url = `https://${process.env.BUCKET}.s3.${process.env.REGION}.amazonaws.com/${path}`

    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET,
      Key: path,
      ContentType: 'application/pdf',
      Body: Buffer.from(file, 'base64')
    })

    await client.send(command)

    const data = new FormData()

    data.append('name', name)
    data.append('url', url)
    data.append('site', site)

    await fetch('https://aula.desarrolloglobal.pe/v03/api/cv', { method: 'POST', body: data })

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
