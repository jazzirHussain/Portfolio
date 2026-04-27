import { skillsTicker, skillLayers } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-tag fade-in">What I bring</div>
      <h2 className="section-title fade-in">
        End to end.
        <br />
        No hand-offs.
      </h2>
      <p className="section-sub fade-in">
        Most developers own one layer. I own the whole stack — UI, business logic, cloud
        infra, payments, IoT, AI integrations, and post-deployment monitoring.
      </p>

      {/* <!-- Stack belt — scrolling ticker --> */}
      <div className="ticker-wrap fade-in">
        <div className="ticker">
          {[...skillsTicker, ...skillsTicker].map((skill, i) => (
            <span key={i}>
              {skill}
              {i < (skillsTicker.length * 2 - 1) && <span> · </span>}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-grid fade-in" style={{ marginTop: "40px" }}>
        {skillLayers.map((layer, i) => (
          <div key={i} className={`skill-cell skill-${layer.color}`}>
            <div className="skill-layer-label">{layer.label}</div>
            <div className="skill-name">{layer.name}</div>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "12px" }}>
              {layer.desc}
            </p>
            <div className="skill-tags">
              {layer.tags.map((tag, j) => (
                <span key={j} className={`skill-tag st-${layer.color}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
