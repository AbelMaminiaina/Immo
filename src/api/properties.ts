import type { Property, PropertyFilters, PaginatedResponse, ContactLead, ContactLeadResponse } from './types'
import { mockProperties, getCities } from './mock/properties'
import { randomDelay } from './mock/delay'

const filterProperties = (properties: Property[], filters: PropertyFilters): Property[] => {
  return properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false
    if (filters.category && property.category !== filters.category) return false
    if (filters.city && property.city !== filters.city) return false
    if (filters.minPrice && property.price < filters.minPrice) return false
    if (filters.maxPrice && property.price > filters.maxPrice) return false
    if (filters.minSurface && property.surface < filters.minSurface) return false
    if (filters.maxSurface && property.surface > filters.maxSurface) return false
    if (filters.minRooms && property.rooms < filters.minRooms) return false
    if (filters.maxRooms && property.rooms > filters.maxRooms) return false
    if (filters.query) {
      const query = filters.query.toLowerCase()
      const matchesTitle = property.title.toLowerCase().includes(query)
      const matchesCity = property.city.toLowerCase().includes(query)
      const matchesAddress = property.address.toLowerCase().includes(query)
      if (!matchesTitle && !matchesCity && !matchesAddress) return false
    }
    return true
  })
}

export const fetchProperties = async (
  filters: PropertyFilters = {},
  page: number = 1,
  pageSize: number = 9
): Promise<PaginatedResponse<Property>> => {
  await randomDelay()

  const filtered = filterProperties(mockProperties, filters)
  const total = filtered.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const data = filtered.slice(start, end)

  return {
    data,
    total,
    page,
    pageSize,
    totalPages,
  }
}

export const fetchPropertyById = async (id: string): Promise<Property | null> => {
  await randomDelay()

  const property = mockProperties.find((p) => p.id === id)
  return property || null
}

export const fetchPropertyBySlug = async (slug: string): Promise<Property | null> => {
  await randomDelay()

  const property = mockProperties.find((p) => p.slug === slug)
  return property || null
}

export const fetchFeaturedProperties = async (limit: number = 6): Promise<Property[]> => {
  await randomDelay()

  return mockProperties.filter((p) => p.isFeatured).slice(0, limit)
}

export const fetchSimilarProperties = async (
  propertyId: string,
  limit: number = 3
): Promise<Property[]> => {
  await randomDelay()

  const currentProperty = mockProperties.find((p) => p.id === propertyId)
  if (!currentProperty) return []

  return mockProperties
    .filter(
      (p) =>
        p.id !== propertyId &&
        p.type === currentProperty.type &&
        (p.category === currentProperty.category || p.city === currentProperty.city)
    )
    .slice(0, limit)
}

export const fetchCities = async (): Promise<string[]> => {
  await randomDelay(100, 200)
  return getCities()
}

export const createContactLead = async (lead: ContactLead): Promise<ContactLeadResponse> => {
  await randomDelay(500, 1000)

  console.log('Contact lead received:', lead)

  return {
    success: true,
    message: 'Votre demande a bien ete envoyee. Nous vous recontacterons rapidement.',
    leadId: `lead-${Date.now()}`,
  }
}
