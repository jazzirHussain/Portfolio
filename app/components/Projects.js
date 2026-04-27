import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag fade-in">What I've built</div>
      <h2 className="section-title fade-in">
        Real products.
        <br />
        Real users.
      </h2>
      <p className="section-sub fade-in">
        Not tutorials. Not side projects that never shipped. These are production systems
        used by actual businesses and real people.
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className={`project-card ${project.featured ? "featured" : ""} fade-in`}>
            <div className="project-type">{project.type}</div>
            <div className="project-title">{project.title}</div>
            {project.badge && <div className="user-badge">{project.badge}</div>}
            <div className="project-desc">{project.desc}</div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, j) => (
                <li key={j}>{highlight}</li>
              ))}
            </ul>
            <div className="project-stack">
              {project.stack.map((tech, j) => (
                <span key={j} className="stack-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.playstore && (
                <a href={project.links.playstore} target="_blank" className="proj-link playstore">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.2.8.2 1.18 0L16.62 12 4.36.24C3.98.04 3.55.04 3.18.24A1.3 1.3 0 002.5 1.4v21.2c0 .52.28.98.68 1.16z" />
                    <path d="M20.3 9.93l-2.8-1.6-3.2 3.67 3.2 3.67 2.82-1.62A2.14 2.14 0 0020.3 9.93z" />
                    <path d="M4.36.24L16.1 10.57l-2.9 3.35L4.36.24z" opacity=".5" />
                    <path d="M4.36 23.76l8.84-9.68-2.9-3.35L4.36 23.76z" opacity=".5" />
                  </svg>
                  Play Store
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" className="proj-link demo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                  Live Site
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" className="proj-link github">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .3a12 12 0 00-3.8 23.38c.6.1.83-.26.83-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0012 .3z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.links.video && (
                <a href={project.links.video} target="_blank" className="proj-link video">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Demo Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
