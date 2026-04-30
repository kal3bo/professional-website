import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <span className="brand-mark">K</span>
          <div>
            <p className="brand-name">kal3bo</p>
            <p className="brand-subtitle">Game Software Engineer</p>
          </div>
        </div>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Game development, tools, and systems</p>
            <h1>
              I build immersive gameplay systems and polished game technology.
            </h1>
            <p className="hero-text">
              I’m a software engineer making videogames with responsive player
              controls, cinematic visuals, realtime systems, and strong technical
              foundations.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Work with me
              </a>
              <a className="button button-secondary" href="#education">
                Learn more
              </a>
            </div>
            <div className="hero-tags">
              <span>Gameplay systems</span>
              <span>Realtime tools</span>
              <span>AI & simulation</span>
              <span>Performance-driven</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-decor hero-decor-top"></div>
            <div className="hero-card">
              <p className="card-label">Featured project</p>
              <h2>Action RPG Engine</h2>
              <p>
                Fast combat, dynamic camera motion, and modular AI systems for
                high-performance gameplay.
              </p>
              <div className="hero-stats">
                <div>
                  <strong>60+</strong>
                  <span>fps optimized</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>platforms</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Video game development rig and interface"
              />
            </div>
            <div className="hero-decor hero-decor-bottom"></div>
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-card">
            <strong>7+</strong>
            <p>Years of game engineering experience</p>
          </div>
          <div className="impact-card">
            <strong>4</strong>
            <p>Released titles with real players</p>
          </div>
          <div className="impact-card">
            <strong>3</strong>
            <p>Specialized engines and toolchains</p>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-intro">
            <p className="eyebrow">Featured work</p>
            <h2>Designing systems, visuals, and player-first mechanics.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Gameplay preview screen"
              />
              <div>
                <h3>Combat Toolkit</h3>
                <p>
                  Modular combat state machine, hit detection, and parry timing
                  for high-precision action.
                </p>
              </div>
            </article>
            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Developer working on game code"
              />
              <div>
                <h3>Editor Pipeline</h3>
                <p>
                  Level editing tools, asset import automation, and realtime
                  preview workflows.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="section-intro">
            <p className="eyebrow">Education</p>
            <h2>Technical training for game systems and interactive software.</h2>
          </div>
          <div className="education-cards">
            <article className="education-card">
              <h3>Master’s in Interactive Systems</h3>
              <p>Specialized study in game AI, simulation, and realtime graphics.</p>
              <span>2021 — 2023</span>
            </article>
            <article className="education-card">
              <h3>Bachelor’s in Computer Science</h3>
              <p>Software engineering, data structures, and systems programming.</p>
              <span>2016 — 2020</span>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-intro">
            <p className="eyebrow">Get in touch</p>
            <h2>Let’s talk about your next game or engine project.</h2>
            <p className="contact-copy">
              I can help with gameplay engineering, realtime tools, and polished
              interactive systems.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
            </div>
            <div className="contact-card">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kal3bo
              </a>
            </div>
            <div className="contact-card">
              <h3>GitHub</h3>
              <a
                href="https://github.com/kal3bo"
                target="_blank"
                rel="noreferrer"
              >
                github.com/kal3bo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        Built with React + Vite for a bold game developer portfolio.
      </footer>
    </div>
  )
}

export default App
