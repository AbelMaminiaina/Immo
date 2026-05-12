import { Link } from 'react-router-dom'
import type { Property } from '@/api/types'
import { formatPrice, formatPricePerSqm, formatSurface, formatRooms } from '@/lib/formatters'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { usePropertyPrefetch } from '@/hooks/usePropertyPrefetch'

interface PropertyCardProps {
  property: Property
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore()
  const { prefetchProperty } = usePropertyPrefetch()
  const favorite = isFavorite(property.id)

  return (
    <article
      className="card group animate-fade-in"
      onMouseEnter={() => prefetchProperty(property.id)}
    >
      <Link to={`/biens/${property.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-theme-muted">
          <img
            src={property.images[0]?.url || '/placeholder-property.webp'}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`badge shadow-lg ${
                property.type === 'vente' ? 'badge-vente' : 'badge-location'
              }`}
            >
              {property.type === 'vente' ? 'Vente' : 'Location'}
            </span>
          </div>

          {/* Featured Badge */}
          {property.isFeatured && (
            <div className="absolute top-3 left-24">
              <span className="badge bg-accent-500 text-white shadow-lg">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Coup de coeur
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleFavorite(property.id)
            }}
            className={`
              absolute top-3 right-3 p-2.5 rounded-full shadow-lg
              transition-all duration-300 transform
              ${favorite
                ? 'bg-red-500 text-white scale-110'
                : 'bg-theme-surface/90 backdrop-blur-sm text-theme-secondary hover:text-red-500 hover:scale-110'
              }
            `}
            aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill={favorite ? 'currentColor' : 'none'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/biens/${property.slug}`} className="block group/title">
          <h3 className="text-lg font-semibold text-theme-primary mb-2 line-clamp-2 group-hover/title:text-brand transition-colors">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <p className="text-theme-secondary text-sm mb-4 flex items-center">
          <svg
            className="w-4 h-4 mr-1.5 text-theme-muted"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {property.city}
        </p>

        {/* Property Features */}
        <div className="flex items-center gap-4 text-sm text-theme-secondary mb-4">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {formatSurface(property.surface)}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {formatRooms(property.rooms)}
          </span>
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {property.bedrooms} ch.
            </span>
          )}
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-theme-muted">
          <div className="flex items-baseline justify-between mb-1">
            <p className="text-2xl font-bold text-brand">
              {formatPrice(property.price, property.type)}
            </p>
            {property.energyClass && (
              <span
                className={`
                  px-2.5 py-1 text-xs font-bold rounded-lg
                  ${property.energyClass <= 'C'
                    ? 'bg-success-50 text-success-600 dark:bg-success-500/20 dark:text-success-500'
                    : property.energyClass <= 'E'
                    ? 'bg-warning-50 text-warning-600 dark:bg-warning-500/20 dark:text-warning-500'
                    : 'bg-error-50 text-error-600 dark:bg-error-500/20 dark:text-error-500'
                  }
                `}
              >
                DPE {property.energyClass}
              </span>
            )}
          </div>
          <p className="text-sm text-theme-secondary">
            {formatPricePerSqm(property.price, property.surface)}
          </p>
        </div>
      </div>
    </article>
  )
}
