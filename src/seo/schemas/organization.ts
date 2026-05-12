import type { JsonLdOrganization } from '../types'

export const generateOrganizationSchema = (): JsonLdOrganization => {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://immo.fr'

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Agence Immobiliere',
    description:
      'Votre partenaire de confiance pour tous vos projets immobiliers. Vente, location, estimation.',
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Rue de la Paix',
      addressLocality: 'Paris',
      postalCode: '75002',
      addressCountry: 'FR',
    },
    telephone: '+33123456789',
    email: 'contact@immo.fr',
  }
}
