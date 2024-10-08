import './Payment.scss';
import Title from '../../../reuse_Components/Title/Title';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';

const Payment = () => {
  return (
    <section className='Container PageBottom200 payment'>
      {window.innerWidth < 480 && <ArrowTitle title='Главная' link='' />}

      <Title title='Способы оплаты' />

      <section className='payment-section'>
        <p>
          На основании поправок в Федеральный закон от 23 февраля 2013 года №
          15-ФЗ «Об охране здоровья граждан от воздействия окружающего табачного
          дыма и последствий потребления табака» онлайн-оплата заказа в
          интернет-магазине Smoky Island невозможна.
        </p>

        <p>
          Оплата заказа происходит при получении в розничном магазине Smoky
          Island наличными или картой.
        </p>
      </section>
    </section>
  );
};

export default Payment;
