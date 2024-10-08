import './AuthMobile.scss';
import { Field, Form } from 'react-final-form';
import { accountAPI } from '../../../api/info-api';
import { emailValidator } from '../../../utils/validators';
import { NavLink } from 'react-router-dom';
import circle from '../../../images/main/authMobile/circle.png';
import line from '../../../images/main/authMobile/line.png';

const onSubmitRecovery = (values) => {
  console.log(values);
  accountAPI.getChangePassword({
    email: values.email,
  });
};

const Recovery = () => {
  return (
    <section className='authForm'>
      <img src={line} alt='lineIMG' />
      <section className='authForm-form'>
        <div className='authForm-title'>Востановить пароль</div>
        <div className='authForm-subtitle'>Введите e-mail адрес:</div>
        <Form
          onSubmit={onSubmitRecovery}
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
              <button className='BtnGeneral authForm-btn' type='submit'>
                Войти
              </button>
            </form>
          )}
        />
        <div className='authForm-info form-infoTop'>
          <div>Вспомнили пароль?</div>
          <NavLink to='/sign_in' className='authForm-link'>
            Вернуться на страницу входа
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

export default Recovery;
