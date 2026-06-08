import { Link } from 'react-router-dom';
import Portrait from '@/assets/images/ProfilePicture.jpg';
import myResume from '@/assets/2026-Resume.pdf';
import { featuredProjects } from '@/data/featuredProjects';
import '@/SCSS/Home.scss';

export default function Home() {
  return (
    <main className="home" aria-labelledby="home-title">
      <section className="hero">
        {/* COL 1: PORTRAIT */}
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__portrait"
            src={Portrait}
            alt="Portrait"
          />
        </div>

        {/* COL 2: TITLE + CTAS */}
        <div className="hero__content">
          <h1 id="home-title" className="hero__title">
            Full-Stack Developer
          </h1>

          <p className="hero__tagline">
            React/TypeScript, clean architecture, data-driven UX.
          </p>

          <div className="hero__ctas">
            <Link to="/portfolio" className="btn btn--outline">
              View Projects
            </Link>
            <a
              href={myResume}
              className="btn btn--solid"
              target="_blank"
              rel="noreferrer"
            >
              Download Résumé
            </a>
          </div>
        </div>

        {/* COL 3: ABOUT, ALIGNED WITH TITLE */}
        <aside className="hero__about">
          <h2 className="homeSectionTitle homeSectionTitle--about">About</h2>
          <p className="about-snippet">
            I ship React/TypeScript apps with clear architecture and data-driven UX,
            from calculators to content systems. Recently: navigation architecture,
            performance tuning, and modeling tricky data.
          </p>
          <p className="about-snippet">
            Next: a role owning front-end architecture and delivering measurable UX wins.
          </p>
          <Link to="/about" className="link-more">
            More about me →
          </Link>
        </aside>

        {/* ROW 2: PORTFOLIO DIVIDER SPANNING COLS 2–3 */}
        <div className="hero__divider">
          <hr />
          <h2 className="homeSectionTitle">Portfolio</h2>
          <hr />
        </div>

        {/* ROW 3: CARDS SPANNING COLS 2–3 (ROOM FOR 3 ACROSS) */}
        <div className="hero__cards">
          {featuredProjects.map((p) => (
            <Link key={p.id} to={p.to} className="homeCard">
              <div className="homeCard__head">
                {p.subtitle && (
                  <span className="homeCard__kicker">{p.subtitle}</span>
                )}
                <h3 className="homeCard__title">{p.title}</h3>
              </div>

              {p.image && (
                <img
                  className="homeCard__image"
                  src={p.image}
                  alt=""
                  loading="lazy"
                />
              )}

              {p.tags?.length ? (
                <div className="homeCard__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="homeTag">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}