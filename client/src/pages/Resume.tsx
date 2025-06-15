import Skills from '@/components/ResumeSkills/Skills';
import myResume from '@/assets/Justin-Hebenstreit-Programming-Resume.pdf'
import '@/SCSS/Resume/Resume.scss';

export default function Resume() {
  return (
    <div className="resume-page">

      <div id="skills">
        <h2 className="sectionTitle">Skills</h2>
        <Skills />
      </div>

      <div className="resumeButtonWrapper">
        <a
          href={myResume}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resumeButton"
        >
          Resume
        </a>
      </div>

    </div>
  );
}
