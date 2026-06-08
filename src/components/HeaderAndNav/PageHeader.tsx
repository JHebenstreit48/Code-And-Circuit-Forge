import { useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/": "About",
  "/portfolio": "Portfolio",
  "/resume": "Skills",
  "/contact": "Contact",
};

export default function PageHeader() {
  const path = useLocation().pathname;
  const title = PAGE_TITLES[path] ?? "Page";
  return (
    <div className="pageHeaderContainer">
      <h1 className="pageHeader section-title">{title}</h1>
    </div>
  );
}