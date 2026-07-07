import Cards from "@/components/Portfolio/PortfolioCards";
import { usePortfolioCards } from "@/hooks/usePortfolioCards";
import { IPortfolioCard } from "@/types/portfolio";

const GROUP_ORDER: NonNullable<IPortfolioCard["group"]>[] = [
  "Early Projects",
  "Current Projects",
  "Planned Projects",
];

export default function Portfolio() {
  const { cards, loading, error } = usePortfolioCards();
  const groupsPresent = cards.some((p) => p.group);

  return (
    <main className="portfolio" aria-labelledby="portfolio-title">
      <h1 id="portfolio-title" className="pageHeader">Portfolio</h1>

      {loading && <p className="portfolioStatus">Loading projects…</p>}
      {error && <p className="portfolioStatus">{error}</p>}

      {!loading && !error && (!groupsPresent ? (
        <div className="cardContainer">
          <div className="row">
            {cards.map((project) => (
              <Cards key={project.id} {...project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="cardContainer">
          {GROUP_ORDER.map((group) => {
            const items = cards.filter((p) => p.group === group);
            if (!items.length) return null;
            const isCompact = group === "Early Projects";
            return (
              <section key={group} className="group" aria-labelledby={`group-${group}`}>
                <h2 id={`group-${group}`} className="groupTitle">{group}</h2>
                <div className={`row ${isCompact ? "row--compact" : ""}`}>
                  {items.map((project) => (
                    <Cards key={project.id} {...project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ))}
    </main>
  );
}