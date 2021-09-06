import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ routes }) => (
  <header>
    <div>
      <img alt="logo" />
      <span>Space Travelers&apos; Hub</span>
    </div>
    <nav>
      <ul className="nav-links">
        {routes.map(({ name, url }) => (
          <li key={url} className="nav-link">
            <NavLink className="nav-link" activeClassName="active" exact to={url}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
