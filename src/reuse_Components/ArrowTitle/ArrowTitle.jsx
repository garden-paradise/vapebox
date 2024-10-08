import './ArrowTitle.scss';
import { NavLink } from 'react-router-dom';
import ArrowLeft from '../../images/main/all/ArrowLeft.svg';

const ArrowTitle = ({ link, title }) => {
  return (
    <NavLink className='NavLink ' to={`/${link}`}>
      <section className='arrowTitle'>
        <img src={ArrowLeft} alt='ArrowLeftIMG' />
        <div className='arrowTitle-title'>{title}</div>
      </section>
    </NavLink>
  );
};

export default ArrowTitle;
