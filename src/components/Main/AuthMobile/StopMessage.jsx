import './AuthMobile.scss';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';
import logo18 from '../../../images/header/logo18.png';
import { NavLink } from 'react-router-dom';

const StopMessage = () => {
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <img className='authForm-logo18' src={logo18} alt='lineIMG' />
        <div className='authForm-messageWelcome'>Вход запрещен!</div>
      </section>
      <div className='authForm-down'>
        <NavLink to='/'></NavLink>
        <img src={circle} alt='circleIMG' />
      </div>
    </section>
  );
};

export default StopMessage;
