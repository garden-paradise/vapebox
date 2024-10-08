import './Menu.scss';
import { NavLink } from 'react-router-dom';
import Caret from '../../images/header/CaretDown.svg';

const Menu = ({ data }) => {
  return (
    <nav className='NavLink'>
      <ul className='NavLink_ul, topmenu'>
        {data.map((item) => (
          <li>
            <NavLink to={item.linkName} className='NavLink_li'>
              <a href='' className='submenu-link'>
                <div className='NavLink_link_div'>
                  {item.name}
                  <img className='NavLink_link_img' src={Caret} alt='images' />
                </div>
              </a>
              <ul className='submenu'>
                {item.subname.map((item) => (
                  <li className='submenu_li'>
                    <NavLink to={item.linkSubName} className=''>
                      <a className='submenu_a' href=''>
                        {item.subName}
                      </a>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
