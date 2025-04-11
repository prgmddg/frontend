
import getRequest from '@/helpers/getRequest'
import { Banner } from '../components/Banner'
import { MostrarCardsSemina } from '../components/MostrarCardsSemina'

export default async function Seminarios () {
  const { res: seminarios, err } = await getRequest('seminarios')

  if (err) return null

  return (
    <>
      <Banner />
      {
        !err && <MostrarCardsSemina terminados={seminarios.terminados} proximos={seminarios.proximos} />
      }
    </>
  )
}
