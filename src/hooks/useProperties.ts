import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query'
import {
  fetchProperties,
  fetchPropertyById,
  fetchPropertyBySlug,
  fetchFeaturedProperties,
  fetchSimilarProperties,
  fetchCities,
  createContactLead,
} from '@/api/properties'
import type { PropertyFilters, ContactLead } from '@/api/types'
import { propertyKeys } from '@/lib/queryClient'

export const useProperties = (filters: PropertyFilters = {}, page: number = 1) => {
  return useQuery({
    queryKey: propertyKeys.list({ ...filters, page }),
    queryFn: () => fetchProperties(filters, page),
  })
}

export const usePropertiesInfinite = (filters: PropertyFilters = {}) => {
  return useInfiniteQuery({
    queryKey: propertyKeys.list(filters),
    queryFn: ({ pageParam }) => fetchProperties(filters, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1
      }
      return undefined
    },
  })
}

export const usePropertyById = (id: string) => {
  return useQuery({
    queryKey: propertyKeys.detail(id),
    queryFn: () => fetchPropertyById(id),
    enabled: !!id,
  })
}

export const usePropertyBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['property', 'slug', slug],
    queryFn: () => fetchPropertyBySlug(slug),
    enabled: !!slug,
  })
}

export const useFeaturedProperties = (limit: number = 6) => {
  return useQuery({
    queryKey: propertyKeys.featured(),
    queryFn: () => fetchFeaturedProperties(limit),
  })
}

export const useSimilarProperties = (propertyId: string, limit: number = 3) => {
  return useQuery({
    queryKey: propertyKeys.similar(propertyId),
    queryFn: () => fetchSimilarProperties(propertyId, limit),
    enabled: !!propertyId,
  })
}

export const useCities = () => {
  return useQuery({
    queryKey: propertyKeys.cities(),
    queryFn: fetchCities,
    staleTime: 1000 * 60 * 60, // 1 hour
  })
}

export const useContactLead = () => {
  return useMutation({
    mutationFn: (lead: ContactLead) => createContactLead(lead),
  })
}
