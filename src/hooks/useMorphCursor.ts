import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], .btn, .card, .theme-toggle, .minimal-link'

const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value))
}

export const useMorphCursor = () => {
  const xRaw = useMotionValue(-120)
  const yRaw = useMotionValue(-120)
  const rotateRaw = useMotionValue(0)
  const stretchRaw = useMotionValue(1)

  const x = useSpring(xRaw, { stiffness: 680, damping: 48, mass: 0.2 })
  const y = useSpring(yRaw, { stiffness: 680, damping: 48, mass: 0.2 })
  const rotate = useSpring(rotateRaw, { stiffness: 360, damping: 30, mass: 0.35 })
  const stretch = useSpring(stretchRaw, { stiffness: 300, damping: 28, mass: 0.4 })

  const [enabled, setEnabled] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const finePointerMedia = window.matchMedia('(pointer: fine)')
    const hoverMedia = window.matchMedia('(hover: hover)')
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMode = () => {
      const nextEnabled =
        finePointerMedia.matches && hoverMedia.matches && !reducedMotionMedia.matches

      setEnabled(nextEnabled)
      document.documentElement.classList.toggle('cursor-morph-enabled', nextEnabled)
    }

    updateMode()

    finePointerMedia.addEventListener('change', updateMode)
    hoverMedia.addEventListener('change', updateMode)
    reducedMotionMedia.addEventListener('change', updateMode)

    return () => {
      finePointerMedia.removeEventListener('change', updateMode)
      hoverMedia.removeEventListener('change', updateMode)
      reducedMotionMedia.removeEventListener('change', updateMode)
      document.documentElement.classList.remove('cursor-morph-enabled')
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      xRaw.set(-120)
      yRaw.set(-120)
      return
    }

    let previousX = -120
    let previousY = -120
    let settleTimeout: number | null = null

    const handlePointerMove = (event: PointerEvent) => {
      const currentX = event.clientX
      const currentY = event.clientY

      xRaw.set(currentX)
      yRaw.set(currentY)

      const deltaX = currentX - previousX
      const deltaY = currentY - previousY
      const speed = Math.hypot(deltaX, deltaY)

      if (speed > 0.1) {
        rotateRaw.set((Math.atan2(deltaY, deltaX) * 180) / Math.PI)
      }

      stretchRaw.set(clamp(1 + speed * 0.012, 1, 1.55))

      if (settleTimeout !== null) {
        window.clearTimeout(settleTimeout)
      }
      settleTimeout = window.setTimeout(() => {
        stretchRaw.set(1)
      }, 80)

      previousX = currentX
      previousY = currentY

      const target = event.target
      if (target instanceof Element) {
        setIsInteractive(Boolean(target.closest(INTERACTIVE_SELECTOR)))
      } else {
        setIsInteractive(false)
      }
    }

    const handlePointerDown = () => {
      setIsPressed(true)
    }

    const handlePointerUp = () => {
      setIsPressed(false)
    }

    const handlePointerLeave = () => {
      xRaw.set(-120)
      yRaw.set(-120)
      setIsPressed(false)
      setIsInteractive(false)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('blur', handlePointerLeave)

    return () => {
      if (settleTimeout !== null) {
        window.clearTimeout(settleTimeout)
      }
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('blur', handlePointerLeave)
    }
  }, [enabled, rotateRaw, stretchRaw, xRaw, yRaw])

  return {
    enabled,
    isInteractive,
    isPressed,
    x,
    y,
    rotate,
    stretch,
  }
}
