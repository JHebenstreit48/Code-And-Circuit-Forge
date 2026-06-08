import { Link } from 'react-router-dom';
import myResume from '@/assets/2026-Resume.pdf';
import { useFeaturedProjects } from '@/hooks/useFeaturedProjects';
import { useStorageUrl } from '@/hooks/useStorageUrl';
import '@/SCSS/Home.scss';

export default function Home() {
  const { projects, loading, error } = useFeaturedProjects();
  const { url: portraitUrl } = useStorageUrl('images/home-page-images/ProfilePicture.jpg');

  return (
    <main className="home" aria-labelledby="home-title">
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__portrait"
            src={portraitUrl ?? ''}
            alt="Portrait"
          />
        </div>

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
            <a href={myResume} className="btn btn--solid" target="_blank" rel="noreferrer">
              Download Résumé
            </a>
          </div>
        </div>

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
          <Link to="/about" className="link-more">More about me →</Link>
        </aside>

        <div className="hero__divider">
          <hr />
          <h2 className="homeSectionTitle">Portfolio</h2>
          <hr />
        </div>

        <div className="hero__cards">
          {loading && <p>Loading projects...</p>}
          {error && <p>{error}</p>}
          {!loading && projects.map((p) => (
            <Link key={p.id} to={p.to} className="homeCard">
              <div className="homeCard__head">
                {p.subtitle && <span className="homeCard__kicker">{p.subtitle}</span>}
                <h3 className="homeCard__title">{p.title}</h3>
              </div>
              {p.image && (
                <ProjectImage path={p.image} />
              )}
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
  const { url } = useStorageUrl(`images/home-page-images/${path.split('/').pop()}`);
  return url ? (
    <img className="homeCard__image" src={url} alt="" loading="lazy" />
  ) : null;
}