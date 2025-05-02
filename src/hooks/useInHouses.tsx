import inHouse from '@/interfaces/inHouse'
import { useQuery } from '@tanstack/react-query'

export function useInHouses() {
  return useQuery({
    queryKey: ['in-houses'],
    queryFn: async () : Promise<inHouse[]> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inhouses`)
      return response.json()
    }
  })
}

export function useOneInHouse(tag: string) {
  return useQuery({
    queryKey: ['in-house', tag],
    queryFn: async () : Promise<inHouse | null> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inhouses/${tag}`)
      if (!response.ok) return null
      return response.json()
    }
  })
}