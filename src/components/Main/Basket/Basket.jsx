import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import './Basket.scss';
import SelectedProduct from './reuse/SelectedProduct/SelectedProduct';
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
} from '../../../utils/validators';
import Title from '../../../reuse_Components/Title/Title';
import { Field, Form } from 'react-final-form';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';
import { useEffect, useState } from 'react';

const Basket = (props) => {
  const [formPay, setFormPay] = useState(true);
  const [formRecipient, setFormRecipient] = useState(true);
  const [formRegistration, setFormRegistration] = useState(true);
  const [basketProducts, setBasketProducts] = useState([]);
  let deleteBasketProducts = (basketProduct) => {
    let myProducts = JSON.parse(localStorage.getItem('myProducts'));

    for (let i = 0; i < myProducts.length; i++) {
      if (myProducts[i].data['_id'] === basketProduct.data._id) {
        const newArr = myProducts.map((item) =>
          item.data._id === basketProduct.data._id ? basketProduct : item
        );
        localStorage.setItem('myProducts', JSON.stringify(newArr));
        setBasketProducts(newArr.filter((item) => item.basket === true));
      }
    }
  };
  let changeCountBasketProduct = (id, quantity) => {
    let myProducts = JSON.parse(localStorage.getItem('myProducts')).map(
      (item) => (item.data._id === id ? { ...item, quantity: quantity } : item)
    );

    localStorage.setItem('myProducts', JSON.stringify(myProducts));

    setBasketProducts(myProducts.filter((item) => item.basket === true));
  };
  const onSubmit = (values) => {
    props.getBasketFormInfo(values);
    setFormRegistration(false);
  };
  let totalPrice = () => {
    return basketProducts.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.quantity * currentValue.data.generalInfo.price,
      0
    );
  };
  useEffect(() => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    setBasketProducts(myProducts.filter((item) => item.basket === true));
  }, []);

  return (
    <section className='Container PageBottom200 basket'>
      {window.innerWidth < 480 && <ArrowTitle title='Главная' />}

      <Title
        title='Корзина'
        linkUrl='catalog/popular'
        linkName='Вернуться к покупкам'
      />

      <section className='basket-section'>
        <section>
          {basketProducts.length !== 0 ? (
            <SelectedProduct
              products={basketProducts}
              deleteBasketProducts={deleteBasketProducts}
              changeCountBasketProduct={changeCountBasketProduct}
            />
          ) : (
            <section className='basket-noProducts'>
              Вы ничего не выбрали...
            </section>
          )}
          <Title title='Оформление заказа' />
          <Collapsible
            open={true}
            transitionTime={250}
            triggerClassName='BasketTrigger'
            triggerOpenedClassName='BasketTriggerOpen'
            className='Basket'
            openedClassName='Basket'
            trigger='1. Доставка'
            triggerTagName='div'
          >
            <section className='basket-deliveryCollapsible'>
              <div className='basket-deliveryCityTitle'>Выберите город</div>
              <div className='basket-deliveryCityInput'>
                <div>Москва</div>
              </div>
              <div className='basket-deliveryDeliveryTitle'>
                Cпособ доставки
              </div>
              <div className='basket-deliveryDelivery'>
                <input
                  name='pickup'
                  component='input'
                  type='checkbox'
                  id='pickup'
                  className='basket-deliveryDeliveryCheckbox'
                ></input>
                <label
                  className='basket-deliveryDeliveryForm'
                  htmlFor='pickup'
                  onClick={() => setFormPay(!formPay)}
                >
                  Самовывоз из магазина
                </label>
                <div className='basket-deliveryDeliveryBron'>
                  Забронирован в магазине, забрать можете сегодня. Срок хранения
                  1 день.
                </div>
                <div>Бесплатно</div>
              </div>
            </section>
          </Collapsible>
          <Collapsible
            transitionTime={250}
            triggerClassName='BasketTrigger'
            triggerOpenedClassName={
              formPay ? 'BasketTriggerClosed' : 'BasketTriggerOpen'
            }
            contentInnerClassName={formPay && `BasketInnerClassName`}
            className={formPay ? 'BasketClosed' : 'Basket'}
            openedClassName='Basket'
            trigger='2. Оплата'
            triggerTagName='div'
          >
            <section className='basket-payCollapsible'>
              <div className='basket-payTitle'>
                Выберите удобный для Вас способ оплаты
              </div>
              <div className='basket-payChange'>Способ оплаты</div>
              <div className='basket-deliveryDelivery'>
                <div className='basket-deliveryDeliveryPickup'>
                  <input
                    name='pay'
                    component='input'
                    type='checkbox'
                    id='pay'
                    className='basket-deliveryDeliveryCheckbox'
                  ></input>
                  <label
                    className='basket-deliveryDeliveryForm'
                    htmlFor='pay'
                    onClick={() => setFormRecipient(!formRecipient)}
                  >
                    Оплата наличными
                  </label>
                  <div className='basket-deliveryDeliveryCircle'></div>
                </div>
                <div className='basket-paySubtitle'>
                  Оплата производится только при получении товара
                </div>
              </div>
            </section>
          </Collapsible>

          <Collapsible
            transitionTime={250}
            triggerClassName='BasketTrigger'
            triggerOpenedClassName={
              formRecipient ? 'BasketTriggerClosed' : 'BasketTriggerOpen'
            }
            contentInnerClassName={formRecipient && `BasketInnerClassName`}
            className={formRecipient ? 'BasketClosed' : 'Basket'}
            openedClassName='Basket'
            trigger='3. Получатель'
            triggerTagName='div'
          >
            <section className='basket-recipientCollapsible'>
              <div className='basket-recipientTitle'>
                Укажите Ваши данные чтобы быть в курсе статуса заказа.
                Персональные данные обрабатываются в соответствии с &nbsp;
                <NavLink to='/personal-policy' className='basket-recipientUrl'>
                  Политикой конфиденциальности
                </NavLink>
                .
              </div>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form
                    className='basket-recipientForms'
                    onSubmit={handleSubmit}
                  >
                    <div className='basket-recipientFormsGrid'>
                      <Field name='name' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basket-recipientForm ${
                              meta.error &&
                              meta.touched &&
                              'basket-recipientFormError'
                            }`}
                            {...input}
                            type='text'
                            placeholder='Имя *'
                          />
                        )}
                      </Field>
                      <Field name='surname' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basket-recipientForm ${
                              meta.error &&
                              meta.touched &&
                              'basket-recipientFormError'
                            }`}
                            {...input}
                            type='text'
                            placeholder='Фамилия *'
                          />
                        )}
                      </Field>
                      <Field name='phone' validate={phoneValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basket-recipientForm ${
                              meta.error &&
                              meta.touched &&
                              'basket-recipientFormError'
                            }`}
                            {...input}
                            type='number'
                            placeholder='Телефон *'
                          />
                        )}
                      </Field>
                      <Field name='email' validate={emailValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basket-recipientForm ${
                              meta.error &&
                              meta.touched &&
                              'basket-recipientFormError'
                            }`}
                            {...input}
                            type='email'
                            placeholder='E-mail *'
                          />
                        )}
                      </Field>
                    </div>
                    <Field name='comment'>
                      {({ input }) => (
                        <input
                          className='basket-recipientFormComment'
                          {...input}
                          type='text'
                          placeholder='Комментарий'
                        />
                      )}
                    </Field>
                    <Field
                      name='notifications'
                      component='input'
                      type='checkbox'
                      className='basket-recipientFormCheckbox'
                      id='notifications'
                    />
                    <label
                      className='basket-recipientFormLabel'
                      htmlFor='notifications'
                    >
                      Хочу получать уведомления о скидках и акциях
                    </label>
                    <button
                      className='BtnGeneral basket-recipientFormBtn'
                      type='submit'
                    >
                      Применить
                    </button>
                  </form>
                )}
              />
            </section>
          </Collapsible>
        </section>

        <section className='basket-checkout'>
          <div className='basket-checkoutTotal'>
            <div className='basket-checkoutTotalTitle'>
              {`${basketProducts.reduce(
                (a, c) => a + c.quantity,
                0
              )} товара на сумму`}
            </div>
            <div className='basket-checkoutTotalSum'>{`${totalPrice()} ₽`}</div>
          </div>
          <div className='basket-checkoutFilled'>
            <div className='basket-checkoutFilledItem'>
              {formPay ? (
                <div className='basket-checkoutFilledCircle'>1</div>
              ) : (
                <div className='basket-checkoutFilledCircleRed'>&#10003;</div>
              )}
              <div className='basket-checkoutFilledTitle'>Доставка</div>
            </div>
            <div className='basket-checkoutFilledItem'>
              {formRecipient ? (
                <div className='basket-checkoutFilledCircle'>2</div>
              ) : (
                <div className='basket-checkoutFilledCircleRed'>&#10003;</div>
              )}

              <div className='basket-checkoutFilledTitle'>Оплата</div>
            </div>
            <div className='basket-checkoutFilledItem'>
              {formRegistration ? (
                <div className='basket-checkoutFilledCircle'>3</div>
              ) : (
                <div className='basket-checkoutFilledCircleRed'>&#10003;</div>
              )}
              <div className='basket-checkoutFilledTitle'>Получатель</div>
            </div>
          </div>
          <div className='basket-checkoutItog'>
            <div className='basket-checkoutItogTitle'>Итого:</div>
            <div className='basket-checkoutItogSum'>{`${totalPrice()} ₽`}</div>
          </div>
          <NavLink to='/recipient' className='NavLink'>
            <button
              disabled={formRegistration ? true : false}
              className={`BtnGeneral ${
                formRegistration
                  ? 'basket-checkoutBtnFalse'
                  : 'basket-checkoutBtnTrue'
              } `}
            >
              Оформить заказ
            </button>
          </NavLink>
        </section>
      </section>
    </section>
  );
};

export default Basket;
