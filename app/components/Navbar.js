export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <span>J</span>azzir Hussain
      </a>
      <ul className="nav-links">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#case-studies">Case Studies</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="Jazzir_Hussain_Bangalore.pdf"
            target="_blank"
            className="btn-primary"
          >
            Resume ↓
          </a>
        </li>
      </ul>
    </nav>
  );
}
