import { Link } from 'react-router-dom'
import { useQueries } from '@tanstack/react-query'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { fetchPropertyById } from '@/api/properties'
import { propertyKeys } from '@/lib/queryClient'
import { PropertyCard } from '@/components/property/PropertyCard'
import { Button } from '@/components/ui/Button'
import { MetaTags } from '@/seo/MetaTags'

const FavoritesPage = () => {
  const { favoriteIds, clearFavorites } = useFavoritesStore()

  const propertyQueries = useQueries({
    queries: favoriteIds.map((id) => ({
      queryKey: propertyKeys.detail(id),
      queryFn: () => fetchPropertyById(id),
    })),
  })

  const isLoading = propertyQueries.some((query) => query.isLoading)
  const properties = propertyQueries
    .map((query) => query.data)
    .filter((p): p is NonNullable<typeof p> => p !== null && p !== undefined)

  return (
    <>
      <MetaTags
        title="Mes favoris - Agence Immobiliere"
        description="Retrouvez tous les biens que vous avez ajoutes a vos favoris."
      />

      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[220px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Interieur maison"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/50 dark:from-gray-950/90 dark:via-gray-950/75 dark:to-gray-950/60" />
        </div>
        <div className="container-app relative z-10">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-2">
            Mes favoris
          </h1>
          <p className="text-white/80 text-lg">
            {favoriteIds.length} bien{favoriteIds.length > 1 ? 's' : ''}{' '}
            enregistre{favoriteIds.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <div className="container-app py-8">
        <div className="flex items-center justify-end mb-8">
          {favoriteIds.length > 0 && (
            <Button variant="secondary" onClick={clearFavorites}>
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Tout supprimer
            </Button>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(favoriteIds.length)].map((_, i) => (
              <div
                key={i}
                className="skeleton rounded-xl h-[380px]"
              />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-theme-muted flex items-center justify-center">
              <svg
                className="w-10 h-10 text-theme-muted"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-theme-primary mb-2">
              Aucun favori pour le moment
            </h2>
            <p className="text-theme-secondary mb-8 max-w-md mx-auto">
              Parcourez nos annonces et cliquez sur le coeur pour sauvegarder vos
              biens preferes.
            </p>
            <Link to="/annonces">
              <Button>Voir les annonces</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default FavoritesPage
