import cursos from '@/interfaces/cursos'
import { useQuery } from '@tanstack/react-query'

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async (): Promise<{ envivo: cursos[], grabado_web: cursos[] }> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cursos`)
      return response.json()
    }
  })
}

export function useOneCourse({ type, tag }: { type: string, tag: string }) {
  return useQuery({
    queryKey: ['course', { type, tag }],
    queryFn: async (): Promise<cursos> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cursos/${type}/${tag}`)
      return response.json()
    }
  })
}