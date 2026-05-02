import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import newLogo from '../assets/New_Logo.png'

const navLinks = ['Home', 'Work', 'Education', 'Contact']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-nav-wrap">
      <motion.div
        className="site-nav glass-panel"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="brand-group">
          <img src={newLogo} alt="Logo" className="brand-mark" />
          <div>
            <p className="brand-name">Kaleb Valenzuela</p>
            <p className="brand-tag">Sr. Software Engineer</p>
          </div>
        </div>

        <nav className="nav-links desktop-only">
          {navLinks.map((link) => {
            const href = link === 'Work' ? '#other-projects' : `#${link.toLowerCase()}`
            return (
              <a key={link} href={href}>{link}</a>
            )
          })}
          <a href="/professional-website/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>

        <div className="nav-right">
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {navLinks.map((link) => {
              const href = link === 'Work' ? '#other-projects' : `#${link.toLowerCase()}`
              return (
                <a
                  key={link}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              )
            })}
            <a href="/professional-website/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
