import { motion } from 'framer-motion'
import { useMorphCursor } from '../../hooks/useMorphCursor'

export const MorphCursor = () => {
  const { enabled, isInteractive, isPressed, x, y, rotate, stretch } = useMorphCursor()

  if (!enabled) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-morph-halo"
        style={{ x, y }}
        animate={{
          scale: isPressed ? 0.8 : isInteractive ? 1.28 : 1,
          opacity: isPressed ? 0.25 : isInteractive ? 0.5 : 0.34,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.5 }}
      />

      <motion.div
        className="cursor-morph-core"
        style={{
          x,
          y,
          rotate,
          scaleX: stretch,
          scaleY: stretch,
        }}
        animate={{
          scale: isPressed ? 0.72 : isInteractive ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 340, damping: 26, mass: 0.4 }}
      >
        <span className="cursor-morph-dot" />
      </motion.div>
    </>
  )
}
