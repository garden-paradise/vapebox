import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';
import Title from '../../../reuse_Components/Title/Title';
import './Recipient.scss';
import BuyProduct from './reuse/BuyProduct/BuyProduct';

const Recipient = ({ basketFormInfo, accountInfo }) => {
  const [basketProducts, setBasketProducts] = useState([]);
  const [date, setDate] = useState(new Date().toLocaleDateString());

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
    accountInfo && (
      <section className='Container recipient'>
        {window.innerWidth < 650 && <ArrowTitle title='Главная' link='' />}

        <div className='recipient_title'>
          <div className='recipient_title_left'>
            <Title title={` Здравствуйте, ${accountInfo.name}!`} />
            <div className='recipient_title_left-site'>
              Вы оформили заказ на сайте smoky-island.com
            </div>
            <div className='recipient_title_left-num'>Заказ №42233</div>
          </div>
          {/* <div className='recipient_title-right'></div> */}
          <NavLink to='/' className='recipient_title-right'>
            Вернуться на главную
          </NavLink>
        </div>

        <div className='recipient_sec'>
          <div className='recipient_sec_left'>
            <BuyProduct data={basketProducts} />
            <div className='recipient_sec_leftInfo'>
              <div className='recipient_sec_leftInfo-up'>
                <div>
                  <div className='recipient_sec_leftInfo-leftTitle'>
                    Дата заказа
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle'>
                    {date}
                  </div>
                </div>
                <div>
                  <div className='recipient_sec_leftInfo-leftTitle '>
                    Адрес магазина
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle leftSubtitleAdress'>
                    м. Ботанический сад Лазоревый проезд 1А, к2
                  </div>
                </div>
              </div>

              <div className='recipient_sec_leftInfo-down'>
                <div className='recipient_sec_leftInfo-downLeft'>
                  <div>
                    <div className='recipient_sec_leftInfo-leftTitle'>
                      Статус заказа
                    </div>
                    <div className='recipient_sec_leftInfo-leftSubtitle'>
                      В обработке
                    </div>
                  </div>
                  <div className='recipient_sec_leftInfo-leftTitle'>
                    Оплата наличными при получении
                  </div>
                </div>
                <div>
                  <div className='recipient_sec_leftInfo-leftTitle '>
                    Получатель
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle'>
                    {`${basketFormInfo.name} ${basketFormInfo.surname}`}
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle'>
                    {basketFormInfo.phone}
                  </div>
                  <div className='recipient_sec_leftInfo-leftSubtitle'>
                    {basketFormInfo.email}
                  </div>
                </div>
              </div>
            </div>
            <button className='BtnGeneral recipient_sec-btn'>
              Оформить заказ
            </button>
          </div>

          <div className='recipient_sec_right'>
            <div className='recipient_sec_right-sum'>
              <div className='recipient_sec_right-sumTitle'>Сумма заказа</div>
              <div className='recipient_sec_right-sumNum'>
                {`${totalPrice()} ₽`}
              </div>
            </div>

            <div className='recipient_sec_right-itog'>
              <div className='recipient_sec_right-itogTitle'>Итого:</div>
              <div className='recipient_sec_right-itogNum'>
                {`${totalPrice()} ₽`}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Recipient;
