import { NavLink } from 'react-router-dom';
import './Title.scss';

const Title = ({ title, linkUrl, linkName, style }) => {
  return (
    <section className='title'>
      <div className={`title-name title-${style}`}>{title}</div>
      {linkName && (
        <NavLink
          className={`NavLink title-link title-${style}`}
          to={`/${linkUrl}`}
        >
          {linkName}
        </NavLink>
      )}
    </section>
  );
};

export default Title;
