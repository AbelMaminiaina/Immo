import { useSearchStore, getPriceRanges, getSurfaceRanges, getRoomsOptions } from '@/stores/searchStore'
import { useCities } from '@/hooks/useProperties'
import { Button } from '@/components/ui/Button'

// Quartiers de Madagascar par ville
const quartiersParVille: Record<string, string[]> = {
  'Antananarivo': [
    'Ivandry', 'Ankorondrano', 'Analakely', 'Isoraka', 'Ampefiloha',
    'Andoharanofotsy', 'Behoririka', 'Ivato', 'Ankadimbahoaka', 'Andraharo',
    'Ambatobe', 'Ambohitrarahaba', 'Analamahitsy', 'Antanimena', 'Tsaralalana'
  ],
  'Toamasina': [
    'Centre-ville', 'Anjoma', 'Ankirihiry', 'Morarano', 'Tanambao V'
  ],
  'Nosy Be': [
    'Ambatoloaka', 'Hell-Ville', 'Madirokely', 'Andilana', 'Dzamandzar'
  ],
  'Diego Suarez': [
    'Centre-ville', 'Ramena', 'Lazaret', 'Grand Pavois', 'Tanambao'
  ],
  'Antsirabe': [
    'Centre-ville', 'Ambohidranandriana', 'Antsirabe II', 'Vatofotsy'
  ],
  'Toliara': [
    'Centre-ville', 'Ifaty', 'Anketa', 'Mahavatse'
  ],
  'Ambositra': [
    'Centre-ville', 'Ambohimitombo', 'Ivato'
  ]
}

interface FilterPanelProps {
  onClose?: () => void
}

export const FilterPanel = ({ onClose }: FilterPanelProps) => {
  const { filters, setFilter, setFilters, resetFilters, hasActiveFilters } = useSearchStore()
  const { data: cities = [] } = useCities()

  // Get quartiers based on selected city
  const quartiers = filters.city ? quartiersParVille[filters.city] || [] : []

  const priceRanges = getPriceRanges(filters.type)
  const surfaceRanges = getSurfaceRanges()
  const roomsOptions = getRoomsOptions()

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value)
    const range = priceRanges[index]
    setFilters({ minPrice: range.min, maxPrice: range.max })
  }

  const handleSurfaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value)
    const range = surfaceRanges[index]
    setFilters({ minSurface: range.min, maxSurface: range.max })
  }

  const getCurrentPriceIndex = () => {
    return priceRanges.findIndex(
      (r) => r.min === filters.minPrice && r.max === filters.maxPrice
    )
  }

  const getCurrentSurfaceIndex = () => {
    return surfaceRanges.findIndex(
      (r) => r.min === filters.minSurface && r.max === filters.maxSurface
    )
  }

  return (
    <div className="bg-theme-surface rounded-2xl shadow-lg border border-theme-muted p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-theme-primary">Filtres</h2>
        {hasActiveFilters() && (
          <button
            onClick={resetFilters}
            className="text-sm text-brand hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors"
          >
            Reinitialiser
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Type de transaction */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Type de transaction
          </label>
          <div className="flex gap-2">
            {[
              { value: undefined, label: 'Tous' },
              { value: 'vente' as const, label: 'Vente' },
              { value: 'location' as const, label: 'Location' },
            ].map((option) => (
              <button
                key={option.label}
                onClick={() => setFilter('type', option.value)}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filters.type === option.value
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-theme-muted text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categorie de bien */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Type de bien
          </label>
          <div className="flex gap-2 flex-wrap">
            {[
              { value: undefined, label: 'Tous' },
              { value: 'appartement' as const, label: 'Appartement' },
              { value: 'maison' as const, label: 'Maison' },
              { value: 'villa' as const, label: 'Villa' },
              { value: 'terrain' as const, label: 'Terrain' },
            ].map((option) => (
              <button
                key={option.label}
                onClick={() => setFilter('category', option.value)}
                className={`py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filters.category === option.value
                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg shadow-secondary-500/25'
                    : 'bg-theme-muted text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ville */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Ville
          </label>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select
              value={filters.city || ''}
              onChange={(e) => setFilter('city', e.target.value || undefined)}
              className="input-field pl-12 appearance-none cursor-pointer"
            >
              <option value="">Toutes les villes</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Quartier */}
        {quartiers.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-theme-secondary mb-3">
              Quartier
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <select
                value={filters.query || ''}
                onChange={(e) => setFilter('query', e.target.value || undefined)}
                className="input-field pl-12 appearance-none cursor-pointer"
              >
                <option value="">Tous les quartiers</option>
                {quartiers.map((quartier) => (
                  <option key={quartier} value={quartier}>
                    {quartier}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Budget
          </label>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <select
              value={getCurrentPriceIndex()}
              onChange={handlePriceChange}
              className="input-field pl-12 appearance-none cursor-pointer"
            >
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Surface */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Surface
          </label>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <select
              value={getCurrentSurfaceIndex()}
              onChange={handleSurfaceChange}
              className="input-field pl-12 appearance-none cursor-pointer"
            >
              {surfaceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Nombre de pieces */}
        <div>
          <label className="block text-sm font-medium text-theme-secondary mb-3">
            Nombre de pieces
          </label>
          <div className="flex gap-2 flex-wrap">
            {roomsOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setFilter('minRooms', option.value)}
                className={`py-2.5 px-5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filters.minRooms === option.value
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-theme-muted text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {onClose && (
        <div className="mt-8 pt-6 border-t border-theme-muted">
          <Button onClick={onClose} className="w-full" size="lg">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Appliquer les filtres
          </Button>
        </div>
      )}
    </div>
  )
}
