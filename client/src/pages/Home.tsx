import { Link } from 'react-router-dom';
import Portrait from '@/assets/images/ProfilePicture.jpg';
import myResume from '@/assets/Justin-Hebenstreit-Programming-Resume.pdf';
import { featuredProjects } from '@/data/featuredProjects';   // ✅ new
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
      <section className="preview">
        <div className="preview__left">
          <h2 className="section-title">Portfolio</h2>

          <div className="preview__cards">
            {featuredProjects.map((p) => (
              <Link key={p.id} to={p.to} className="card">
                {p.image && <img className="card__image" src={p.image} alt="" loading="lazy" />}
                <div className="card__head">
                  {p.subtitle && <span className="card__kicker">{p.subtitle}</span>}
                  <h3 className="card__title">{p.title}</h3>
                </div>
                {p.tags?.length ? (
                  <div className="card__tags">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>

        <aside className="preview__right">
          <h2 className="section-title">About</h2>
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