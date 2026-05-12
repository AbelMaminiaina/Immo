import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { ThemeToggleCompact } from '@/components/ui/ThemeToggle'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { favoriteIds } = useFavoritesStore()

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/annonces', label: 'Annonces' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-theme-muted bg-theme-surface/80 backdrop-blur-lg">
      <nav className="container-app">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L4 9v12h16V9l-8-6zM12 17a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold text-theme-primary">
              Immo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand bg-brand-primary-soft'
                      : 'text-theme-secondary hover:text-theme-primary hover-bg-interactive'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggleCompact />

            {/* Favorites */}
            <NavLink
              to="/favoris"
              className={({ isActive }) =>
                `relative p-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-brand bg-brand-primary-soft'
                    : 'text-theme-secondary hover:text-theme-primary hover-bg-interactive'
                }`
              }
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {favoriteIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  {favoriteIds.length > 9 ? '9+' : favoriteIds.length}
                </span>
              )}
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover-bg-interactive transition-colors"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-theme-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-theme-muted animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-brand bg-brand-primary-soft'
                        : 'text-theme-secondary hover:text-theme-primary hover-bg-interactive'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
