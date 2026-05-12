import { ContactForm } from '@/components/forms/ContactForm'
import { MetaTags } from '@/seo/MetaTags'

const ContactPage = () => {
  return (
    <>
      <MetaTags
        title="Contact - Agence Immobiliere"
        description="Contactez notre agence immobiliere. Notre equipe est a votre disposition pour repondre a toutes vos questions."
      />

      {/* Hero Section */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Bureau agence immobiliere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/50 dark:from-gray-950/90 dark:via-gray-950/75 dark:to-gray-950/60" />
        </div>
        <div className="container-app relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Notre equipe d'experts est a votre disposition pour vous accompagner
            dans votre projet immobilier a Madagascar.
          </p>
        </div>
      </section>

      <div className="container-app py-12">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-theme-primary mb-6">
                Nos coordonnees
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand"
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
                  </div>
                  <div>
                    <h3 className="font-medium text-theme-primary">Adresse</h3>
                    <p className="text-theme-secondary">
                      Lot IVG 123 Ivandry
                      <br />
                      Antananarivo, Madagascar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-theme-primary">Telephone</h3>
                    <p className="text-theme-secondary">+261 34 12 345 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-theme-primary">Email</h3>
                    <p className="text-theme-secondary">contact@immo.mg</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-theme-primary">Horaires</h3>
                    <p className="text-theme-secondary">
                      Lundi - Vendredi : 9h00 - 19h00
                      <br />
                      Samedi : 10h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-theme-primary mb-6">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
