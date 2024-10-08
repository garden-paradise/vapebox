import './AuthMobile.scss';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';
import { NavLink } from 'react-router-dom';

const MailMessage = () => {
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <div className='authForm-title'>Проверьте почту!</div>
        <div className='authForm-messageBlock'>
          <div className='authForm-messageText'>
            Мы выслали на Вашу почту ссылку для подтверждения регистрации
          </div>
        </div>
      </section>
      <div className='authForm-down'>
        <NavLink to='/' className='authForm-navLink'>
          Главная
        </NavLink>
        <img src={circle} alt='circleIMG' />
      </div>
    </section>
  );
};

export default MailMessage;
