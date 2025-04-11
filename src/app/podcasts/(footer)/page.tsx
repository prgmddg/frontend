
import { Banner } from '../components/Banner'
import { MostrarCardsSemina } from '../components/MostrarCardsSemina'
import podcasts from '../_data/podcasts.json'

export default async function Seminarios () {
  const format = podcasts.sort((a, b) => b.id - a.id)

  return (
    <>
      <Banner idVideo={format[0].video} />
      <MostrarCardsSemina cards={format} />
    </>
  )
}
