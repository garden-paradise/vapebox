import './NavigLink.scss';
import { NavLink } from 'react-router-dom';

const NavigLink = ({ data }) => {
  return (
    <nav className='NavLink'>
      <ul className='NavLink-ul'>
        {data.map((item, i) => (
          <li key={i} className='NavLink-li'>
            <NavLink to={item.link} className='NavLink'>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigLink;
