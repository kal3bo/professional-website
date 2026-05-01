import { motion } from 'framer-motion'

const TODO_EMAIL = 'kalebvalenzuela@outlook.com'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-hero glass-panel">
        <div>
          <p className="eyebrow">Let’s build the next immersive system.</p>
          <h2>Let’s build the next generation of gameplay systems.</h2>
          <p>
            I help teams ship polished gameplay systems, AI behaviours, real-time tools, and immersive interactive experiences that connect strong engineering with creative design.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${TODO_EMAIL}`}>Email me</a>
          <a className="button button-secondary" href="/resume.pdf">Resume</a>
        </div>
      </div>

      <div className="contact-grid">
        <motion.article className="contact-panel glass-panel" whileHover={{ y: -6 }}>
          <span>LinkedIn</span>
          <a href="https://linkedin.com/in/kalebvalenzuela" target="_blank" rel="noreferrer">linkedin.com/in/kalebvalenzuela</a>
        </motion.article>
        <motion.article className="contact-panel glass-panel" whileHover={{ y: -6 }}>
          <span>GitHub</span>
          <a href="https://github.com/kal3bo" target="_blank" rel="noreferrer">github.com/kal3bo</a>
        </motion.article>
      </div>
    </section>
  )
}
