import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Perception',
    copy: 'Reads pitch state, pressure, spacing and movement context in real time.',
  },
  {
    title: 'Evaluation',
    copy: 'Scores movement, pressure, tactical options, and available support paths.',
  },
  {
    title: 'Action',
    copy: 'Selects believable football behaviour with timing, spacing, and role logic.',
  },
]

export default function SimulationLayer() {
  return (
    <section id="simulation" className="simulation-layer-section">
      <div className="section-intro">
        <p className="eyebrow">Inside the Simulation Layer</p>
        <h2>Player behaviour is not random. It is evaluated through tactical context, role logic, space, movement, and timing.</h2>
      </div>
      <div className="simulation-split">
        <motion.div
          className="simulation-pitch glass-panel"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="pitch-board">
            <div className="pitch-boundary" />
            <div className="pitch-line h-one" />
            <div className="pitch-line h-two" />
            <div className="pitch-line v-one" />
            <div className="pitch-line v-two" />
            <div className="pitch-node active" />
            <div className="pitch-node support" />
            <div className="pitch-node option" />
            <div className="pitch-arrow arrow-a" />
            <div className="pitch-arrow arrow-b" />
            <div className="pitch-area area-one" />
            <div className="pitch-area area-two" />
            <div className="pitch-tag tag-one">Tactical Context</div>
            <div className="pitch-tag tag-two">Decision Layer</div>
            <div className="pitch-tag tag-three">Support Space</div>
          </div>
        </motion.div>
        <div className="simulation-cards">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="simulation-card glass-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="card-eyebrow">{card.title}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
