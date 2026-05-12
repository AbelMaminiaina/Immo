import type { JsonLdRealEstateListing } from '../types'

interface RealEstateSchemaParams {
  name: string
  description: string
  url: string
  images?: string[]
  address: {
    streetAddress: string
    city: string
    postalCode: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  price: number
  surface: number
  rooms: number
  type: 'vente' | 'location'
}

export const generateRealEstateSchema = ({
  name,
  description,
  url,
  images,
  address,
  geo,
  price,
  surface,
  rooms,
  type,
}: RealEstateSchemaParams): JsonLdRealEstateListing => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name,
    description,
    url,
    image: images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressCountry: 'FR',
    },
    geo: geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: surface,
      unitCode: 'MTK',
    },
    numberOfRooms: rooms,
  }
}
