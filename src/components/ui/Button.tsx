import { forwardRef, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-xl
      transition-all duration-200
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-primary-500 to-primary-600 text-white
        hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:shadow-primary-500/25
        focus-visible:ring-primary-500
        active:from-primary-700 active:to-primary-800
      `,
      secondary: `
        bg-theme-surface text-theme-primary border border-theme
        hover:bg-theme-muted hover:border-theme-strong
        focus-visible:ring-primary-500
        active:bg-theme-muted
      `,
      ghost: `
        text-theme-secondary bg-transparent
        hover:text-theme-primary hover:bg-theme-muted
        focus-visible:ring-primary-500
        active:bg-theme-muted
      `,
      danger: `
        bg-gradient-to-r from-error-500 to-error-600 text-white
        hover:from-error-600 hover:to-error-700 hover:shadow-lg hover:shadow-error-500/25
        focus-visible:ring-error-500
        active:from-error-700 active:to-error-800
      `,
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-base gap-2',
      lg: 'px-7 py-3.5 text-lg gap-2.5',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Chargement...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Icon Button variant
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  'aria-label': string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      variant = 'ghost',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center rounded-xl
      transition-all duration-200
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-primary-500 to-primary-600 text-white
        hover:from-primary-600 hover:to-primary-700
        focus-visible:ring-primary-500
      `,
      secondary: `
        bg-theme-surface text-theme-primary border border-theme
        hover:bg-theme-muted
        focus-visible:ring-primary-500
      `,
      ghost: `
        text-theme-secondary bg-transparent
        hover:text-theme-primary hover:bg-theme-muted
        focus-visible:ring-primary-500
      `,
    }

    const sizes = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
