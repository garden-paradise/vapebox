import './Delivery.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import Title from '../../../reuse_Components/Title/Title';
import ShopsMini from '../ShopsMini/ShopsMini';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';

const Delivery = () => {
  return (
    <section className='PageBottom200 delivery'>
      <section className='Container'>
        {window.innerWidth < 480 && <ArrowTitle title='Главная' />}

        {window.innerWidth > 480 && (
          <NavLinks
            data={[
              { url: 'home', name: 'Главная', active: false },
              { url: 'delivery', name: 'Доставка', active: true },
            ]}
          />
        )}
        <Title title='Доставка' />

        <section className='delivery-info'>
          <div className='delivery-textBlock1'>
            <div className='delivery-text'>
              В связи со вступлением в силу поправок в Федеральный закон от 23
              февраля 2013 года № 15-ФЗ «Об охране здоровья граждан от
              воздействия окружающего табачного дыма и последствий потребления
              табака», с 28.01.2021 доставка вейп-продукции незаконна, а поэтому
              нами более не осуществляется.
            </div>
            <div className='delivery-text'>
              Вы можете приобрести интересующий вас товар в фирменном магазине
              Vapebox Вашего города или сделать резерв на сайте с самовывозом из
              розничного магазина. На устройства и расходный материал действует
              доставка по РФ
            </div>
          </div>

          <div className='delivery-subtitle'>Самовывоз</div>

          <div className='delivery-textBlock2'>
            <div className='delivery-text'>
              Вы можете забрать заказ из любой точки нашей розничной сети в
              Москве:
            </div>
            <div className='delivery-text'>
              ► &#160; Если заказанный товар в наличии на выбранной точке, то
              забрать заказ можно сразу после его оплаты.
            </div>
            <div className='delivery-text'>
              ► &#160; Если товара нет в наличии на выбранной точке, то наш
              менеджер свяжется с Вами и проинформирует о времени поступления
              заказа и возможности самовывоза с других розничных магазинов.
            </div>
            <div className='delivery-text'>
              ► &#160; Во время режима самоизоляции, выходных и праздничных дней
              перемещения между магазинами осуществляются в течение рабочей
              недели.
            </div>
            <div className='delivery-text'>
              ► &#160; Время резервирования заказа для самовывоза составляет 3
              дня с момента его поступления на точку выдачи.
            </div>
          </div>
        </section>
      </section>

      <ShopsMini />
    </section>
  );
};

export default Delivery;
