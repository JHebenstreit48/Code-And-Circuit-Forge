// Header.tsx
import Navigation from "@/components/HeaderAndNav/Navigation";
import "@/SCSS/HeaderNavAndFooter/Header.scss";

export default function Header() {
  return (
    <header className="GlassWrapper">
      <div className="GlassWrapper__inner">
        <a href="/" className="brand" aria-label="Home">
          <span className="brand__text">Justin Hebenstreit</span>
        </a>
        <Navigation />
      </div>
    </header>
  );
}