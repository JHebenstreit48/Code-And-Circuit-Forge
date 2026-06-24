import { useStorageUrl } from "@/hooks/useStorageUrl";
import Bio from "@/components/About/Bio";
import "@/SCSS/AboutMe/AboutMe.scss";

export default function About() {
  const { url: portraitUrl } = useStorageUrl(
    "images/home-page-images/ProfilePicture.jpg",
  );

  return (
    <main className="about-page" aria-labelledby="about-title">
      {portraitUrl && (
        <img
          className="about-page__photo"
          src={portraitUrl}
          alt="Profile portrait"
        />
      )}
      <div className="about-page__container">
        <div className="about-page__header">
          <p className="about-page__eyebrow">About</p>
        </div>

        <div className="about-page__content">
          <div className="about-page__text">
            <Bio />
            <div className="about-page__divider" />
            <div className="about-page__links">
              <a
                href="https://steel-and-shutter.netlify.app/"
                className="about-page__portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Automotive Photography Portfolio →
              </a>

              <a
                href="https://pixel-halide-studios.netlify.app/"
                className="about-page__portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Photography Portfolio →
              </a>
            </div>
          </div>

          <aside className="about-page__sidebar">
            <div className="about-page__card">
              <h2 className="about-page__card-title">Technologies</h2>
              <ul className="about-page__list">
                <li>React / Next.js / Angular</li>
                <li>TypeScript / JavaScript</li>
                <li>Node.js / Express</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Firebase / Docker</li>
                <li>SCSS / Tailwind CSS</li>
              </ul>
            </div>

            <div className="about-page__card">
              <h2 className="about-page__card-title">Certifications</h2>
              <ul className="about-page__list">
                <li>CCNA Security (210-260)</li>
                <li>CCNA Collaboration (210-060)</li>
                <li>Full-Stack Boot Camp — WashU / edX</li>
              </ul>
            </div>

            <div className="about-page__card">
              <h2 className="about-page__card-title">Currently Learning</h2>
              <ul className="about-page__list">
                <li>C# / Game Development</li>
                <li>React Native</li>
                <li>GraphQL / Apollo</li>
                <li>CCNA Recertification</li>
                <li>Python / Django</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}