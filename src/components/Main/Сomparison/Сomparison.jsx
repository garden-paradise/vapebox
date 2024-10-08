import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import Title from '../../../reuse_Components/Title/Title';
import './Сomparison.scss';
import Dropdown from 'react-dropdown';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';
import { useState } from 'react';
import HeartRed from '../../../images/header/HeartRed.svg';
import Shopping from '../../../images/header/Shopping.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ColorCount from '../Product/reuse/ColorCount/ColorCount';

// let onSelect = (option) => showBusinessCards(option.value);
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
  },
};
const options = [
  { label: 'Бренды', value: 'brand', className: 'сomparison-dropdownOption' },
  {
    label: 'Франчайзинг',
    value: 'franchising',
    className: 'сomparison-dropdownOption',
  },
  {
    label: 'Розничные продажи',
    value: 'retailSale',
    className: 'сomparison-dropdownOption',
  },
  {
    label: 'Оптовые продажи',
    value: 'wholeSale',
    className: 'сomparison-dropdownOption',
  },
];
const ButtonGroup = ({ next, previous }) => {
  return (
    <section className='сomparison-circles'>
      <section onClick={() => previous()}>
        <div className='сomparison-circlesPrev'></div>
      </section>
      <section onClick={() => next()}>
        <div className='сomparison-circlesNext'></div>
      </section>
    </section>
  );
};

const Сomparison = () => {
  const [comparisonProducts, setСomparisonProducts] = useState(
    JSON.parse(localStorage.getItem('myComparison'))
  );

  return (
    <section className='Container PageBottom200 сomparison'>
      {window.innerWidth < 480 ? (
        <ArrowTitle title='Сравнение' />
      ) : (
        <NavLinks
          data={[
            { url: 'home', name: 'Главная', active: false },
            { url: 'reviews', name: 'Сравнение', active: true },
          ]}
        />
      )}

      <Title title='Сравнение товаров' />

      <section className='сomparison-title'>
        <div>3 товара</div>
        <div onClick={() => localStorage.removeItem('myComparison')}>
          Удалить все
          <span>&#10006;</span>
        </div>
      </section>

      <section className='сomparison-prod'>
        <div className='сomparison-prodLeft'>
          <Dropdown
            options={options}
            value={options[0]}
            // onChange={onSelect}
            controlClassName='сomparison-dropdownControl'
            menuClassName='сomparison-dropdownMenu'
            arrowClosed={<span className='сomparison-dropdownClosed' />}
            arrowOpen={<span className='сomparison-dropdownOpen' />}
          />

          <div className='сomparison-prodLeftCheckbox'>
            <input
              name='notifications'
              component='input'
              type='checkbox'
              id='notifications'
            ></input>
            <label htmlFor='notifications'>Только отличие</label>
          </div>
        </div>

        <div className='сomparison-prodRight'>
          {comparisonProducts.length > 0 ? (
            <Carousel
              responsive={responsive}
              shouldResetAutoplay={false}
              infinite={true}
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside
              arrows={false}
              itemClass='сomparison-carouselItem'
            >
              {comparisonProducts.map((info, i) => (
                <section key={i} className='card'>
                  <div className='card-1blockHeart'>
                    <img src={HeartRed} alt='HeartRedIMG' />
                  </div>
                  <div
                    onClick={() => {
                      let newComparisonArr = JSON.parse(
                        localStorage.getItem('myComparison')
                      ).filter((item) => item.data._id !== info.data._id);
                      localStorage.setItem(
                        'myComparison',
                        JSON.stringify(newComparisonArr)
                      );
                      setСomparisonProducts(newComparisonArr);
                    }}
                    className='card-1blockDelete'
                  >
                    &#10006;
                  </div>
                  <img
                    className='card-img'
                    src={`https://storage.googleapis.com/${info.data.photos.folder[0]}/${info.data.photos.path[0]}`}
                    alt={info.data.photos.filename}
                  />
                  <div className='card-info'>
                    <div className='card-title'>{info.data.series.name}</div>
                    <div className='card-2block'>
                      <div>{info.data.generalInfo.price} ₽</div>
                      <div className='card-2blockShop'>
                        <img src={Shopping} alt='ShoppingIMG' />
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </Carousel>
          ) : (
            <section className='сomparison-prodRightText'>
              Вы ничего не выбрали...
            </section>
          )}
        </div>
      </section>

      <section className='сomparison-tableSection'>
        <div className='сomparison-tableSectionTitle'>Характеристики</div>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Бренд</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Модель</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Тип продукта</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.generalInfo.productType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Вкус</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.flavor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.generalInfo.price} ₽</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Емкость батареи</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.batteryCapacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Объем</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.liquidVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Солевой никотин</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.nicotinePercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Подсветка</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.backlight ? 'Да' : 'Нет'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Зарядка</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.charging ? 'Да' : 'Нет'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Количество затяжек</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr key={i}>
                <td>{item.data.series.puffsAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='сomparison-table'>
          <thead>
            <tr>
              <th>Наличие в магазинах</th>
            </tr>
          </thead>
          <tbody>
            {comparisonProducts.map((item, i) => (
              <tr>
                <td>
                  <ColorCount quantity={item.data.generalInfo.quantity} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Сomparison;
