import { motion } from 'framer-motion'

const stats = [
  { title: 'FC Gameplay Systems', label: 'Gameplay logic, football behaviour, tactical movement, and simulation features.', accent: 'blue' },
  { title: 'Game AI', label: 'Decision systems, behaviour logic, positioning, and player movement.', accent: 'cyan' },
  { title: 'Performance Optimization', label: 'Runtime performance, cross-platform constraints, and scalable systems.', accent: 'violet' },
  { title: 'Technical Art & Tools', label: 'Editor tools, debugging UI, workflow automation, and designer-facing systems.', accent: 'gold' },
  { title: 'XR / Virtual Production', label: 'Immersive experiences, VR systems, and real-time interactive pipelines.', accent: 'green' },
  { title: 'Complex System Architecture', label: 'Scalable system design, feature integration, maintainable architecture, and technical implementation for complex gameplay systems.', accent: 'blue' },
]

export default function ImpactStats() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="section-intro center">
        <p className="eyebrow">Capabilities</p>
        <h2>Senior game engineering expertise for high-end simulation and systems.</h2>
      </div>
      <div className="capabilities-grid">
        {stats.map((item, index) => (
          <motion.article
            key={item.title}
            className={`capability-card capability-card--${item.accent}`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
