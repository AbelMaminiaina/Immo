import { Helmet } from 'react-helmet-async'
import type { PageSeoData } from './types'

interface MetaTagsProps extends Partial<PageSeoData> {
  title: string
  description: string
}

export const MetaTags = ({
  title,
  description,
  canonical,
  noindex,
  openGraph,
  twitter,
  jsonLd,
}: MetaTagsProps) => {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://immo.fr'
  const siteName = import.meta.env.VITE_APP_NAME || 'Agence Immobiliere'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta
        property="og:description"
        content={openGraph?.description || description}
      />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:site_name" content={openGraph?.siteName || siteName} />
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={twitter?.card || 'summary_large_image'}
      />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta
        name="twitter:description"
        content={twitter?.description || description}
      />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {/* JSON-LD */}
      {jsonLd?.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
