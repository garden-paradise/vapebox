import './AuthMobile.scss';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';
import logo18 from '../../../images/header/logo18.png';
import { NavLink } from 'react-router-dom';

const QuestionMessage = () => {
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <img className='authForm-logo18' src={logo18} alt='lineIMG' />
        <div className='authForm-messageWelcome'>
          Добро пожаловать в Smoky Island
        </div>
        <div className='authForm-messageText'>Вам уже исполнилось 18 лет?</div>
        <div className='authForm-btns'>
          <NavLink onClick={() => localStorage.setItem('adult', 'yes')} to='/'>
            <button className='authForm-btnRed'>Да</button>
          </NavLink>
          <NavLink to='/stop' className='authForm-btnWhite'>
            <button>Нет</button>
          </NavLink>
        </div>
      </section>
      <div className='authForm-down'>
        <NavLink to='/'></NavLink>
        <img src={circle} alt='circleIMG' />
      </div>
    </section>
  );
};

export default QuestionMessage;
