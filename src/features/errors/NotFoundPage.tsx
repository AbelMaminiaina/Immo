import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { MetaTags } from '@/seo/MetaTags'

const NotFoundPage = () => {
  return (
    <>
      <MetaTags
        title="Page non trouvee - Agence Immobiliere"
        description="La page que vous recherchez n'existe pas."
      />

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-brand mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-theme-primary mb-4">
            Page non trouvee
          </h2>
          <p className="text-theme-secondary mb-8 max-w-md mx-auto">
            Desolé, la page que vous recherchez n'existe pas ou a ete deplacee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button>Retour a l'accueil</Button>
            </Link>
            <Link to="/annonces">
              <Button variant="secondary">Voir les annonces</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
