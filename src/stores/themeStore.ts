import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyTheme = (theme: ResolvedTheme) => {
  const root = document.documentElement

  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#030712' : '#ffffff')
  }
}

const resolveTheme = (theme: Theme): ResolvedTheme => {
  return theme === 'system' ? getSystemTheme() : theme
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: getSystemTheme(),

      setTheme: (theme: Theme) => {
        const resolved = resolveTheme(theme)
        applyTheme(resolved)
        set({ theme, resolvedTheme: resolved })
      },

      toggleTheme: () => {
        const { resolvedTheme } = get()
        const newTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark'
        const resolved = resolveTheme(newTheme)
        applyTheme(resolved)
        set({ theme: newTheme, resolvedTheme: resolved })
      },
    }),
    {
      name: 'immo-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resolved = resolveTheme(state.theme)
          applyTheme(resolved)
          state.resolvedTheme = resolved
        }
      },
    }
  )
)

// Listen for system theme changes
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  mediaQuery.addEventListener('change', (e) => {
    const state = useThemeStore.getState()
    if (state.theme === 'system') {
      const resolved = e.matches ? 'dark' : 'light'
      applyTheme(resolved)
      useThemeStore.setState({ resolvedTheme: resolved })
    }
  })
}
