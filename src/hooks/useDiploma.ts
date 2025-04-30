import diplomas from '@/interfaces/diplomas'
import { useQuery } from '@tanstack/react-query'

export function useDiplomas() {
  return useQuery({
    queryKey: ['diplomas'],
    queryFn: async (): Promise<{ envivo: diplomas[], grabados_web: diplomas[] }> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diplomas`)
      return response.json()
    }
  })
}

export function useOneDiploma({ type, tag }: { type: string, tag: string }) {
  return useQuery({
    queryKey: ['diploma', { type, tag }],
    queryFn: async (): Promise<diplomas> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diplomas/${type}/${tag}`)
      return response.json()
    }
  })
}