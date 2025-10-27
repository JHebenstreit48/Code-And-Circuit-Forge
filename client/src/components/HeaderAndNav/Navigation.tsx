import { NavLink } from 'react-router-dom';
import '@/SCSS/HeaderNavAndFooter/Navigation.scss';

const links = [
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Skills', path: '/resume' },   // your Skills page lives at /resume
  { title: 'Contact', path: '/contact' },
  // If you later add a dedicated résumé HTML/PDF route, add it here.
];

export default function Navigation() {
  return (
    <nav className="mainNav" aria-label="Primary">
      <ul className="mainNav__list">
        {links.map(({ title, path }) => (
          <li key={title} className="mainNav__item">
            <NavLink
              to={path}
              end={path === '/'} // exact match for home
              className={({ isActive }: { isActive: boolean }) =>
                `mainNav__link${isActive ? ' is-active' : ''}`
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
