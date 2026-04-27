import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-tag fade-in">Where I've worked</div>
      <h2 className="section-title fade-in">Experience</h2>
      <p className="section-sub fade-in">
        From self-taught intern to CTO of a national engineering club — a track record built from scratch.
      </p>

      <div className="exp-list">
        {experience.map((exp, i) => (
          <div key={i} className="exp-item fade-in">
            <div className="exp-period">
              {exp.period.split("\n").map((line, j) => (
                <span key={j}>
                  {line}
                  {j < exp.period.split("\n").length - 1 && <br />}
                </span>
              ))}
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
