import gettingUrl from './gettingUrl'
import apiurl from '@/types/apiUrl'

export default async function getRequest (type:apiurl, tag = '', id = '', limit = '') {
  const url = gettingUrl({ type, tag, id, limit })

  try {
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()

    return { res: data, err: false }
  } catch (err:any) {
    return { res: [], err }
  }
}
