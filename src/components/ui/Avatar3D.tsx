import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import luffyImage from '../../assets/luffy-image.png'

export const Avatar3D = () => {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useTransform(my, [-0.5, 0.5], [10, -10])
  const rotY = useTransform(mx, [-0.5, 0.5], [-10, 10])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <div
      className="av-scene"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
    >
      <motion.div
        className="av-card"
        style={{ rotateX: rotX, rotateY: rotY }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={luffyImage}
          alt="Luffy face avatar"
          className="av-face-image"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}
