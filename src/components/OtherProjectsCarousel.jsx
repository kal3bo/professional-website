import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ngImage from '../assets/projects/Ng_01.webp'
import jtfImage from '../assets/projects/JtF_Main_01.png'

const otherProjects = [
  {
    title: 'Nightingale',
    role: 'Senior Software Engineer · Unreal Engine C++',
    description: 'Shipped Nightingale 0.5 on Steam as part of a large collaborative development team. Contributed to gameplay and interaction systems, multiplayer replication, cinematic combat, modular AI systems, and immersive world pacing.',
    tags: ['Unreal Engine 5', 'C++', 'Gameplay Systems', 'Multiplayer Replication', 'Slate UI', 'AI Systems'],
    image: ngImage,
  },
  {
    title: 'Journey to Foundation',
    role: 'AI Lead Engineer · Unreal Engine C++',
    description: 'Shipped Journey to Foundation across PlayStation 5, Meta Quest 2/3, and Pico 4. Led AI tool development and gameplay systems for an immersive narrative experience focused on historical storytelling and player interaction.',
    tags: ['AI Lead', 'Unreal Engine', 'C++', 'VR', 'PlayStation 5', 'Meta Quest', 'Pico', 'Narrative Systems'],
    image: jtfImage,
  },
]

export default function OtherProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [broken, setBroken] = useState({})
  const trackRef = useRef(null)

  useEffect(() => {
    const element = trackRef.current
    if (!element) return

    const onScroll = () => {
      const index = Math.round(element.scrollLeft / (element.offsetWidth * 0.85))
      setActiveIndex(Math.min(otherProjects.length - 1, Math.max(0, index)))
    }

    element.addEventListener('scroll', onScroll, { passive: true })
    return () => element.removeEventListener('scroll', onScroll)
  }, [])

  const scrollBy = (offset) => {
    trackRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="other-projects" className="carousel-section">
      <div className="section-intro">
        <p className="eyebrow">Projects</p>
        <h2>Selected work across immersive systems, simulation, and premium game experiences.</h2>
      </div>
      <div className="carousel-header">
        <button className="carousel-control" onClick={() => scrollBy(-520)} aria-label="Previous project">
          ‹
        </button>
        <button className="carousel-control" onClick={() => scrollBy(520)} aria-label="Next project">
          ›
        </button>
      </div>
      <div className="carousel-track" ref={trackRef}>
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="carousel-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="carousel-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                onError={() => setBroken((current) => ({ ...current, [project.title]: true }))}
              />
              {broken[project.title] && (
                <div className="image-fallback">Image unavailable</div>
              )}
            </div>
            <div className="carousel-body">
              <span className="project-role">{project.role}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="carousel-dots">
        {otherProjects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollBy((index - activeIndex) * 520)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
