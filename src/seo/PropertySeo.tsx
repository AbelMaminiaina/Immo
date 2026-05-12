import { MetaTags } from './MetaTags'
import { generateRealEstateSchema } from './schemas/realEstate'
import { generateBreadcrumbSchema } from './schemas/breadcrumb'
import type { Property } from '@/api/types'
import { formatPrice, formatSurface } from '@/lib/formatters'

interface PropertySeoProps {
  property: Property
}

export const PropertySeo = ({ property }: PropertySeoProps) => {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://immo.fr'
  const url = `${siteUrl}/biens/${property.slug}`

  const title = `${property.title} - ${formatPrice(property.price, property.type)}`
  const description = `${property.shortDescription} ${formatSurface(property.surface)} a ${property.city}. ${
    property.type === 'vente' ? 'A vendre' : 'A louer'
  } - Agence Immobiliere`

  const realEstateSchema = generateRealEstateSchema({
    name: property.title,
    description: property.description,
    url,
    images: property.images.map((img) => `${siteUrl}${img.url}`),
    address: {
      streetAddress: property.address,
      city: property.city,
      postalCode: property.zipCode,
    },
    geo: {
      latitude: property.latitude,
      longitude: property.longitude,
    },
    price: property.price,
    surface: property.surface,
    rooms: property.rooms,
    type: property.type,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: siteUrl },
    { name: 'Annonces', url: `${siteUrl}/annonces` },
    { name: property.title },
  ])

  return (
    <MetaTags
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description,
        url,
        image: property.images[0]?.url
          ? `${siteUrl}${property.images[0].url}`
          : undefined,
        type: 'product',
      }}
      jsonLd={[realEstateSchema, breadcrumbSchema]}
    />
  )
}
