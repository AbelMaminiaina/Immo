import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { Button } from './Button'

export const ErrorBoundaryPage = () => {
  const error = useRouteError()

  let title = 'Une erreur est survenue'
  let message = 'Nous sommes desoles, quelque chose s\'est mal passe.'

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page non trouvee'
      message = 'La page que vous recherchez n\'existe pas ou a ete deplacee.'
    } else if (error.status === 500) {
      title = 'Erreur serveur'
      message = 'Notre serveur a rencontre un probleme. Veuillez reessayer plus tard.'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-base px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-error-50 dark:bg-error-500/20 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-error-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-theme-primary mb-4">{title}</h1>
        <p className="text-theme-secondary mb-8">{message}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.location.reload()}>
            Rafraichir la page
          </Button>
          <Link to="/">
            <Button variant="secondary">Retour a l'accueil</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
