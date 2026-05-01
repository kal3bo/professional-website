import { motion } from 'framer-motion'

const labels = [
  'FC27',
  'Gameplay Systems',
  'AI Behaviour',
  'Simulation Logic',
  'Tactical Context',
]

export default function SimulationCore() {
  return (
    <motion.div
      className="hero-simulation-card"
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="simulation-viewport">
        <div className="pitch-surface pitch-surface-dark">
          <div className="pitch-grid-line horizontal" />
          <div className="pitch-grid-line horizontal mid" />
          <div className="pitch-grid-line vertical" />
          <div className="pitch-grid-line vertical mid" />

          <div className="tactical-zone tactical-zone-left" />
          <div className="tactical-zone tactical-zone-right" />

          <motion.div
            className="player-node node-1"
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
          <motion.div
            className="player-node node-2"
            animate={{ y: [3, -3, 3] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
          />
          <motion.div
            className="player-node node-3"
            animate={{ y: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
          />

          <div className="tactical-arrow arrow-1" />
          <div className="tactical-arrow arrow-2" />
          <div className="tactical-arrow arrow-3" />

          <div className="glow-core" />
        </div>

        <div className="label-ring">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
