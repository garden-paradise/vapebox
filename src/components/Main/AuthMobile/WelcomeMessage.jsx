import './AuthMobile.scss';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';
import { NavLink } from 'react-router-dom';

const WelcomeMessage = () => {
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <div className='authForm-title'>Здравствуйте, Анна!</div>
        <div className='authForm-messageBlock'>
          <div className='authForm-messageSubText'>
            Вы зарегистрировались на сайте Smoky Island
          </div>
          <div className='authForm-messageText'>
            Пора приступить к покупкам!
          </div>
          <NavLink to='/catalog/popular'>
            <button className='BtnGeneral authForm-btnCatalog'>
              Перейти в каталог
            </button>
          </NavLink>
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

export default WelcomeMessage;
