import Bio from '@/components/About/Bio';
import '@/SCSS/AboutMe/AboutMe.scss';
import '@/SCSS/AboutMe/Bio.scss';

export default function About() {
  return (
    <main className="aboutHero" aria-labelledby="about-title">
      {/* Title sits in its own head container with NO side padding */}
      <div className="aboutHero__head">
        <h1 id="about-title" className="section-title aboutHero__title">About Me</h1>
      </div>

      {/* Content container keeps the normal gutters */}
      <div className="aboutHero__inner">
        <div className="aboutHero__text">
          <Bio />
        </div>
      </div>
    </main>
  );
}