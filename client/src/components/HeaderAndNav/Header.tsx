import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from "@/components/HeaderAndNav/Navigation";
import "@/SCSS/HeaderNavAndFooter/Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  // same links from Navigation.tsx, duplicated locally (no exports = no warning)
  const links = [
    { title: 'About', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Skills', path: '/resume' },
    { title: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="GlassWrapper">
      <div className="GlassWrapper__inner">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand__text">Justin Hebenstreit</span>
        </Link>

        {/* Desktop nav (hidden on mobile) */}
        <Navigation />

        {/* Hamburger icon (mobile only) */}
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-controls="mobileNav"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav id="mobileNav" className={`mobileNav ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {links.map(({ title, path }) => (
          <NavLink key={title} to={path} className="mobileNav__link" onClick={close}>
            {title}
          </NavLink>
        ))}
      </nav>

      {/* Backdrop */}
      <button
        className={`mobileBackdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        onClick={close}
      />
    </header>
  );
}