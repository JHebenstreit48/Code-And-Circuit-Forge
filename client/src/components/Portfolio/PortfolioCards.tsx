import { IPortfolioCard } from "@/components/Portfolio/PortfolioData";
import '@/SCSS/Portfolio/PortfolioCards.scss';

export default function Cards(project: IPortfolioCard) {
  return (
    <article className="card text-bg-dark" aria-labelledby={`${project.name}-title`}>
      <h5 id={`${project.name}-title`} className="cardTitle">{project.name}</h5>

      <div className="imageWrapper">
        <img className="cardImg" src={project.image} alt={project.description} loading="lazy" />
      </div>

      {/* tech pills to match Home */}
      <ul className="techList" aria-label="Technologies used">
        {project.tags?.map(t => <li key={t} className="pill">{t}</li>)}
      </ul>

      {/* links */}
      <div className="linksRow">
        {project.gitHubRepo && (
          <a className="btnLink" href={project.gitHubRepo} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" aria-hidden="true"></i><span>GitHub</span>
          </a>
        )}
        {project.deployment && (
          <a className="btnLink" href={project.deployment} target="_blank" rel="noopener noreferrer" aria-label="Live site">
            <i className="fa-solid fa-globe" aria-hidden="true"></i><span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
}