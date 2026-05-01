import { motion } from 'framer-motion'

const projects = [
  {
    title: 'EA SPORTS FC27',
    details: 'Contributing to next-generation football simulation systems with dynamic team behaviour and tactical flow.',
    tags: ['EA SPORTS FC', 'Gameplay', 'Simulation', 'Confidential'],
    variant: 'blue',
    cta: 'View Project',
  },
  {
    title: 'EA SPORTS FC26',
    details: 'Enhanced attacking positioning AI for realistic movement, tactical response, and live football gameplay.',
    tags: ['Football AI', 'Player Behaviour', 'Gameplay Systems'],
    variant: 'cyan',
    cta: 'Watch Demo',
  },
  {
    title: 'Nightingale',
    details: 'Supported cinematic combat and modular AI systems for immersive Realms Rebuild gameplay.',
    tags: ['AI Systems', 'Combat', 'Open World'],
    variant: 'violet',
    cta: 'Explore Case',
  },
  {
    title: 'Journey to Foundation',
    details: 'Built AI systems for historical storytelling, XR experiences, and interactive narrative logic.',
    tags: ['AI Lead', 'XR', 'Narrative Systems'],
    variant: 'orange',
    cta: 'Learn More',
  },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="work-section">
      <div className="section-intro">
        <p className="eyebrow">Featured work</p>
        <h2>Signature game-tech projects with premium simulation focus.</h2>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`work-card work-card--${project.variant}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
          >
            <div className="card-hero">
              <div className="project-hero-glow" />
              <div className="project-visual" />
              <div className="project-label">Project</div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span>{project.variant} stack</span>
                <span>{project.tags[0]}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="card-cta" href="#contact">{project.cta}</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
