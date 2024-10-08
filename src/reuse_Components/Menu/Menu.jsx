import './Menu.scss';
import { NavLink } from 'react-router-dom';
import Caret from '../../images/header/CaretDown.svg';

const Menu = ({ data }) => {
  return (
    <nav>
      <ul className='menu'>
        {data.map((item, i) => (
          <li key={i} className='menu-liMenu'>
            <NavLink to={item.linkName}>
              <img src={item.img} alt='fonIMG' />
              <div className='menu-liName'>
                {item.name}
                <img className='menu-liCaret' src={Caret} alt='images' />
              </div>

              {/* <ul className='menu-ulSubmenu'>
              {item.subname.map((item, i) => (
                <li key={i} className='menu-liSubmenu'>
                  <NavLink to={item.linkSubName}>
                    {item.subName}
                  </NavLink>
                </li>
              ))}
            </ul> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
