import { motion } from 'framer-motion'

export default function FC26Feature() {
  return (
    <section id="fc26" className="fc26-section">
      <div className="section-intro">
        <p className="eyebrow">EA SPORTS FC26: Attacking Positioning AI</p>
        <h2>Contributing to one of FC26’s most praised gameplay improvements.</h2>
      </div>
      <div className="fc26-grid">
        <motion.div
          className="fc26-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <p className="fc26-paragraph">
            Worked on the development of FC26’s highly praised attacking positioning system, helping improve player behaviour, attacking support, tactical movement, and the overall flow of football gameplay.
          </p>
          <p className="fc26-paragraph">
            The work required combining football understanding with technical implementation inside complex gameplay AI systems, bridging design intent with reliable, performant systems.
          </p>
          <ul className="fc26-bullets">
            <li>Developed and refined attacking positioning logic.</li>
            <li>Improved attacking support and off-ball movement behaviour.</li>
            <li>Worked inside complex FC gameplay AI systems.</li>
            <li>Balanced football realism, gameplay responsiveness, and technical constraints.</li>
            <li>Supported a more believable and dynamic football simulation experience.</li>
          </ul>
        </motion.div>

        <motion.div
          className="fc26-visual glass-panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <div className="fc26-video-card">
            <div className="video-header">
              <span>FC26 demo</span>
              <a href="https://www.youtube.com/watch?v=0GE8YCIQF2M&t=5s" target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            </div>
            <div className="video-frame">
              <iframe
                title="FC26 Attacking Positioning AI"
                src="https://www.youtube.com/embed/0GE8YCIQF2M?start=5&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
