import { useEffect, useRef } from 'react';
import { useState } from 'react';
import ReactDropdown from 'react-dropdown';
import { Field, Form } from 'react-final-form';
import { NavLink } from 'react-router-dom';
import { accountAPI } from '../../../api/info-api';
import Title from '../../../reuse_Components/Title/Title';
import './Account.scss';
import FavoritesProduct from './reuse/FavoritesProduct/FavoritesProduct';
import MyOrderProduct from './reuse/MyOrderProduct/MyOrderProduct';
import eyeOpen from '../../../images/header/eyeOpen.png';
import eyeClose from '../../../images/header/eyeClose.png';
import { requiredValidator } from '../../../utils/validators';

const onSubmitData = (values) => {
  accountAPI.changeAccountInformation({
    token: localStorage.getItem('token'),
    name: values.name === null ? '' : values.name,
    surname: values.surname === null ? '' : values.surname,
    phone: values.phone === null ? '' : values.phone,
    email: values.email === null ? '' : values.email,
    city: values.city === null ? '' : values.city,
    postcode: values.postcode === null ? '' : values.postcode,
    street: values.street === null ? '' : values.street,
    building: values.building === null ? '' : values.building,
    apartment: values.apartment === null ? '' : values.apartment,
    mailingEnabled: values.mailingEnabled,
  });
};

const Account = (props) => {
  let enterPasswordOld = useRef();
  let enterPasswordNew = useRef();
  let enterPasswordNewRepeat = useRef();
  const [passwordOld, setPasswordOld] = useState(false);
  const [passwordNew, setPasswordNew] = useState(false);
  const [passwordNewRepeat, setPasswordNewRepeat] = useState(false);
  const [numberMenu, setNumberMenu] = useState(props.match.params.url);
  const [favoritesProducts, setFavoritesProducts] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [errorInput, setErrorInput] = useState(false);
  const options = [
    {
      label: 'Личные данные',
      value: 'personal',
      className: 'DropdownAccountOptions',
    },
    {
      label: ' Мои заказы',
      value: 'orders',
      className: 'DropdownAccountOptions',
    },
    {
      label: 'Избранное',
      value: 'favorites',
      className: 'DropdownAccountOptions',
    },
  ];
  let onSelect = (option) => {
    props.history.push(`/account/${option.value}`);
    setNumberMenu(option.value);
  };
  const addChangeProduct = (changeProduct) => {
    let myProducts = JSON.parse(localStorage.getItem('myProducts'));
    for (let i = 0; i < myProducts.length; i++) {
      if (myProducts[i].data['_id'] === changeProduct.data._id) {
        const newArr = myProducts.map((item) =>
          item.data._id === changeProduct.data._id ? changeProduct : item
        );
        localStorage.setItem('myProducts', JSON.stringify(newArr));
        setFavoritesProducts(
          favoritesProducts.map((item) =>
            item.data._id === changeProduct.data._id ? changeProduct : item
          )
        );
        changeCountBasket();
        return;
      }
    }
    myProducts.push(changeProduct);
    localStorage.setItem('myProducts', JSON.stringify(myProducts));
    setFavoritesProducts(
      favoritesProducts.map((item) =>
        item.data._id === changeProduct.data._id ? changeProduct : item
      )
    );
    changeCountBasket();
  };
  const changeCountBasket = () => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    props.getItemCountBasket(
      myProducts.filter((item) => item.basket === true).length
    );
  };
  const onSubmitPassword = async (values) => {
    if (values.newPassword === values.confirmedPassword) {
      let data = await accountAPI.getChangePassword({
        token: localStorage.getItem('token'),
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });
      setErrorInput(false);
      data.status === 200 && setPasswordMessage('Пароль изменен!');
    } else {
      setPasswordMessage('Пароли не совпадают!');
      setErrorInput(true);
    }
  };

  useEffect(() => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));

    let products =
      props.favoritesArr &&
      props.favoritesArr.map((item, i) => {
        for (let i = 0; i < myProducts.length; i++) {
          if (myProducts[i].data._id === item._id) return myProducts[i];
        }
        return {
          compare: false,
          basket: false,
          quantity: 1,
          data: item,
        };
      });
    products && setFavoritesProducts(products.length === 0 ? null : products);
  }, [props]);

  return (
    props.accountInfo &&
    props.myOrders && (
      <section className='Container PageBottom200 account'>
        <Title title='Личный кабинет' />
        <section className='account-section'>
          <section className='account_left'>
            <div className='account_left-blockName'>
              <div className='account_left-name'>{props.accountInfo.name}</div>
              <div>{props.accountInfo.phone}</div>
            </div>
            {window.innerWidth > 1199 ? (
              <div className='account_left-blockMenu'>
                <NavLink
                  onClick={() => setNumberMenu('personal')}
                  to='/account/personal'
                  className={`account_left-menu ${
                    numberMenu === 'personal' && 'account_left-menuActive'
                  }`}
                >
                  Личные данные
                </NavLink>
                <NavLink
                  onClick={() => setNumberMenu('orders')}
                  to='/account/orders'
                  className={`account_left-menu ${
                    numberMenu === 'orders' && 'account_left-menuActive'
                  }`}
                >
                  Мои заказы
                </NavLink>
                <NavLink
                  onClick={() => setNumberMenu('favorites')}
                  to='/account/favorites'
                  className={`account_left-menu ${
                    numberMenu === 'favorites' && 'account_left-menuActive'
                  }`}
                >
                  Избранное
                </NavLink>
              </div>
            ) : (
              <ReactDropdown
                options={options}
                value={options[0]}
                onChange={onSelect}
                controlClassName='DropdownAccountControl'
                menuClassName='DropdownAccountMenu'
                className='DropdownRoot'
                arrowClosed={<span className='DropdownAccountArrowClose' />}
                arrowOpen={<span className='DropdownAccountArrowOpen' />}
              />
            )}
          </section>
          <section className='account_rightBlock'>
            {numberMenu === 'personal' && (
              <div className='account_forms'>
                <Form
                  initialValues={props.accountInfo}
                  onSubmit={onSubmitData}
                  render={({ handleSubmit }) => (
                    <form
                      className='account_right-formInfo'
                      onSubmit={handleSubmit}
                    >
                      <div className='account_right-formInfoTitle'>
                        Личные данные
                      </div>
                      <div className='account_right-forms'>
                        <Field name='name'>
                          {({ input, meta }) => (
                            <input
                              className={`account_right-form ${
                                meta.error &&
                                meta.touched &&
                                'account_right-formError'
                              }`}
                              {...input}
                              type='text'
                              placeholder='Имя'
                            />
                          )}
                        </Field>
                        <Field name='surname'>
                          {({ input, meta }) => (
                            <input
                              className={`account_right-form ${
                                meta.error &&
                                meta.touched &&
                                'account_right-formError'
                              }`}
                              {...input}
                              type='text'
                              placeholder='Фамилия'
                            />
                          )}
                        </Field>
                        <Field name='phone'>
                          {({ input, meta }) => (
                            <input
                              className={`account_right-form ${
                                meta.error &&
                                meta.touched &&
                                'account_right-formError'
                              }`}
                              {...input}
                              type='tel'
                              placeholder='Телефон'
                            />
                          )}
                        </Field>
                        <Field name='email'>
                          {({ input }) => (
                            <input
                              className={`account_right-formEmail`}
                              {...input}
                              type='email'
                              readOnly
                            />
                          )}
                        </Field>
                        <Field
                          name='mailingEnabled'
                          component='input'
                          type='checkbox'
                          className='account_right-formCheckbox'
                          id='notifications'
                        />
                        <label
                          className='account_right-formLabel'
                          htmlFor='notifications'
                        >
                          Согласие на e-mail рассылку
                        </label>
                      </div>
                      <div className='account_right-formInfoTitle'>
                        Адрес доставки
                      </div>
                      <div className='account_right-formsAdress'>
                        <Field name='city'>
                          {({ input }) => (
                            <input
                              className='account_right-form account_right-formLong'
                              {...input}
                              type='text'
                              placeholder='Город'
                            />
                          )}
                        </Field>
                        <Field name='postcode'>
                          {({ input }) => (
                            <input
                              className='account_right-form account_right-formShort'
                              {...input}
                              type='text'
                              placeholder='Индекс'
                            />
                          )}
                        </Field>
                        <Field name='street'>
                          {({ input }) => (
                            <input
                              className='account_right-form account_right-formLong'
                              {...input}
                              type='text'
                              placeholder='Улица'
                            />
                          )}
                        </Field>
                        <Field name='building'>
                          {({ input }) => (
                            <input
                              className='account_right-form account_right-formShort'
                              {...input}
                              type='text'
                              placeholder='Дом'
                            />
                          )}
                        </Field>
                        <Field name='apartment'>
                          {({ input }) => (
                            <input
                              className='account_right-form account_right-formApartament'
                              {...input}
                              type='text'
                              placeholder='Квартира / офис'
                            />
                          )}
                        </Field>
                      </div>
                      <button
                        className='BtnGeneral account_right-formBtn'
                        type='submit'
                      >
                        Сохранить
                      </button>
                    </form>
                  )}
                />
                <Form
                  onSubmit={onSubmitPassword}
                  render={({ handleSubmit }) => (
                    <form
                      className='account_right-formPassword'
                      onSubmit={handleSubmit}
                    >
                      <div className='account_right-formInfoTitle account_right-formPassTitle'>
                        Пароль
                      </div>
                      <Field name='oldPassword' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <div className='authForm-inputDiv'>
                            <input
                              ref={enterPasswordOld}
                              className={`account_right-form account_right-formPass ${
                                meta.error &&
                                meta.touched &&
                                'account_right-error'
                              }`}
                              {...input}
                              type={passwordOld ? 'text' : 'password'}
                              placeholder='Старый пароль'
                              autoComplete='off'
                            />
                            <img
                              onClick={() => setPasswordOld(!passwordOld)}
                              src={passwordOld ? eyeOpen : eyeClose}
                              alt='eyeIMG'
                            />
                          </div>
                        )}
                      </Field>
                      <Field name='newPassword' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <div className='authForm-inputDiv'>
                            <input
                              ref={enterPasswordNew}
                              className={`account_right-form account_right-formPass ${
                                meta.error &&
                                meta.touched &&
                                'account_right-error'
                              } ${errorInput && ' account_right-errorRepeat'}`}
                              {...input}
                              type={passwordNew ? 'text' : 'password'}
                              placeholder='Новый пароль'
                              autoComplete='off'
                            />
                            <img
                              onClick={() => setPasswordNew(!passwordNew)}
                              src={passwordNew ? eyeOpen : eyeClose}
                              alt='eyeIMG'
                            />
                          </div>
                        )}
                      </Field>
                      <Field
                        name='confirmedPassword'
                        validate={requiredValidator}
                      >
                        {({ input, meta }) => (
                          <div className='authForm-inputDiv'>
                            <input
                              ref={enterPasswordNewRepeat}
                              className={`account_right-form account_right-formPass ${
                                meta.error &&
                                meta.touched &&
                                'account_right-error'
                              } ${errorInput && 'account_right-errorRepeat'}`}
                              {...input}
                              type={passwordNewRepeat ? 'text' : 'password'}
                              placeholder='Повторите новый пароль'
                              autoComplete='off'
                            />
                            <img
                              onClick={() =>
                                setPasswordNewRepeat(!passwordNewRepeat)
                              }
                              src={passwordNewRepeat ? eyeOpen : eyeClose}
                              alt='eyeIMG'
                            />
                          </div>
                        )}
                      </Field>
                      <div className='account_right-formTextError'>
                        {passwordMessage}
                      </div>
                      <button
                        className='BtnGeneral account_right-formBtn'
                        type='submit'
                      >
                        Сохранить
                      </button>
                    </form>
                  )}
                />
              </div>
            )}
            {numberMenu === 'orders' && (
              <div className='account_myOrder'>
                <div className='account_myOrder-title'>Мои заказы</div>
                {props.myOrders.orders.length > 0 ? (
                  <div>
                    <div className='account_myOrder-subTitle'>
                      <div>Фото</div>
                      <div>Название</div>
                      <div>Кол-во</div>
                      <div>Сумма</div>
                      <div>Статус</div>
                    </div>
                    <MyOrderProduct
                      data={[
                        {
                          name: 'Smoant Battlestar Baby Pod Kit',
                          count: 1,
                          stasus: 'Получено',
                          sum: 1990,
                          date: '01.12.2022',
                          address:
                            'м. Ботанический сад Лазоревый проезд 1А, к2',
                          recipient:
                            'Малинина Анна +7 925 567 54 12 hdhjdhbf@gmail.com',
                        },
                      ]}
                    />
                  </div>
                ) : (
                  <section className='account_favorites-noProducts'>
                    Вы ничего не заказывали...
                  </section>
                )}
              </div>
            )}
            {numberMenu === 'favorites' && (
              <div className='account_favorites'>
                <div className='account_myOrder-title'>Избранное</div>
                {favoritesProducts !== null ? (
                  <section>
                    <div className='account_favorites-subTitle'>
                      <div>Фото</div>
                      <div>Название</div>
                      <div>Стоимость</div>
                    </div>
                    <FavoritesProduct
                      data={favoritesProducts}
                      addChangeProduct={addChangeProduct}
                      getFavorites={props.getFavorites}
                    />
                  </section>
                ) : (
                  <section className='account_favorites-noProducts'>
                    Вы ничего не выбрали...
                  </section>
                )}
              </div>
            )}
          </section>
        </section>
      </section>
    )
  );
};

export default Account;
