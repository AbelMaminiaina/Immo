import { useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { fetchPropertyById } from '@/api/properties'
import { propertyKeys } from '@/lib/queryClient'

export const usePropertyPrefetch = () => {
  const queryClient = useQueryClient()

  const prefetchProperty = useCallback(
    (id: string) => {
      queryClient.prefetchQuery({
        queryKey: propertyKeys.detail(id),
        queryFn: () => fetchPropertyById(id),
        staleTime: 1000 * 60 * 5, // 5 minutes
      })
    },
    [queryClient]
  )

  return { prefetchProperty }
}
