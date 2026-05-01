import { motion } from 'framer-motion'
import eaSportsVideo from '../assets/projects/EA_Sports.mp4'

const heroFocus = [
  'FC27',
  'Gameplay Systems',
  'AI Behaviour',
  'Simulation Logic',
  'Performance Optimization',
  'Complex Systems',
  'Tactical Context',
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-eyebrow-full">EA SPORTS FC27 · GAMEPLAY SOFTWARE ENGINEER</div>
      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <h1>Engineering the next generation of football simulation at EA.</h1>
          <p className="hero-intro">
            Software Engineer specializing in FC gameplay systems, performance optimization, and complex system architecture. I combine deep football knowledge with technical programming skills to bridge creative design and technical implementation.
          </p>
          <p className="hero-subtitle">
            Currently working on brand new EA SPORTS FC features that will be public soon. Public details are limited.
          </p>
        </motion.div>

        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <div className="hero-visual-panel glass-panel hero-visual-dark">
            <div className="hero-visual-header">
              <span>Current EA SPORTS FC work</span>
              <span>Public details limited</span>
            </div>
            <div className="hero-video-card">
              <video
                className="hero-video"
                src={eaSportsVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-focus-grid">
        {heroFocus.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
