import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavLinks/NavLinks.scss';

const NavLinks = ({ data }) => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        {data.map((item, i) => (
          <li key={i} className='nav-li'>
            <NavLink to={`/${item.url}`} className='nav-link'>
              {item.name}
              {!item.active ? <span className='nav-line'>/</span> : ''}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
