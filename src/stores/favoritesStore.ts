import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  favoriteIds: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  clearFavorites: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],

      addFavorite: (id) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(id)
            ? state.favoriteIds
            : [...state.favoriteIds, id],
        }))
      },

      removeFavorite: (id) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.filter((favId) => favId !== id),
        }))
      },

      toggleFavorite: (id) => {
        const { isFavorite, addFavorite, removeFavorite } = get()
        if (isFavorite(id)) {
          removeFavorite(id)
        } else {
          addFavorite(id)
        }
      },

      isFavorite: (id) => {
        return get().favoriteIds.includes(id)
      },

      clearFavorites: () => {
        set({ favoriteIds: [] })
      },
    }),
    {
      name: 'favorites',
    }
  )
)
