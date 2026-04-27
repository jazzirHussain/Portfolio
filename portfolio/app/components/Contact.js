import { contactInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-tag fade-in">Let's work together</div>
      <h2 className="section-title fade-in">
        Open to
        <br />
        opportunities.
      </h2>
      <p className="section-sub fade-in">
        Actively looking for full stack engineering roles, particularly in Germany. I bring
        end-to-end ownership, real production experience, and the hunger to keep building.
      </p>

      <div className="contact-wrap fade-in">
        {contactInfo.map((info, i) => (
          <div key={i} className="contact-line">
            <div className="contact-label">{info.label}</div>
            <div className="contact-val">
              {info.href ? (
                <a href={info.href}>{info.val}</a>
              ) : (
                info.val
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
