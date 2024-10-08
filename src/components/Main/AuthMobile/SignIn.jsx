import './AuthMobile.scss';
import { Field, Form } from 'react-final-form';
import { accountAPI } from '../../../api/info-api';
import { emailValidator, requiredValidator } from '../../../utils/validators';
import { NavLink } from 'react-router-dom';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';
import eyeOpen from '../../../images/header/eyeOpen.png';
import eyeClose from '../../../images/header/eyeClose.png';
import { useRef, useState } from 'react';

const onSubmitEnter = (values) => {
  accountAPI.getSignIn({
    email: values.email,
    password: values.password,
  });
};

const SignIn = () => {
  let enterPasswordRed = useRef();
  const [passShow, setPassShow] = useState(false);
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <div className='authForm-title'>Войти в аккаунт</div>
        <div className='authForm-subtitle'>Введите e-mail и пароль</div>
        <Form
          onSubmit={onSubmitEnter}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name='email' validate={emailValidator}>
                {({ input, meta }) => (
                  <input
                    className={`authForm-input ${
                      meta.error && meta.touched && 'authForm-error'
                    }`}
                    {...input}
                    type='email'
                    placeholder='E-mail'
                  />
                )}
              </Field>
              <Field name='password' validate={requiredValidator}>
                {({ input, meta }) => (
                  <div className='authForm-inputDiv'>
                    <input
                      ref={enterPasswordRed}
                      className={`authForm-input ${
                        meta.error && meta.touched && 'authForm-error'
                      }`}
                      {...input}
                      type={passShow ? 'text' : 'password'}
                      placeholder='Пароль'
                      autoComplete='off'
                    />
                    <img
                      onClick={() => setPassShow(!passShow)}
                      src={passShow ? eyeOpen : eyeClose}
                      alt='eyeIMG'
                    />
                  </div>
                )}
              </Field>
              <button className='BtnGeneral authForm-btn' type='submit'>
                Войти
              </button>
            </form>
          )}
        />
        <div className='authForm-info form-infoTop'>
          <span>Нет аккаунта?</span>
          <NavLink to='/sign_up' className='authForm-link'>
            Создать новый аккаунт
          </NavLink>
        </div>
        <div className='authForm-info'>
          <span>Забыли пароль?</span>
          <NavLink to='/recovery' className='authForm-link'>
            Востановить пароль
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

export default SignIn;
