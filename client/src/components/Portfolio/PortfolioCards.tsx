import { IPortfolioCard } from "@/components/Portfolio/PortfolioData";
import "@/SCSS/Portfolio/PortfolioCards.scss";

const PLACEHOLDER_SRC = "/images/placeholder-project.png";

export default function Cards(project: IPortfolioCard) {
  const hasImg = Boolean(project.image);
  const imgSrc = project.image ?? PLACEHOLDER_SRC;

  const hasRepo = Boolean(project.gitHubRepo);
  const hasDeploy = Boolean(project.deployment);
  const comingSoon = !hasRepo || !hasDeploy;

  return (
    <article className="card text-bg-dark" aria-labelledby={`${project.name}-title`}>
      <h5 id={`${project.name}-title`} className="cardTitle">
        {project.name}
      </h5>

      <div className={`imageWrapper ${hasImg ? "" : "isPlaceholder"}`}>
        <img className="cardImg" src={imgSrc} alt={project.description} loading="lazy" />
        {comingSoon && (
          <div className="comingSoonOverlay" aria-hidden="true">
            Coming&nbsp;Soon
          </div>
        )}
      </div>

      <ul className="techList" aria-label="Technologies used">
        {project.tags?.map((t) => (
          <li key={t} className="pill">
            {t}
          </li>
        ))}
      </ul>

      <div className="linksRow">
        {hasRepo ? (
          <a
            className="btnLink"
            href={project.gitHubRepo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>
        ) : (
          <span className="btnLink isDisabled" role="button" aria-disabled="true">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            <span>GitHub</span>
          </span>
        )}

        {hasDeploy ? (
          <a
            className="btnLink"
            href={project.deployment}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live site"
          >
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
            <span>Live</span>
          </a>
        ) : (
          <span className="btnLink isDisabled" role="button" aria-disabled="true">
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
            <span>Live</span>
          </span>
        )}
      </div>
    </article>
  );
}