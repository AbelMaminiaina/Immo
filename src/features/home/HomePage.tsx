import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFeaturedProperties, useCities } from '@/hooks/useProperties'
import { useSearchStore } from '@/stores/searchStore'
import { PropertyCard } from '@/components/property/PropertyCard'
import { Button } from '@/components/ui/Button'
import { MetaTags } from '@/seo/MetaTags'

const HomePage = () => {
  const navigate = useNavigate()
  const { data: featuredProperties, isLoading } = useFeaturedProperties(6)
  const { data: cities = [] } = useCities()
  const { setFilters, resetFilters } = useSearchStore()

  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState<'vente' | 'location'>('vente')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    resetFilters()
    setFilters({
      type: searchType,
      query: searchQuery || undefined,
    })
    navigate('/annonces')
  }

  const stats = [
    { value: '500+', label: 'Biens disponibles' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '15+', label: "Annees d'experience" },
    { value: '24h', label: 'Reponse garantie' },
  ]

  return (
    <>
      <MetaTags
        title="Agence Immobiliere Madagascar - Trouvez votre bien ideal"
        description="Decouvrez nos biens immobiliers a vendre et a louer a Madagascar. Appartements, maisons, villas a Antananarivo, Nosy Be, Toamasina."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Villa de luxe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60 dark:from-gray-950/98 dark:via-gray-950/85 dark:to-gray-950/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-app relative py-12 sm:py-24 lg:py-36 w-full flex-1 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-400 animate-pulse" />
              Plus de 500 biens disponibles
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif font-bold mb-3 sm:mb-6 text-white leading-tight">
              Trouvez le bien{' '}
              <span className="text-accent-300">immobilier</span>{' '}
              <span className="block sm:inline">de vos reves</span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-10 max-w-2xl">
              Decouvrez notre selection de biens d'exception a vendre et a louer
              a Madagascar. Antananarivo, Nosy Be, Toamasina et plus encore.
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="bg-theme-surface rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10"
            >
              {/* Type Toggle */}
              <div className="flex gap-2 mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setSearchType('vente')}
                  className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    searchType === 'vente'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-theme-muted text-theme-secondary hover:text-theme-primary'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Acheter
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('location')}
                  className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    searchType === 'location'
                      ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg shadow-secondary-500/25'
                      : 'bg-theme-muted text-theme-secondary hover:text-theme-primary'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Louer
                  </span>
                </button>
              </div>

              {/* Search Input */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ville, quartier, adresse..."
                    className="input-field pl-12"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:px-8">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Rechercher
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-theme-surface/95 backdrop-blur-lg border-t border-theme-muted">
          <div className="container-app">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 sm:divide-x divide-theme-muted">
              {stats.map((stat) => (
                <div key={stat.label} className="py-3 sm:py-6 lg:py-8 text-center px-1 sm:px-4">
                  <p className="text-base sm:text-2xl lg:text-4xl font-bold text-brand mb-0.5 sm:mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-base lg:text-lg text-theme-primary leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container-app py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-theme-primary mb-2 sm:mb-3">
              Biens en vedette
            </h2>
            <p className="text-theme-secondary text-sm sm:text-lg">
              Decouvrez notre selection de biens d'exception
            </p>
          </div>
          <Link to="/annonces">
            <Button variant="secondary">
              Voir tout
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton h-[380px] sm:h-[420px]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProperties?.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>

      {/* Cities Section */}
      <section className="py-12 sm:py-20 bg-theme-muted">
        <div className="container-app">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-theme-primary mb-2 sm:mb-3">
              Explorez par ville
            </h2>
            <p className="text-theme-secondary text-sm sm:text-lg">
              Trouvez des biens dans les plus belles villes de Madagascar
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/annonces?city=${encodeURIComponent(city)}`}
                onClick={() => {
                  resetFilters()
                  setFilters({ city })
                }}
                className="group px-6 py-3 bg-theme-surface rounded-full border border-theme-muted shadow-sm hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                <span className="text-theme-secondary group-hover:text-brand font-medium transition-colors">
                  {city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-app py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-theme-primary mb-2 sm:mb-3">
            Nos services
          </h2>
          <p className="text-theme-secondary text-sm sm:text-lg max-w-2xl mx-auto">
            Un accompagnement personnalise pour tous vos projets immobiliers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              ),
              title: 'Estimation gratuite',
              description: 'Obtenez une estimation precise de votre bien en quelques minutes grace a notre expertise du marche local.',
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              ),
              title: 'Gestion locative',
              description: 'Confiez-nous la gestion de votre bien et profitez d\'une tranquillite d\'esprit totale.',
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              title: 'Accompagnement',
              description: 'De la recherche a la signature, nous vous accompagnons a chaque etape de votre projet.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="card p-5 sm:p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-theme-primary mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-theme-secondary text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-12 sm:py-20 bg-theme-muted">
        <div className="container-app">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-theme-primary mb-3 sm:mb-4">
              Notre processus
            </h2>
            <p className="text-theme-secondary text-sm sm:text-lg max-w-3xl mx-auto px-4">
              Decouvrez les etapes claires et efficaces que nous suivons pour faire de votre projet immobilier une reussite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Prise de contact',
                description: 'Contactez-nous pour nous faire part de votre projet. Nous ecoutons vos besoins et definissons ensemble vos criteres.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
              },
              {
                step: '02',
                title: 'Recherche et planification',
                description: 'Nous recherchons les biens correspondant a vos criteres et planifions les visites selon votre disponibilite.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                ),
              },
              {
                step: '03',
                title: 'Visite et negociation',
                description: 'Nous vous accompagnons lors des visites et negocions pour vous les meilleures conditions possibles.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
              {
                step: '04',
                title: 'Finalisation & suivi',
                description: 'Nous vous assistons jusqu\'a la signature et restons a vos cotes pour un suivi personnalise apres-vente.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-primary-100 dark:from-primary-700 dark:to-primary-900" />
                )}

                <div className="card p-5 sm:p-8 text-center relative z-10 h-full hover:-translate-y-1 transition-transform duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-brand">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {item.icon}
                    </svg>
                  </div>

                  <h3 className="text-base sm:text-xl font-semibold text-theme-primary mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-theme-secondary text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-app py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700" />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="relative p-6 sm:p-10 lg:p-16 text-center text-white">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold mb-3 sm:mb-4">
              Vous avez un bien a vendre ou a louer ?
            </h2>
            <p className="text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-lg">
              Confiez-nous votre bien et beneficiez de notre expertise pour une
              vente ou une location rapide et au meilleur prix.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-white/90 border-0"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </Button>
              </Link>
              <a href="tel:+261341234567">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10 border border-white/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +261 34 12 345 67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
