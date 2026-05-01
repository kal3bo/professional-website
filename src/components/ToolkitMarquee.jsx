import { motion } from 'framer-motion'

const tools = [
  'C++',
  'Unreal Engine',
  'Frostbite',
  'Gameplay AI',
  'FC Systems',
  'Performance Optimization',
  'Slate UI',
  'UMG',
  'Behaviour Trees',
  'EQS',
  'State Machines',
  'Python Tools',
  'Multiplayer Replication',
  'VR/XR',
  'Technical Art',
]

export default function ToolkitMarquee() {
  return (
    <section className="toolkit-section">
      <div className="section-intro center">
        <p className="eyebrow">Game-Tech Toolkit</p>
        <h2>Systems, engines, and tools that power premium game simulation.</h2>
      </div>
      <motion.div
        className="toolkit-marquee"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="toolkit-track">
          {tools.concat(tools).map((tool, index) => (
            <span key={`${tool}-${index}`} className="tool-chip">{tool}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
