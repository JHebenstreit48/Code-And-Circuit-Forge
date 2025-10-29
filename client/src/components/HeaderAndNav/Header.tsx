import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '@/components/HeaderAndNav/Navigation';
import links from '@/components/HeaderAndNav/navigationLinks';
import '@/SCSS/HeaderNavAndFooter/Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className="GlassWrapper">
      <div className="GlassWrapper__inner">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand__text">Justin Hebenstreit</span>
        </Link>

        {/* Desktop nav */}
        <Navigation />

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobileNav"
          aria-expanded={open}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer (hidden on desktop by CSS) */}
      <nav id="mobileNav" className={`mobileNav ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {links.map(({ title, path }) => (
          <NavLink key={title} to={path} className="mobileNav__link" onClick={close}>
            {title}
          </NavLink>
        ))}
      </nav>

      {/* Backdrop (hidden on desktop by CSS) */}
      <button
        className={`mobileBackdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        onClick={close}
      />
    </header>
  );
}