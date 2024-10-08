import './HeaderSmall.scss';
import User from '../../../../images/header/User.svg';
import Shopping from '../../../../images/header/Shopping.svg';
import Search from '../../../../images/header/MagnifyingGlass.svg';
import logo from '../../../../images/header/logo.svg';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import MenuLinks from './reuse/MenuLinks/MenuLinks';
import { useRef, useState } from 'react';
import {
  emailValidator,
  requiredValidator,
} from '../../../../utils/validators';
import { accountAPI } from '../../../../api/info-api';
import { Redirect } from 'react-router-dom';

const onSubmitSearch = (values) => {
  console.log(values);
};
const onSubmitEnter = (values) => {
  values.newPassword === values.confirmedPassword && console.log('12312');
  accountAPI.getSignIn({
    email: values.email,
    password: values.password,
  });
};
const onSubmitRegistration = (values) => {
  values.newPassword === values.confirmedPassword && console.log('12312');
  accountAPI.getSignUp({
    name: values.name,
    surname: values.surname,
    email: values.email,
    password: values.password,
  });
};
const onSubmitRecovery = (values) => {
  values.newPassword === values.confirmedPassword && console.log('12312');
  console.log(values);
  accountAPI.getChangePassword({
    email: values.email,
  });
};

const HeaderSmall = (props) => {
  const [menuForm, setMenuForm] = useState(null);
  const menuCheckboxRef = useRef(null);
  let hideMenu = () => {
    menuCheckboxRef.current.checked = false;
  };
  let overflowBody = () => {
    menuCheckboxRef.current.checked
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  };

  return (
    <header className='Container headerSmall'>
      <input
        ref={menuCheckboxRef}
        type='checkbox'
        id='hmt'
        className='MenuInput'
        onClick={overflowBody}
        // onClick={hideMenu}
      ></input>
      <label className='MenuBtn' htmlFor='hmt'>
        <span className='first'></span>
        <span className='second'></span>
        <span className='third'></span>
      </label>
      <NavLink onClick={hideMenu} to='/'>
        <img className='headerSmall-logo' src={logo} alt='logoIMG' />
      </NavLink>
      <div onClick={hideMenu} className='headerSmall-right'>
        <NavLink to='/basket'>
          <img src={Shopping} alt='ShoppingIMG' />
        </NavLink>
        <div>
          {menuForm !== null && (
            <div
              onClick={() => {
                if (window.innerWidth > 480) {
                  document.body.style.overflow = 'auto';
                }
                setMenuForm(null);
              }}
              className='forms-backdrop'
            ></div>
          )}
          {localStorage.getItem('token') !== null ? (
            <NavLink to='/account/personal'>
              <img src={User} alt='UserIMG' />
            </NavLink>
          ) : (
            <img
              onClick={() => {
                if (window.innerWidth > 480) {
                  document.body.style.overflow = 'hidden';
                }
                setMenuForm('enter');
              }}
              className='headerBig-userImg'
              src={User}
              alt='UserIMG'
            />
          )}
          {menuForm === 'enter' && window.innerWidth > 480 && (
            <section className='forms'>
              <div className='forms-title'>Войти в аккаунт</div>
              <div className='forms-subtitle'>Введите e-mail и пароль</div>
              <Form
                onSubmit={onSubmitEnter}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Field name='email' validate={emailValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
                          }`}
                          {...input}
                          type='email'
                          placeholder='E-mail'
                        />
                      )}
                    </Field>
                    <Field name='password' validate={requiredValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
                          }`}
                          {...input}
                          type='text'
                          placeholder='Пароль'
                        />
                      )}
                    </Field>
                    <button className='BtnGeneral forms-btn' type='submit'>
                      Войти
                    </button>
                  </form>
                )}
              />
              <div className='forms-info form-infoTop'>
                <span>Нет аккаунта?</span>
                <span onClick={() => setMenuForm('registration')}>
                  Создать новый аккаунт
                </span>
              </div>
              <div className='forms-info'>
                <span>Забыли пароль?</span>
                <span onClick={() => setMenuForm('recovery')}>
                  Востановить пароль
                </span>
              </div>
              <Redirect exact from='*' to='/' />
            </section>
          )}
          {menuForm === 'enter' && window.innerWidth < 480 && (
            <Redirect to='/sign_in' />
          )}
          {menuForm === 'registration' && window.innerWidth > 480 && (
            <section className='forms'>
              <div className='forms-title'>Создать аккаунт</div>
              <div className='forms-subtitle'>Пожалуйста, заполните поля:</div>
              <Form
                onSubmit={onSubmitRegistration}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Field name='name' validate={requiredValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
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
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
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
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
                          }`}
                          {...input}
                          type='text'
                          placeholder='E-mail'
                        />
                      )}
                    </Field>
                    <Field name='password' validate={requiredValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
                          }`}
                          {...input}
                          type='text'
                          placeholder='Пароль'
                        />
                      )}
                    </Field>
                    <button className='BtnGeneral forms-btn' type='submit'>
                      Войти
                    </button>
                  </form>
                )}
              />
              <div className='form-info form-infoTop'>
                <span>Есть аккаунт?</span>
                <span onClick={() => setMenuForm('enter')}>Войти здесь</span>
              </div>
            </section>
          )}
          {menuForm === 'recovery' && window.innerWidth > 480 && (
            <section className='forms'>
              <div className='forms-title'>Востановить пароль</div>
              <div className='forms-subtitle'>Введите e-mail адрес:</div>
              <Form
                onSubmit={onSubmitRecovery}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Field name='email' validate={emailValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`forms-input ${
                            meta.error && meta.touched && 'forms-error'
                          }`}
                          {...input}
                          type='text'
                          placeholder='E-mail'
                        />
                      )}
                    </Field>
                    <button className='BtnGeneral forms-btn' type='submit'>
                      Войти
                    </button>
                  </form>
                )}
              />
              <div className='forms-info forms-infoTop'>
                <div>Вспомнили пароль?</div>
                <span onClick={() => setMenuForm('enter')}>
                  Вернуться на страницу входа
                </span>
              </div>
            </section>
          )}
        </div>
      </div>
      <section className='Menu'>
        <Form
          onSubmit={onSubmitSearch}
          render={({ handleSubmit }) => (
            <form className='headerSmall-form' onSubmit={handleSubmit}>
              <Field name='searchText'>
                {({ input }) => (
                  <input
                    className='headerSmall-input'
                    {...input}
                    type='text'
                    placeholder='Введите текст для поиска'
                  />
                )}
              </Field>
              <img
                className='headerSmall-formImg'
                src={Search}
                alt='searchIMG'
              />
            </form>
          )}
        />
        <MenuLinks
          links={[
            {
              name: 'Продукция',
              link: 'catalog',
            },
            {
              name: 'Избраное',
              link: 'account/personal',
            },
            {
              name: 'Сравнение',
              link: 'comparison',
            },
            {
              name: 'Доставка',
              link: 'delivery',
            },
            {
              name: 'Блог',
              link: 'blog',
            },
            {
              name: 'Контакты',
              link: 'contacts',
            },
            {
              name: 'О нас',
              link: 'about',
            },
            {
              name: 'Магазины',
              link: 'shops',
            },
          ]}
          hideMenu={hideMenu}
        />
      </section>
    </header>
  );
};
export default HeaderSmall;
