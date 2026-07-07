export type ProjectGroup = "Early Projects" | "Current Projects" | "Planned Projects";

export interface IPortfolioCard {
  id: string;
  image?: string;
  name: string;
  description: string;
  gitHubRepo?: string;
  deployment?: string;
  tags: string[];
  group?: ProjectGroup;
}