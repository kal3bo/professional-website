import { motion } from 'framer-motion'

const platforms = [
  'Console',
  'PC',
  'Mobile',
  'XR Headsets',
  'PlayStation',
  'Steam',
  'Android',
  'Apple',
  'Meta Quest',
  'Pico',
]

export default function Platforms() {
  return (
    <section id="platforms" className="platforms-section">
      <div className="section-intro">
        <p className="eyebrow">Platforms</p>
        <h2>Delivered across premium gaming and immersive ecosystems.</h2>
      </div>
      <motion.div
        className="platforms-grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        {platforms.map((platform) => (
          <div key={platform} className="platform-chip">
            {platform}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
