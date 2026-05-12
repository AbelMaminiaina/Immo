import { useParams, Link } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { usePropertyBySlug } from '@/hooks/useProperties'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { formatPrice, formatPricePerSqm, formatSurface, formatRooms, formatAddress, formatDate } from '@/lib/formatters'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'
import { PropertySeo } from '@/seo/PropertySeo'
import { SimilarProperties } from './SimilarProperties'

const PropertyMap = lazy(() =>
  import('@/components/property/PropertyMap').then((m) => ({
    default: m.PropertyMap,
  }))
)

const PropertyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: property, isLoading, isError } = usePropertyBySlug(slug || '')
  const { toggleFavorite, isFavorite } = useFavoritesStore()
  const [activeImage, setActiveImage] = useState(0)

  if (isLoading) {
    return (
      <div className="container-app py-8">
        <div className="animate-pulse">
          <div className="skeleton h-8 w-1/2 rounded mb-4" />
          <div className="skeleton h-[500px] rounded-xl mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="skeleton h-6 rounded" />
              <div className="skeleton h-6 rounded w-3/4" />
              <div className="skeleton h-32 rounded" />
            </div>
            <div className="skeleton h-80 rounded-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (isError || !property) {
    return (
      <div className="container-app py-16 text-center">
        <h1 className="text-2xl font-bold text-theme-primary mb-4">Bien non trouve</h1>
        <p className="text-theme-secondary mb-8">
          Ce bien n'existe pas ou a ete retire de la vente.
        </p>
        <Link to="/annonces">
          <Button>Voir tous les biens</Button>
        </Link>
      </div>
    )
  }

  const favorite = isFavorite(property.id)

  return (
    <>
      <PropertySeo property={property} />

      <div className="container-app py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-theme-muted mb-6">
          <Link to="/" className="hover:text-brand transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link to="/annonces" className="hover:text-brand transition-colors">
            Annonces
          </Link>
          <span>/</span>
          <span className="text-theme-primary">{property.title}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`badge ${
                  property.type === 'vente' ? 'badge-vente' : 'badge-location'
                }`}
              >
                {property.type === 'vente' ? 'Vente' : 'Location'}
              </span>
              {property.energyClass && (
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    property.energyClass <= 'C'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : property.energyClass <= 'E'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                  }`}
                >
                  DPE {property.energyClass}
                </span>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-theme-primary mb-2">
              {property.title}
            </h1>
            <p className="text-theme-secondary flex items-center gap-1">
              <svg
                className="w-5 h-5"
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
              {formatAddress(property.address, property.city, property.zipCode)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-3xl font-bold text-brand">
                {formatPrice(property.price, property.type)}
              </p>
              <p className="text-sm text-theme-secondary">
                {formatPricePerSqm(property.price, property.surface)}
              </p>
            </div>
            <button
              onClick={() => toggleFavorite(property.id)}
              className={`p-3 rounded-full border-2 transition-colors ${
                favorite
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-500'
                  : 'border-theme-muted hover:border-theme-secondary'
              }`}
              aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              <svg
                className="w-6 h-6"
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
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden mb-4">
            <img
              src={property.images[activeImage]?.url || '/placeholder-property.webp'}
              alt={property.images[activeImage]?.alt || property.title}
              className="w-full h-full object-cover"
            />
          </div>
          {property.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {property.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === index
                      ? 'border-brand'
                      : 'border-transparent hover:border-theme-muted'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Key Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-theme-muted rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-theme-primary">
                  {formatSurface(property.surface)}
                </p>
                <p className="text-sm text-theme-muted">Surface</p>
              </div>
              <div className="bg-theme-muted rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-theme-primary">
                  {property.rooms}
                </p>
                <p className="text-sm text-theme-muted">{formatRooms(property.rooms)}</p>
              </div>
              <div className="bg-theme-muted rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-theme-primary">
                  {property.bedrooms}
                </p>
                <p className="text-sm text-theme-muted">
                  Chambre{property.bedrooms > 1 ? 's' : ''}
                </p>
              </div>
              <div className="bg-theme-muted rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-theme-primary">
                  {property.bathrooms}
                </p>
                <p className="text-sm text-theme-muted">
                  Salle{property.bathrooms > 1 ? 's' : ''} de bain
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-theme-primary mb-4">
                Description
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-theme-secondary mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-theme-primary mb-4">
                  Equipements
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-theme-muted rounded-full text-sm text-theme-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Details */}
            <div>
              <h2 className="text-xl font-semibold text-theme-primary mb-4">
                Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-theme-muted">
                  <span className="text-theme-muted">Type</span>
                  <span className="font-medium text-theme-primary">
                    {property.type === 'vente' ? 'Vente' : 'Location'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-theme-muted">
                  <span className="text-theme-muted">Etat</span>
                  <span className="font-medium text-theme-primary capitalize">
                    {property.state.replace('_', ' ')}
                  </span>
                </div>
                {property.yearBuilt && (
                  <div className="flex justify-between py-2 border-b border-theme-muted">
                    <span className="text-theme-muted">Annee de construction</span>
                    <span className="font-medium text-theme-primary">
                      {property.yearBuilt}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-theme-muted">
                  <span className="text-theme-muted">Mise en ligne</span>
                  <span className="font-medium text-theme-primary">
                    {formatDate(property.createdAt)}
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-semibold text-theme-primary mb-4">
                Localisation
              </h2>
              <Suspense
                fallback={
                  <div className="h-[400px] skeleton rounded-xl" />
                }
              >
                <PropertyMap
                  latitude={property.latitude}
                  longitude={property.longitude}
                  title={property.title}
                />
              </Suspense>
            </div>
          </div>

          {/* Contact Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 card p-6">
              <h3 className="text-lg font-semibold text-theme-primary mb-4">
                Interesse par ce bien ?
              </h3>
              <ContactForm
                propertyId={property.id}
                propertyTitle={property.title}
              />
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties propertyId={property.id} />
      </div>
    </>
  )
}

export default PropertyDetailPage
