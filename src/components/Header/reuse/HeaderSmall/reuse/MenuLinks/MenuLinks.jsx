import { NavLink } from 'react-router-dom';
import './MenuLinks.scss';

const MenuLinks = ({ links, hideMenu }) => {
  return (
    <section className='menuLinks'>
      {links.map((link, i) => (
        <NavLink
          key={i}
          onClick={hideMenu}
          to={`/${link.link}`}
          className='menuLinks-link'
        >
          <div>{link.name}</div>
        </NavLink>
      ))}
    </section>
  );
};

export default MenuLinks;
