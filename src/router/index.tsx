import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { ErrorBoundaryPage } from '@/components/ui/ErrorBoundaryPage'

const HomePage = lazy(() => import('@/features/home/HomePage'))
const ListingsPage = lazy(() => import('@/features/listings/ListingsPage'))
const PropertyDetailPage = lazy(() => import('@/features/detail/PropertyDetailPage'))
const FavoritesPage = lazy(() => import('@/features/favorites/FavoritesPage'))
const ContactPage = lazy(() => import('@/features/contact/ContactPage'))
const NotFoundPage = lazy(() => import('@/features/errors/NotFoundPage'))

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <p className="text-gray-500 text-sm">Chargement...</p>
    </div>
  </div>
)

const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'annonces',
        element: withSuspense(ListingsPage),
      },
      {
        path: 'biens/:slug',
        element: withSuspense(PropertyDetailPage),
      },
      {
        path: 'favoris',
        element: withSuspense(FavoritesPage),
      },
      {
        path: 'contact',
        element: withSuspense(ContactPage),
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
])
