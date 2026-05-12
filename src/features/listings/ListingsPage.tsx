import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePropertiesInfinite } from '@/hooks/useProperties'
import { useSearchStore } from '@/stores/searchStore'
import { PropertyCard } from '@/components/property/PropertyCard'
import { FilterPanel } from '@/components/search/FilterPanel'
import { Button } from '@/components/ui/Button'
import { ListingsSeo } from '@/seo/ListingsSeo'
import type { PropertyType } from '@/api/types'

const ListingsPage = () => {
  const [searchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { filters, setFilters, hasActiveFilters, resetFilters } = useSearchStore()

  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const type = searchParams.get('type') as PropertyType | null
    const city = searchParams.get('city')

    if (type || city) {
      setFilters({
        type: type || undefined,
        city: city || undefined,
      })
    }
  }, [searchParams, setFilters])

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = usePropertiesInfinite(filters)

  const properties = data?.pages.flatMap((page) => page.data) || []
  const totalCount = data?.pages[0]?.total || 0

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '100px',
    })

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [handleObserver])

  // Lock body scroll when filter is open on mobile
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFilterOpen])

  return (
    <>
      <ListingsSeo
        type={filters.type}
        city={filters.city}
        totalCount={totalCount}
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Immobilier Madagascar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40 dark:from-gray-950/90 dark:via-gray-950/70 dark:to-gray-950/50" />
        </div>
        <div className="container-app relative z-10">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-4">
            {filters.type === 'vente'
              ? 'Biens a vendre'
              : filters.type === 'location'
              ? 'Biens a louer'
              : 'Tous nos biens'}
            {filters.city && ` a ${filters.city}`}
          </h1>
          <p className="text-white/80 text-lg">
            <span className="font-semibold text-accent-300">{totalCount}</span> bien
            {totalCount > 1 ? 's' : ''} disponible{totalCount > 1 ? 's' : ''} a Madagascar
          </p>
        </div>
      </section>

      <div className="container-app py-10">
        {/* Header Actions */}
        <div className="flex items-center justify-end gap-3 mb-8">
            {hasActiveFilters() && (
              <button
                onClick={resetFilters}
                className="text-sm text-brand hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors"
              >
                Reinitialiser
              </button>
            )}
            <Button
              variant="secondary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filtres
              {hasActiveFilters() && (
                <span className="ml-2 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Panel */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile Filter Panel (Drawer) */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={() => setIsFilterOpen(false)}
              />

              {/* Drawer */}
              <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-theme-surface shadow-2xl animate-slide-in-right">
                <div className="p-5 border-b border-theme-muted flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-theme-primary">Filtres</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover-bg-interactive rounded-xl transition-colors"
                    aria-label="Fermer"
                  >
                    <svg
                      className="w-5 h-5 text-theme-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-5 overflow-y-auto max-h-[calc(100vh-80px)]">
                  <FilterPanel onClose={() => setIsFilterOpen(false)} />
                </div>
              </div>

              <style>{`
                @keyframes slideInRight {
                  from { transform: translateX(100%); }
                  to { transform: translateX(0); }
                }
                .animate-slide-in-right {
                  animation: slideInRight 0.3s ease-out;
                }
              `}</style>
            </div>
          )}

          {/* Property Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="skeleton h-[420px]" />
                ))}
              </div>
            ) : isError ? (
              <div className="text-center py-16 px-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-error-50 dark:bg-error-500/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-error-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-theme-primary mb-2">
                  Oups ! Une erreur est survenue
                </h3>
                <p className="text-theme-secondary mb-6 max-w-md mx-auto">
                  Nous n'avons pas pu charger les biens. Veuillez reessayer.
                </p>
                <Button onClick={() => window.location.reload()}>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reessayer
                </Button>
              </div>
            ) : properties.length === 0 ? (
              <div className="text-center py-16 px-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-theme-muted flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-theme-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-theme-primary mb-2">
                  Aucun bien trouve
                </h3>
                <p className="text-theme-secondary mb-6 max-w-md mx-auto">
                  Nous n'avons trouve aucun bien correspondant a vos criteres.
                  Essayez de modifier vos filtres.
                </p>
                <Button variant="secondary" onClick={resetFilters}>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Reinitialiser les filtres
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>

                {/* Infinite scroll observer */}
                <div ref={observerRef} className="h-20 mt-8 flex items-center justify-center">
                  {isFetchingNextPage && (
                    <div className="flex items-center gap-3 text-theme-secondary">
                      <div className="w-8 h-8 border-3 border-theme-muted border-t-brand rounded-full animate-spin" />
                      <span className="text-sm font-medium">Chargement...</span>
                    </div>
                  )}
                </div>

                {!hasNextPage && properties.length > 0 && (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-muted text-theme-secondary text-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Vous avez vu tous les biens disponibles
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingsPage
