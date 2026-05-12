import { Outlet, useNavigation } from 'react-router-dom'
import { Suspense } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageProgressBar } from '@/components/ui/PageProgressBar'

// Skip link for accessibility
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
               focus:z-50 focus:px-4 focus:py-2 focus:rounded-xl
               focus:bg-primary-600 focus:text-white focus:outline-none focus:ring-2
               focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
  >
    Aller au contenu principal
  </a>
)

// Page loading skeleton
const PageSkeleton = () => (
  <div className="container-app py-12 animate-pulse">
    <div className="h-10 w-1/3 rounded-xl bg-theme-muted mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-[380px] rounded-2xl bg-theme-muted" />
      ))}
    </div>
  </div>
)

export const RootLayout = () => {
  const navigation = useNavigation()
  const isNavigating = navigation.state !== 'idle'

  return (
    <div className="min-h-screen flex flex-col bg-theme-base transition-colors duration-200">
      {/* Accessibility skip link */}
      <SkipLink />

      {/* Navigation progress indicator */}
      <PageProgressBar active={isNavigating} />

      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
