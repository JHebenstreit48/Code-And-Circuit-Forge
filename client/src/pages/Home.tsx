import { Link } from 'react-router-dom';
import Portrait from '@/assets/images/ProfilePicture.jpg';
import myResume from '@/assets/Justin-Hebenstreit-Programming-Resume.pdf';
import { featuredProjects } from '@/data/featuredProjects';
import '@/SCSS/Home.scss';

export default function Home() {
  return (
    <main className="home" aria-labelledby="home-title">
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <img
            className="hero__portrait"
            src={Portrait}
            alt="Portrait"
            width={320}
            height={400}
            loading="eager"
          />
        </div>

        <div className="hero__content">
          <h1 id="home-title" className="hero__title">Full-Stack Developer</h1>
          <p className="hero__tagline">React/TypeScript, clean architecture, data-driven UX.</p>

          <div className="hero__ctas">
            <Link to="/portfolio" className="btn btn--outline">View Projects</Link>
            <a href={myResume} className="btn btn--solid" target="_blank" rel="noreferrer">
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* PREVIEW ROW */}
      <section className="homePreview">
        <div className="homePreview__left">
          <h2 className="homeSectionTitle">Portfolio</h2>

          <div className="homePreview__cards">
            {featuredProjects.map((p) => (
              <Link key={p.id} to={p.to} className="homeCard">
                <div className="homeCard__head">
                  {p.subtitle && <span className="homeCard__kicker">{p.subtitle}</span>}
                  <h3 className="homeCard__title">{p.title}</h3>
                </div>

                {/* bigger image after skills */}
                {p.image && <img className="homeCard__image" src={p.image} alt="" loading="lazy" />}

                {p.tags?.length ? (
                  <div className="homeCard__tags">
                    {p.tags.map((t) => <span key={t} className="homeTag">{t}</span>)}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>

        <aside className="homePreview__right">
          <h2 className="homeSectionTitle">About</h2>
          <p className="about-snippet">
            I ship React/TypeScript apps with clear architecture and data-driven UX,
            from calculators to content systems. Recently: navigation architecture,
            performance tuning, and modeling tricky data.
          </p>
          <p className="about-snippet">
            Next: a role owning front-end architecture and delivering measurable UX wins.
          </p>
          <Link to="/about" className="link-more">More about me →</Link>
        </aside>
      </section>
    </main>
  );
}