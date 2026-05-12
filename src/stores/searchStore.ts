import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PropertyFilters, PropertyType } from '@/api/types'

interface SearchState {
  filters: PropertyFilters
  setFilter: <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => void
  setFilters: (filters: Partial<PropertyFilters>) => void
  resetFilters: () => void
  hasActiveFilters: () => boolean
}

const initialFilters: PropertyFilters = {
  type: undefined,
  category: undefined,
  city: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  minSurface: undefined,
  maxSurface: undefined,
  minRooms: undefined,
  maxRooms: undefined,
  query: undefined,
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      filters: initialFilters,

      setFilter: (key, value) => {
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        }))
      },

      setFilters: (filters) => {
        set((state) => ({
          filters: {
            ...state.filters,
            ...filters,
          },
        }))
      },

      resetFilters: () => {
        set({ filters: initialFilters })
      },

      hasActiveFilters: () => {
        const { filters } = get()
        return Object.values(filters).some(
          (value) => value !== undefined && value !== ''
        )
      },
    }),
    {
      name: 'search-filters',
      partialize: (state) => ({ filters: state.filters }),
    }
  )
)

export const getPriceRanges = (type: PropertyType | undefined) => {
  if (type === 'location') {
    return [
      { label: 'Tous les prix', min: undefined, max: undefined },
      { label: 'Moins de 500 000 Ar', min: undefined, max: 500000 },
      { label: '500 000 - 1 000 000 Ar', min: 500000, max: 1000000 },
      { label: '1 000 000 - 2 000 000 Ar', min: 1000000, max: 2000000 },
      { label: '2 000 000 - 3 000 000 Ar', min: 2000000, max: 3000000 },
      { label: 'Plus de 3 000 000 Ar', min: 3000000, max: undefined },
    ]
  }

  return [
    { label: 'Tous les prix', min: undefined, max: undefined },
    { label: 'Moins de 100 M Ar', min: undefined, max: 100000000 },
    { label: '100 M - 200 M Ar', min: 100000000, max: 200000000 },
    { label: '200 M - 400 M Ar', min: 200000000, max: 400000000 },
    { label: '400 M - 800 M Ar', min: 400000000, max: 800000000 },
    { label: 'Plus de 800 M Ar', min: 800000000, max: undefined },
  ]
}

export const getSurfaceRanges = () => [
  { label: 'Toutes surfaces', min: undefined, max: undefined },
  { label: 'Moins de 30 m²', min: undefined, max: 30 },
  { label: '30 - 50 m²', min: 30, max: 50 },
  { label: '50 - 80 m²', min: 50, max: 80 },
  { label: '80 - 120 m²', min: 80, max: 120 },
  { label: 'Plus de 120 m²', min: 120, max: undefined },
]

export const getRoomsOptions = () => [
  { label: 'Tous', value: undefined },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5+', value: 5 },
]
