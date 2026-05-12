export type PropertyType = 'vente' | 'location'

export type PropertyCategory =
  | 'appartement'
  | 'maison'
  | 'villa'
  | 'terrain'
  | 'bureau'
  | 'commerce'

export type PropertyState =
  | 'neuf'
  | 'excellent'
  | 'bon'
  | 'a_renover'

export interface PropertyImage {
  id: string
  url: string
  alt: string
}

export interface Property {
  id: string
  title: string
  slug: string
  type: PropertyType
  category: PropertyCategory
  price: number
  surface: number
  rooms: number
  bedrooms: number
  bathrooms: number
  description: string
  shortDescription: string
  address: string
  city: string
  zipCode?: string
  latitude: number
  longitude: number
  images: PropertyImage[]
  features: string[]
  state: PropertyState
  yearBuilt?: number
  energyClass?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}

export interface PropertyFilters {
  type?: PropertyType
  category?: PropertyCategory
  city?: string
  minPrice?: number
  maxPrice?: number
  minSurface?: number
  maxSurface?: number
  minRooms?: number
  maxRooms?: number
  query?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface ContactLead {
  id?: string
  propertyId?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  createdAt?: string
}

export interface ContactLeadResponse {
  success: boolean
  message: string
  leadId?: string
}
