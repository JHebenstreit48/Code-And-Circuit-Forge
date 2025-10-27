import ProfilePicture from '@/assets/images/ProfilePicture.jpg';
import Bio from '@/components/About/Bio';

import '@/SCSS/AboutMe/AboutMe.scss'; // hero + portrait (fixed)
import '@/SCSS/AboutMe/Bio.scss';     // bio card (fixed)

export default function About() {
  return (
    <main className="aboutHero" aria-labelledby="about-title">
      <div className="aboutHero__inner">
        {/* Title aligns with the text column (no clash with the image) */}
        <h1 id="about-title" className="section-title aboutHero__title">
          About Me
        </h1>

        {/* Portrait column */}
        <div className="aboutHero__media">
          <img
            className="aboutHero__portrait profilePicture"
            src={ProfilePicture}
            alt="Portrait"
            width={320}
            height={400}
            loading="eager"
          />
        </div>

        {/* Bio card column */}
        <div className="aboutHero__text">
          <Bio />
        </div>
      </div>
    </main>
  );
}