import { useEffect, useState } from 'react'

interface PageProgressBarProps {
  active?: boolean
}

export const PageProgressBar = ({ active = false }: PageProgressBarProps) => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active) {
      setVisible(true)
      setProgress(0)

      const timer1 = setTimeout(() => setProgress(30), 100)
      const timer2 = setTimeout(() => setProgress(50), 300)
      const timer3 = setTimeout(() => setProgress(70), 600)
      const timer4 = setTimeout(() => setProgress(85), 1000)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    } else if (visible) {
      setProgress(100)
      const timer = setTimeout(() => {
        setVisible(false)
        setProgress(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [active, visible])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1">
      {/* Background track */}
      <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30" />

      {/* Progress bar */}
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Glow effect */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-white/30 blur-sm" />
      </div>

      {/* Shimmer effect */}
      <div
        className="absolute inset-y-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
        style={{
          width: '30%',
          left: `${progress - 30}%`,
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  )
}
