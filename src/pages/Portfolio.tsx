import Cards from "@/components/Portfolio/PortfolioCards";
import Data from "@/components/Portfolio/PortfolioData";

type GroupName = NonNullable<(typeof Data)[number]["group"]>;

const GROUP_ORDER: GroupName[] = [
  "Early Projects",
  "Current Projects",
  "Planned Projects",
];

export default function Portfolio() {
  const groupsPresent = Data.some((p) => p.group);

  return (
    <main className="portfolio" aria-labelledby="portfolio-title">
      <h1 id="portfolio-title" className="pageHeader">Portfolio</h1>

      {!groupsPresent ? (
        <div className="cardContainer">
          <div className="row">
            {Data.map((project, index) => (
              <Cards key={project.name + index} {...project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="cardContainer">
          {GROUP_ORDER.map((group) => {
            const items = Data.filter((p) => p.group === group);
            if (!items.length) return null;
            return (
              <section key={group} className="group" aria-labelledby={`group-${group}`}>
                <h2 id={`group-${group}`} className="groupTitle">{group}</h2>
                <div className="row">
                  {items.map((project, index) => (
                    <Cards key={project.name + index} {...project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}