export interface PageSeoData {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
  openGraph?: OpenGraphData
  twitter?: TwitterData
  jsonLd?: object[]
}

export interface OpenGraphData {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  siteName?: string
}

export interface TwitterData {
  card?: 'summary' | 'summary_large_image'
  title?: string
  description?: string
  image?: string
}

export interface JsonLdRealEstateListing {
  '@context': 'https://schema.org'
  '@type': 'RealEstateListing'
  name: string
  description: string
  url: string
  image?: string[]
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    '@type': 'GeoCoordinates'
    latitude: number
    longitude: number
  }
  offers?: {
    '@type': 'Offer'
    price: number
    priceCurrency: string
    availability: string
  }
  floorSize?: {
    '@type': 'QuantitativeValue'
    value: number
    unitCode: 'MTK'
  }
  numberOfRooms?: number
}

export interface JsonLdOrganization {
  '@context': 'https://schema.org'
  '@type': 'RealEstateAgent'
  name: string
  description?: string
  url: string
  logo?: string
  address?: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  telephone?: string
  email?: string
}

export interface JsonLdBreadcrumb {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }[]
}
