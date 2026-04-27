import { caseStudies } from "../data/portfolioData";

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="section-tag fade-in">Deep dives</div>
      <h2 className="section-title fade-in">Case studies.</h2>
      <p className="section-sub fade-in">Behind the numbers — what was built, why it was hard, and what it proved.</p>

      {caseStudies.map((study, i) => (
        <div key={i} className={`case-study ${study.reverse ? "reverse" : ""} fade-in`}>
          <div className="case-media">
            <div className="case-media-placeholder">
              {study.img ? (
                <img src={study.img} alt={study.title} />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>
          <div className="case-body">
            <div className="case-num">Case Study {study.id}</div>
            <div className="case-title">{study.title}</div>
            <div className="case-metrics">
              {study.metrics.map((metric, j) => (
                <div key={j}>
                  <div className="case-metric-val">{metric.val}</div>
                  <div className="case-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="case-desc">{study.desc}</div>
            <div className="project-links" style={{ borderTop: "none", paddingTop: 0, marginTop: 0 }}>
              {study.links.playstore && (
                <a href={study.links.playstore} target="_blank" className="proj-link playstore">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.2.8.2 1.18 0L16.62 12 4.36.24C3.98.04 3.55.04 3.18.24A1.3 1.3 0 002.5 1.4v21.2c0 .52.28.98.68 1.16z" />
                    <path d="M20.3 9.93l-2.8-1.6-3.2 3.67 3.2 3.67 2.82-1.62A2.14 2.14 0 0020.3 9.93z" />
                  </svg>
                  Play Store
                </a>
              )}
              {study.links.demo && (
                <a href={study.links.demo} target="_blank" className="proj-link demo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                  Live Site
                </a>
              )}
              {study.links.github && (
                <a href={study.links.github} target="_blank" className="proj-link github">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .3a12 12 0 00-3.8 23.38c.6.1.83-.26.83-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57A12 12 0 0012 .3z" />
                  </svg>
                  GitHub
                </a>
              )}
              {study.links.video && (
                <a href={study.links.video} target="_blank" className="proj-link video">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
