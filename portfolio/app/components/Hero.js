import { stats } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-tag">Available for opportunities · Open to Germany</div>
      <h1>
        Full Stack Engineer
        <br />
        <span className="line2">End to End.</span>
      </h1>
      <p className="hero-sub">
        I build things that actually ship — from <strong>figma to production</strong>, from <strong>frontend to cloud
          infra</strong>. Self-taught engineer who co-founded a dev studio, led a team of 5, and shipped products with
        <strong>600+ daily active users</strong>.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
      <div className="hero-stats">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="stat-num">
              {stat.num}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
