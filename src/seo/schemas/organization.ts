import type { JsonLdOrganization } from '../types'

export const generateOrganizationSchema = (): JsonLdOrganization => {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://immo.mg'

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Agence Immobiliere Madagascar',
    description:
      'Votre partenaire de confiance pour tous vos projets immobiliers a Madagascar. Vente, location, terrains.',
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lot IVG 123 Ivandry',
      addressLocality: 'Antananarivo',
      postalCode: '101',
      addressCountry: 'MG',
    },
    telephone: '+261341234567',
    email: 'contact@immo.mg',
  }
}
