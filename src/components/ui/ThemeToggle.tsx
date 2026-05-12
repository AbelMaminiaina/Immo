import { useThemeStore, type Theme } from '@/stores/themeStore'

const themes: { value: Theme; label: string; icon: JSX.Element }[] = [
  {
    value: 'light',
    label: 'Clair',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Sombre',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    value: 'system',
    label: 'Systeme',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="flex items-center p-1 rounded-xl bg-theme-muted">
      {themes.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`
            flex items-center justify-center p-2 rounded-lg transition-all duration-200
            ${theme === value
              ? 'bg-theme-surface text-brand shadow-sm'
              : 'text-theme-secondary hover:text-theme-primary'
            }
          `}
          aria-label={`Theme ${label}`}
          aria-pressed={theme === value}
          title={label}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}

// Compact toggle (light/dark only)
export const ThemeToggleCompact = () => {
  const { resolvedTheme, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl hover-bg-interactive transition-colors duration-200"
      aria-label={`Passer en mode ${resolvedTheme === 'dark' ? 'clair' : 'sombre'}`}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            resolvedTheme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            resolvedTheme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  )
}

// Theme toggle with dropdown menu
export const ThemeDropdown = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="relative group">
      <button
        className="p-2 rounded-xl hover-bg-interactive transition-colors duration-200"
        aria-label="Changer le theme"
      >
        <div className="w-5 h-5">
          {themes.find((t) => t.value === theme)?.icon}
        </div>
      </button>

      <div className="absolute right-0 mt-2 py-2 w-36 rounded-xl bg-theme-surface border border-theme shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {themes.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors
              ${theme === value
                ? 'text-brand bg-brand-primary-soft'
                : 'text-theme-secondary hover:text-theme-primary hover-bg-interactive'
              }
            `}
          >
            {icon}
            {label}
            {theme === value && (
              <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
