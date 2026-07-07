import { Link } from 'react-router-dom';
import myResume from '@/assets/2026-Resume.pdf';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { useStorageUrl } from '@/hooks/useStorageUrl';
import '@/SCSS/Home.scss';

export default function Home() {
  const { projects, loading, error } = useFeaturedProjects();

  return (
    <main className="home" aria-labelledby="home-title">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">IT Development Portfolio</p>
          <h1 id="home-title" className="hero__title">
            Full-Stack Developer
          </h1>
          <p className="hero__tagline">
            React/TypeScript, clean architecture, data-driven UX.
          </p>
          <div className="hero__ctas">
            <Link to="/portfolio" className="btn btn--solid">
              View Projects
            </Link>
            <a href={myResume} className="btn btn--outline" target="_blank" rel="noreferrer">
              Download Résumé
            </a>
          </div>
        </div>

        {/* Scroll indicator — mirrors Steel & Shutter's gold line, but in cyan */}
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio__divider">
          <hr />
          <h2 id="portfolio-title" className="portfolio__heading">
            Portfolio
          </h2>
          <hr />
        </div>

        <div className="portfolio__cards">
          {loading && <p className="portfolio__status">Loading projects…</p>}
          {error   && <p className="portfolio__status">{error}</p>}
          {!loading && projects.map((p) => (
            <Link key={p.id} to={p.to} className="homeCard">
              <div className="homeCard__head">
                {p.subtitle && (
                  <span className="homeCard__kicker">{p.subtitle}</span>
                )}
                <h3 className="homeCard__title">{p.title}</h3>
              </div>
              {p.image && <ProjectImage path={p.image} />}
              {p.tags?.length ? (
                <div className="homeCard__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="homeTag">{t}</span>
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

function ProjectImage({ path }: { path: string }) {
  const { url } = useStorageUrl(
    `images/portfolio-images/${path.split('/').pop()}`
  );
  return url ? (
    <img className="homeCard__image" src={url} alt="" loading="lazy" />
  ) : null;
}