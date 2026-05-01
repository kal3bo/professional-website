import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        className="footer-panel glass-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="footer-brand">
          <p className="footer-eyebrow">Kaleb Valenzuela</p>
          <h2>Senior game engineering for football simulation, gameplay AI, and immersive systems.</h2>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-label">Contact</p>
            <a href="mailto:kalebvalenzuela@outlook.com">kalebvalenzuela@outlook.com</a>
          </div>
          <div>
            <p className="footer-label">Quick links</p>
            <a href="#home">Home</a>
            <a href="#other-projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.div>
      <p className="footer-note">Designed for high-performance game systems, tactical AI, and interactive experiences.</p>
    </footer>
  )
}
