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
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  let enterPasswordRed = useRef();
  const history = useHistory();
  const [passShow, setPassShow] = useState(false);
  const onSubmitRegistration = async (values) => {
    let data = await accountAPI.getSignUp({
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
    });
    data.status === 200 && history.push('/mail_message');
  };
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <div className='authForm-title'>Создать аккаунт</div>
        <div className='authForm-subtitle'>Пожалуйста, заполните поля:</div>
        <Form
          onSubmit={onSubmitRegistration}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name='name' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`authForm-input ${
                      meta.error && meta.touched && 'authForm-error'
                    }`}
                    {...input}
                    type='text'
                    placeholder='Имя'
                  />
                )}
              </Field>
              <Field name='surname' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`authForm-input ${
                      meta.error && meta.touched && 'authForm-error'
                    }`}
                    {...input}
                    type='text'
                    placeholder='Фамилия'
                  />
                )}
              </Field>
              <Field name='email' validate={emailValidator}>
                {({ input, meta }) => (
                  <input
                    className={`authForm-input ${
                      meta.error && meta.touched && 'authForm-error'
                    }`}
                    {...input}
                    type='text'
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
        <div className='form-info form-infoTop'>
          <div>Есть аккаунт?</div>
          <NavLink to='/sign_in' className='authForm-link'>
            Войти здесь
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

export default SignUp;
