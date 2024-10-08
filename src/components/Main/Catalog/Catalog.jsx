import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import './Catalog.scss';
import filters from './../../../images/main/all/filter.svg';
import Accordion from './reuse/Accordion/Accordion';
import ReactDropdown from 'react-dropdown';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import CardProductCatalog from '../../../reuse_Components/CardProductCatalog/CardProductCatalog';

let onSelect = (option) => console.log(option.value);

let selectParamsSearch = {
  brands: [],
  puffs: [],
  liquidVolume: [],
  batteryCapacity: [],
  category: [],
  charging: false,
  backlight: false,
};

const options = [
  { label: 'Бренды', value: 'brand', className: 'myOptionClassName' },
  {
    label: 'Популярные',
    value: 'franchising',
    className: 'myOptionClassName',
  },
  {
    label: 'Новые',
    value: 'retailSale',
    className: 'myOptionClassName',
  },
  {
    label: 'Верх',
    value: 'wholeSale',
    className: 'myOptionClassName',
  },
  {
    label: 'Низ',
    value: 'wholeSale',
    className: 'myOptionClassName',
  },
];
const uniqueBrand = (arr) => {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str.series.brand)) {
      result.push(str.series.brand);
    }
  }
  return result;
};
const uniqueCategory = (arr) => {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str.generalInfo.category)) {
      result.push(str.generalInfo.category);
    }
  }
  return result;
};
const uniquePuffs = (arr) => {
  let result = [];
  for (let str of arr) {
    if (
      !result.includes(str.series.puffsAmount) &&
      str.series.puffsAmount !== undefined
    ) {
      result.push(str.series.puffsAmount);
    }
  }
  return result;
};
const uniqueLiquidVolume = (arr) => {
  let result = [];
  for (let str of arr) {
    if (
      !result.includes(str.series.liquidVolume) &&
      str.series.liquidVolume !== undefined
    ) {
      result.push(str.series.liquidVolume);
    }
  }
  return result;
};
const uniqueBatteryCapacity = (arr) => {
  let result = [];
  for (let str of arr) {
    if (
      !result.includes(str.series.batteryCapacity) &&
      str.series.batteryCapacity !== undefined
    ) {
      result.push(str.series.batteryCapacity);
    }
  }
  return result;
};

const selectBrand = (brand) => {
  for (let i = 0; i < selectParamsSearch.brands.length; i++) {
    if (selectParamsSearch.brands[i] === brand) {
      selectParamsSearch.brands.splice(i, 1);
      return;
    }
  }
  selectParamsSearch.brands.push(brand);
};
const selectСategory = (category) => {
  for (let i = 0; i < selectParamsSearch.category.length; i++) {
    if (selectParamsSearch.category[i] === category) {
      selectParamsSearch.category.splice(i, 1);
      return;
    }
  }
  selectParamsSearch.category.push(category);
};
const selectPuffs = (puffs) => {
  for (let i = 0; i < selectParamsSearch.puffs.length; i++) {
    if (selectParamsSearch.puffs[i] === puffs) {
      selectParamsSearch.puffs.splice(i, 1);
      return;
    }
  }
  selectParamsSearch.puffs.push(puffs);
};
const selectLiquidVolume = (liquidVolume) => {
  for (let i = 0; i < selectParamsSearch.liquidVolume.length; i++) {
    if (selectParamsSearch.liquidVolume[i] === liquidVolume) {
      selectParamsSearch.liquidVolume.splice(i, 1);
      return;
    }
  }
  selectParamsSearch.liquidVolume.push(liquidVolume);
};
const selectBatteryCapacity = (batteryCapacity) => {
  for (let i = 0; i < selectParamsSearch.batteryCapacity.length; i++) {
    if (selectParamsSearch.batteryCapacity[i] === batteryCapacity) {
      selectParamsSearch.batteryCapacity.splice(i, 1);
      return;
    }
  }
  selectParamsSearch.batteryCapacity.push(batteryCapacity);
};
const selectСharging = (charging) => {
  selectParamsSearch.charging = charging;
};
const selectBacklight = (backlight) => {
  selectParamsSearch.backlight = backlight;
};

// const onSubmitBrand = (values) => {
//   console.log(values);
// };

const Catalog = (props) => {
  const [filter, setFilter] = useState(false);
  const [showProducts, setShowProducts] = useState(null);
  const [totalPages, setTotalPages] = useState([]);
  const [currentNumPage, setCurrentNumPage] = useState(0);
  const [rangeCount, setRangeCount] = useState(1000);
  const myRange = useRef(0);
  const сharging = useRef(false);
  const selectBacklight = useRef(false);

  let separationProducts = (arr, showNum) => {
    let separationArr = arr.reduce(function (p, c, i) {
      if (i % showNum === 0) p.push([]);
      p[p.length - 1][i] = c;
      return p;
    }, []);
    setShowProducts(separationArr);

    let totalPages = [];
    for (let i = 0; i < Math.ceil(arr.length / showNum); i++) {
      totalPages.push(i + 1);
    }
    setTotalPages(totalPages);
  };

  useEffect(() => {
    props.match.params.url === 'new' && props.getNewProducts();
    props.match.params.url === 'populary' && props.getPopularProducts();

    (props.match.params.url === 'pod' ||
      props.match.params.url === 'ejuice' ||
      props.match.params.url === 'hookahTobacco' ||
      props.match.params.url === 'disposableVape') &&
      props.getProductsByCategory(props.match.params.url);
  }, []);

  useEffect(() => {
    (props.match.url === '/catalog/pod' ||
      props.match.url === '/catalog/ejuice' ||
      props.match.url === '/catalog/hookahTobacco' ||
      props.match.url === '/catalog/disposableVape') &&
      props.getProductsByCategory(props.match.params.url);
  }, [props.match.url]);

  useEffect(() => {
    props.products &&
      (window.innerWidth > 1199
        ? separationProducts(props.products, 9)
        : separationProducts(props.products, 6));
  }, [props.products]);

  return (
    props.favoritesArr &&
    props.products && (
      <section className='Container catalog'>
        <NavLinks
          data={[
            { url: '', name: 'Главная', active: false },
            { url: 'reviews', name: 'Обзоры', active: true },
          ]}
        />
        <section className='catalog-info'>
          <div className='catalog-infoTitle'>
            <div
              onClick={() => setFilter(!filter)}
              className='catalog-infoTitleFilter'
            >
              <img
                className='catalog-infoTitleImg'
                src={filters}
                alt='filterIMG'
              />
              <span>Фильтр</span>
            </div>
          </div>

          <div className='catalog-rightInfo'>
            <span className='catalog-rightInfoFind'>
              {`Найдено ${props.products.length} товаров`}
            </span>
            {props.products.length !== 0 && (
              <ReactDropdown
                options={options}
                value={options[0]}
                onChange={onSelect}
                controlClassName='myControlClassName'
                menuClassName='myMenuClassName'
                arrowClosed={<span className='arrow-closed' />}
                arrowOpen={<span className='arrow-open' />}
              />
            )}
          </div>
        </section>
        <section className='PageBottom200 catalog-sec'>
          <div className='catalog-left'>
            <div className='catalog-leftBlock'>
              <div className='catalog-leftBlockSale'>
                <input
                  type='checkbox'
                  id='notifications'
                  name='subscribe'
                ></input>
                <label htmlFor='notifications'>Товары со скидкой</label>
              </div>
              <Accordion name='Категории'>
                {uniqueCategory(props.products).map((item, i) => (
                  <div key={i} className='catalog-blockFilter'>
                    <input
                      type='checkbox'
                      id={item}
                      name={item}
                      onClick={() => selectСategory(item)}
                    ></input>
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </Accordion>
              <Accordion name='Бренд'>
                {uniqueBrand(props.products).map((item, i) => (
                  <div key={i} className='catalog-blockFilter'>
                    <input
                      type='checkbox'
                      id={item}
                      name={item}
                      onClick={() => selectBrand(item)}
                    ></input>
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </Accordion>
              <Accordion name='Цена'>
                <div className='catalog-blockFilter catalog-myRange'>
                  <div>
                    <input
                      className='catalog-inputRange'
                      type='number'
                      value={myRange.current.min}
                    />
                    -
                    <input
                      className='catalog-inputRange'
                      type='number'
                      value={myRange.current.value}
                    />
                  </div>
                  <input
                    ref={myRange}
                    type='range'
                    min='0'
                    max='3000'
                    value={rangeCount}
                    className='catalog-slider'
                    onChange={() => setRangeCount(myRange.current.value)}
                  ></input>
                </div>
              </Accordion>
              <Accordion name='Количество затяжек'>
                <div className='catalog-blockFilter catalog-myRange'>
                  {uniquePuffs(props.products).map((item, i) => (
                    <div key={i} className='catalog-blockFilter'>
                      <input
                        type='checkbox'
                        id={item}
                        name={item}
                        onClick={() => selectPuffs(item)}
                      ></input>
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </Accordion>
              <Accordion name='Объем'>
                <div className='catalog-blockFilter catalog-myRange'>
                  {uniqueLiquidVolume(props.products).map((item, i) => (
                    <div key={i} className='catalog-blockFilter'>
                      <input
                        type='checkbox'
                        id={item}
                        name={item}
                        onClick={() => selectLiquidVolume(item)}
                      ></input>
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </Accordion>
              <Accordion name='Емкость батареи'>
                <div className='catalog-blockFilter catalog-myRange'>
                  {uniqueBatteryCapacity(props.products).map((item, i) => (
                    <div key={i} className='catalog-blockFilter'>
                      <input
                        type='checkbox'
                        id={item}
                        name={item}
                        onClick={() => selectBatteryCapacity(item)}
                      ></input>
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </Accordion>
              <Accordion name='Зарядка'>
                <div className='catalog-blockFilter catalog-myRange'>
                  <div className='catalog-blockFilter'>
                    <input
                      ref={сharging}
                      type='checkbox'
                      id='charging'
                      name='charging'
                      onClick={() => selectСharging(сharging.current.checked)}
                    ></input>
                    <label htmlFor='charging'>Есть</label>
                  </div>
                </div>
              </Accordion>
              <Accordion name='Подсветка'>
                <div className='catalog-blockFilter catalog-myRange'>
                  <div className='catalog-blockFilter'>
                    <input
                      ref={selectBacklight}
                      type='checkbox'
                      id='selectBacklight'
                      name='selectBacklight'
                      onClick={() =>
                        selectBacklight(selectBacklight.current.checked)
                      }
                    ></input>
                    <label htmlFor='selectBacklight'>Есть</label>
                  </div>
                </div>
              </Accordion>

              <button className='BtnGeneral catalog-leftBtn'>Применить</button>
              <div className='catalog-leftBlockReset'>Сбросить фильтр</div>
            </div>
          </div>
          {props.products.length !== 0 ? (
            <div className='catalog-right'>
              {showProducts && showProducts.length > 0 && (
                <CardProductCatalog
                  getItemCountBasket={props.getItemCountBasket}
                  products={showProducts[currentNumPage]}
                  style='cardProductCatalog9'
                  favoritesArr={props.favoritesArr}
                  getFavorites={props.getFavorites}
                />
              )}
              <section className='catalog-pageSwitcher'>
                {totalPages.map((item, i) => (
                  <span
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setCurrentNumPage(item - 1);
                    }}
                    key={i}
                    className={`catalog-numPage ${
                      currentNumPage === item - 1 && 'catalog-numPageActive'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </section>
            </div>
          ) : (
            <div className='catalog-rightTitle'>Товары закончились...</div>
          )}
        </section>
      </section>
    )
  );
};

export default Catalog;
