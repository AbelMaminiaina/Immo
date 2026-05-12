import { MetaTags } from './MetaTags'
import { generateOrganizationSchema } from './schemas/organization'
import type { PropertyType } from '@/api/types'

interface ListingsSeoProps {
  type?: PropertyType
  city?: string
  totalCount: number
}

export const ListingsSeo = ({ type, city, totalCount }: ListingsSeoProps) => {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://immo.fr'

  let title = 'Toutes nos annonces immobilieres'
  let description = `Decouvrez ${totalCount} biens immobiliers disponibles.`

  if (type === 'vente') {
    title = city
      ? `Biens immobiliers a vendre a ${city}`
      : 'Biens immobiliers a vendre'
    description = `${totalCount} biens a vendre${city ? ` a ${city}` : ''}. Appartements, maisons, villas - Agence Immobiliere`
  } else if (type === 'location') {
    title = city
      ? `Locations immobilieres a ${city}`
      : 'Locations immobilieres'
    description = `${totalCount} biens a louer${city ? ` a ${city}` : ''}. Studios, appartements, maisons - Agence Immobiliere`
  } else if (city) {
    title = `Biens immobiliers a ${city}`
    description = `${totalCount} biens disponibles a ${city}. Vente et location - Agence Immobiliere`
  }

  const organizationSchema = generateOrganizationSchema()

  return (
    <MetaTags
      title={`${title} - Agence Immobiliere`}
      description={description}
      canonical={`${siteUrl}/annonces`}
      openGraph={{
        title,
        description,
        type: 'website',
      }}
      jsonLd={[organizationSchema]}
    />
  )
}
