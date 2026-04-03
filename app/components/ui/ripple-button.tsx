'use client'

import * as React from 'react'
import { motion, type Transition } from 'framer-motion'

import { cn } from '@/lib/utils'

interface Ripple {
  id: number
  x: number
  y: number
}

export interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  scale?: number
  transition?: Transition
}

export function RippleButton({
  children,
  onClick,
  className,
  scale = 10,
  transition = { duration: 0.6, ease: 'easeOut' },
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([])
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const createRipple = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }, [])

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event)
      if (onClick) {
        onClick(event)
      }
    },
    [createRipple, onClick],
  )

  return (
    <motion.button
      ref={buttonRef}
      data-slot="ripple-button"
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold transition hover:bg-black/80',
        className,
      )}
      {...(props as any)}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale, opacity: 0 }}
          transition={transition}
          className="pointer-events-none absolute size-6 rounded-full bg-white"
          style={{
            top: ripple.y - 10,
            left: ripple.x - 10,
          }}
        />
      ))}
    </motion.button>
  )
}
