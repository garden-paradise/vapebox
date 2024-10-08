import NavigLink from '../../../../reuse_Components/NavigLink/NavigLink';
import './HeaderBig.scss';
import eyeOpen from '../../../../images/header/eyeOpen.png';
import eyeClose from '../../../../images/header/eyeClose.png';
import map from '../../../../images/header/MapPinLine.svg';
import User from '../../../../images/header/User.svg';
import Shopping from '../../../../images/header/Shopping.svg';
import ArrowsClockwiseW from '../../../../images/header/ArrowsClockwiseW.svg';
import logo from '../../../../images/header/logo.svg';
import newMenu from '../../../../images/header/newMenu.png';
import POD from '../../../../images/header/POD.png';
import Vaip from '../../../../images/header/Vaip.png';
import Water from '../../../../images/header/Water.png';
import Automaz from '../../../../images/header/Automaz.png';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import Menu from '../../../../reuse_Components/Menu/Menu';
import { accountAPI } from '../../../../api/info-api';
import { useRef, useState } from 'react';
import {
  emailValidator,
  requiredValidator,
} from '../../../../utils/validators';
import { useLocation } from 'react-router-dom';

const onSubmitRegistration = (values) => {
  accountAPI.getSignUp({
    name: values.name,
    surname: values.surname,
    email: values.email,
    password: values.password,
  });
};
const onSubmitRecovery = (values) => {
  accountAPI.getChangePassword({
    email: values.email,
  });
};

const HeaderBig = (props) => {
  let location = useLocation();
  let enterPasswordRed = useRef();
  const [passShow, setPassShow] = useState(false);
  const [menuForm, setMenuForm] = useState(
    localStorage.getItem('token') === null ? 'enter' : 'entered'
  );
  const onSubmitEnter = async (values) => {
    const data = await accountAPI.getSignIn({
      email: values.email,
      password: values.password,
    });
    if (data.status === 200) {
      setMenuForm('entered');
      window.location.reload();
    }
  };
  const onSubmitSearch = (values) => {
    console.log(values);
    props.searchText(values);
  };

  return (
    <header className='headerBig'>
      <section className='headerBig-bgdRed'>
        <section className='headerBig-sec1'>
          <NavigLink
            data={[
              {
                link: '/delivery',
                name: 'Доставка',
              },
              { link: '/blog', name: 'Блог' },
              { link: '/contacts', name: 'Контакты' },
              { link: '/about', name: 'О нас' },
            ]}
          />
          <div className='headerBig-sec1Right'>
            <NavLink className='NavLink headerBig-sec1RightShop' to='/shops'>
              <img src={map} alt='imageMap' />
              <span className='headerBig-sec1RightTitle'>Магазины</span>
            </NavLink>
            <a className='headerBig-sec1RightTel' href='tel: 84995145626'>
              8 499 514 56 26
            </a>
          </div>
        </section>
      </section>

      <section className='headerBig-sec2'>
        <NavLink to='/'>
          <img src={logo} alt='logoIMG' />
        </NavLink>

        <Form
          onSubmit={onSubmitSearch}
          render={({ handleSubmit }) => (
            <form className='headerBig-sec2Form' onSubmit={handleSubmit}>
              <Field name='text'>
                {({ input }) => (
                  <input
                    className='headerBig-sec2FormInput'
                    {...input}
                    type='text'
                    placeholder='Введите текст для поиска'
                  />
                )}
              </Field>
              <button className='headerBig-sec2FormBtn' type='submit'></button>
            </form>
          )}
        />
        <div className='headerBig-sec2Right'>
          <NavLink to='/comparison'>
            <img src={ArrowsClockwiseW} alt='ArrowsClockwiseIMG' />
          </NavLink>
          <NavLink to='/basket'>
            <img src={Shopping} alt='ShoppingIMG' />
            {props.itemCountBasket !== 0 && (
              <div className='headerBig-sec2RightBasket'>
                {props.itemCountBasket}
              </div>
            )}
          </NavLink>
          <div className='headerBig-accountMenu'>
            <img
              onClick={() => props.getMenuOpen(!props.menuOpen)}
              className='headerBig-userImg'
              src={User}
              alt='UserIMG'
            />
            {menuForm === 'entered' && props.accountInfo && (
              <section className={`form ${props.menuOpen && 'formOpen'}`}>
                <ul className='tabs'>
                  <li>
                    <a></a>
                  </li>
                </ul>
                <section className='form-form'>
                  <div className='form-title'>
                    Привет {props.accountInfo.name}!
                  </div>
                  <NavLink
                    onClick={() => props.getMenuOpen(!props.menuOpen)}
                    to='/account/personal'
                  >
                    <div className='form-block'>Личные данные</div>
                  </NavLink>
                  <NavLink
                    onClick={() => props.getMenuOpen(!props.menuOpen)}
                    to='/account/orders'
                  >
                    <div className='form-block'>Мои заказы </div>
                  </NavLink>
                  <NavLink
                    onClick={() => props.getMenuOpen(!props.menuOpen)}
                    to='/account/favorites'
                  >
                    <div className='form-block'>Избраное</div>
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setMenuForm('enter');
                      localStorage.removeItem('token');
                    }}
                    className='form-exit'
                    to={`${
                      location.pathname === '/account/personal' ||
                      location.pathname === '/account/favorites' ||
                      location.pathname === '/account/orders'
                        ? '/'
                        : location.pathname
                    }`}
                  >
                    Выйти
                  </NavLink>
                </section>
              </section>
            )}
            {menuForm === 'enter' && (
              <section
                id='enter'
                className={`form ${props.menuOpen && 'formOpen'}`}
              >
                <ul className='tabs'>
                  <li>
                    <a></a>
                  </li>
                </ul>
                <section className='form-form'>
                  <div className='form-title'>Войти в аккаунт</div>
                  <div className='form-subtitle'>Введите e-mail и пароль</div>
                  <Form
                    onSubmit={onSubmitEnter}
                    render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name='email' validate={emailValidator}>
                          {({ input, meta }) => (
                            <input
                              className={`form-input ${
                                meta.error && meta.touched && 'form-error'
                              }`}
                              {...input}
                              type='email'
                              placeholder='E-mail'
                            />
                          )}
                        </Field>
                        <Field name='password' validate={requiredValidator}>
                          {({ input, meta }) => (
                            <div className='form-inputDiv'>
                              <input
                                ref={enterPasswordRed}
                                className={`form-input ${
                                  meta.error && meta.touched && 'form-error'
                                }`}
                                {...input}
                                type={passShow ? 'text' : 'password'}
                                placeholder='Пароль'
                              />
                              <img
                                onClick={() => setPassShow(!passShow)}
                                src={passShow ? eyeOpen : eyeClose}
                                alt='eyeIMG'
                              />
                            </div>
                          )}
                        </Field>
                        <button className='BtnGeneral form-btn' type='submit'>
                          Войти
                        </button>
                      </form>
                    )}
                  />
                  <div className='form-info form-infoTop'>
                    <span>Нет аккаунта?</span>
                    <span onClick={() => setMenuForm('registration')}>
                      Создать новый аккаунт
                    </span>
                  </div>
                  <div className='form-info'>
                    <span>Забыли пароль?</span>
                    <span onClick={() => setMenuForm('recovery')}>
                      Востановить пароль
                    </span>
                  </div>
                </section>
              </section>
            )}
            {menuForm === 'registration' && (
              <section className={`form ${props.menuOpen && 'formOpen'}`}>
                <ul className='tabs'>
                  <li>
                    <a></a>
                  </li>
                </ul>
                <section className='form-form'>
                  <div className='form-title'>Создать аккаунт</div>
                  <div className='form-subtitle'>
                    Пожалйста, заполните поля:
                  </div>
                  <Form
                    onSubmit={onSubmitRegistration}
                    render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name='name' validate={requiredValidator}>
                          {({ input, meta }) => (
                            <input
                              className={`form-input ${
                                meta.error && meta.touched && 'form-error'
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
                              className={`form-input ${
                                meta.error && meta.touched && 'form-error'
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
                              className={`form-input ${
                                meta.error && meta.touched && 'form-error'
                              }`}
                              {...input}
                              type='text'
                              placeholder='E-mail'
                            />
                          )}
                        </Field>
                        <Field name='password' validate={requiredValidator}>
                          {({ input, meta }) => (
                            <div className='form-inputDiv'>
                              <input
                                ref={enterPasswordRed}
                                className={`form-input ${
                                  meta.error && meta.touched && 'form-error'
                                }`}
                                {...input}
                                type={passShow ? 'text' : 'password'}
                                placeholder='Пароль'
                              />
                              <img
                                onClick={() => setPassShow(!passShow)}
                                src={passShow ? eyeOpen : eyeClose}
                                alt='eyeIMG'
                              />
                            </div>
                          )}
                        </Field>
                        <button className='BtnGeneral form-btn' type='submit'>
                          Войти
                        </button>
                      </form>
                    )}
                  />
                  <div className='form-info form-infoTop'>
                    <span>Есть аккаунт?</span>
                    <span onClick={() => setMenuForm('enter')}>
                      Войти здесь
                    </span>
                  </div>
                </section>
              </section>
            )}
            {menuForm === 'recovery' && (
              <section className={`form ${props.menuOpen && 'formOpen'}`}>
                <ul className='tabs'>
                  <li>
                    <a></a>
                  </li>
                </ul>
                <section className='form-form'>
                  <div className='form-title'>Востановить пароль</div>
                  <div className='form-subtitle'>Введите e-mail адрес:</div>
                  <Form
                    onSubmit={onSubmitRecovery}
                    render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name='email' validate={emailValidator}>
                          {({ input, meta }) => (
                            <input
                              className={`form-input ${
                                meta.error && meta.touched && 'form-error'
                              }`}
                              {...input}
                              type='text'
                              placeholder='E-mail'
                            />
                          )}
                        </Field>
                        <button className='BtnGeneral form-btn' type='submit'>
                          Войти
                        </button>
                      </form>
                    )}
                  />
                  <div className='form-info form-infoTop'>
                    <div>Вспомнили пароль?</div>
                    <span onClick={() => setMenuForm('enter')}>
                      Вернуться на страницу входа
                    </span>
                  </div>
                </section>
              </section>
            )}
          </div>
        </div>
      </section>

      <section className='headerBig-bgdWhite'>
        <section className='headerBig-sec3'>
          <Menu
            data={[
              {
                linkName: '/',
                img: newMenu,
                name: 'Новинки',
                subname: [
                  { subName: 'Дом', linkSubName: '/1' },
                  { subName: 'Квартира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/catalog/pod',
                img: POD,
                name: 'POD-системы',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/catalog/ejuice',
                img: Vaip,
                name: 'Жидкости',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/catalog/disposableVape',
                img: Water,
                name: 'Одноразки',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
              {
                linkName: '/catalog/hookahTobacco',
                img: Automaz,
                name: 'Кальян',
                subname: [
                  { subName: 'йцуцйу', linkSubName: '/1' },
                  { subName: 'Кварцуцавцтира', linkSubName: '/2' },
                  { subName: 'Квартира', linkSubName: '/2' },
                ],
              },
            ]}
          />
        </section>
      </section>
    </header>
  );
};
export default HeaderBig;
