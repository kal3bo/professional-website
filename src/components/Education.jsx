import { motion } from 'framer-motion'
import cevroImg from '../assets/education/CEVRO.jpg'
import tecImg from '../assets/education/TEC.png'
import vfsImg from '../assets/education/VFS.jpg'

const education = [
  {
    title: 'VR/AR Development Design College Diploma',
    subtitle: '',
    institution: 'Vancouver Film School',
    year: '2020',
    image: vfsImg,
  },
  {
    title: 'Bachelor’s Degree in Computer Science & Technology',
    subtitle: '',
    institution: 'Tecnológico de Monterrey',
    year: '2019',
    image: tecImg,
  },
  {
    title: 'Game Design Certificate Diploma',
    subtitle: '',
    institution: 'Vancouver Film School',
    year: '2019',
    image: vfsImg,
  },
  {
    title: 'Cyber-Security Diploma',
    subtitle: '',
    institution: 'CEVRO Institute (Prague, Czech Republic)',
    year: '2017',
    image: cevroImg,
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-intro center">
        <p className="eyebrow">Education</p>
        <h2>Academic foundation for complex game systems and AI engineering.</h2>
      </div>
      <div className="education-grid">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            className="education-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <img src={item.image} alt={`${item.institution} logo`} className="education-image" />
            <div className="education-content">
              <h3>{item.title}</h3>
              {item.subtitle && <p className="education-subtitle">{item.subtitle}</p>}
              <p className="education-institution">{item.institution}</p>
              {item.year && <span className="education-year">{item.year}</span>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
