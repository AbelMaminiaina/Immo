import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: (failureCount, error) => {
        if (error instanceof Error && error.message.includes('404')) {
          return false
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
    },
  },
})

export const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...propertyKeys.lists(), filters] as const,
  details: () => [...propertyKeys.all, 'detail'] as const,
  detail: (id: string) => [...propertyKeys.details(), id] as const,
  featured: () => [...propertyKeys.all, 'featured'] as const,
  similar: (id: string) => [...propertyKeys.all, 'similar', id] as const,
  cities: () => [...propertyKeys.all, 'cities'] as const,
}
