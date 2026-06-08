import { NavLink } from 'react-router-dom';
import links from '@/components/HeaderAndNav/navigationLinks';
import '@/SCSS/HeaderNavAndFooter/Navigation.scss';

export default function Navigation() {
  return (
    <nav className="mainNav" aria-label="Primary">
      <ul className="mainNav__list">
        {links.map(({ title, path }) => (
          <li key={title} className="mainNav__item">
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                'mainNav__link' + (isActive ? ' is-active' : '')
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