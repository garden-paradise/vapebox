import Heart from './../../images/header/Heart.svg';
import HeartRed from './../../images/header/HeartRed.svg';
import ArrowsClockwise from './../../images/header/ArrowsClockwise.svg';
import ArrowsClockwiseR from './../../images/header/ArrowsClockwiseR.svg';
import ChatCircle from './../../images/header/ChatCircle.svg';
import Shopping from './../../images/header/Shopping.svg';
import { NavLink } from 'react-router-dom';
import './CardProduct.scss';
import ColorCount from '../../components/Main/Product/reuse/ColorCount/ColorCount';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import { favoritesAPI } from '../../api/info-api';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 650, min: 480 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
  },
};

const CardProduct = ({
  products,
  style,
  getItemCountBasket,
  favoritesArr,
  getFavorites,
}) => {
  const CustomDot = ({ onClick, active }) => {
    return (
      <div
        onClick={(e) => {
          onClick();
          e.preventDefault();
        }}
        className={`cardProduct-dots ${active && 'cardProduct-dotsActive'}`}
      ></div>
    );
  };
  const addChangeProduct = (changeProduct) => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    for (let i = 0; i < myProducts.length; i++) {
      if (myProducts[i].data['_id'] === changeProduct.data._id) {
        const newArr = myProducts.map((item) =>
          item.data._id === changeProduct.data._id ? changeProduct : item
        );
        localStorage.setItem('myProducts', JSON.stringify(newArr));
        setProductCards(
          productCards.map((item) =>
            item.data._id === changeProduct.data._id ? changeProduct : item
          )
        );
        changeCountBasket();
        return;
      }
    }
    myProducts.push(changeProduct);
    localStorage.setItem('myProducts', JSON.stringify(myProducts));
    setProductCards(
      productCards.map((item) =>
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
    getItemCountBasket(
      myProducts.filter((item) => item.basket === true).length
    );
  };

  useEffect(() => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));

    products = products.map((item, i) => {
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

    setProductCards(products);
    changeCountBasket();
  }, []);
  useEffect(() => {
    setFavorites(favoritesArr);
  }, [favoritesArr]);

  const [productCards, setProductCards] = useState([]);
  const [favorites, setFavorites] = useState(favoritesArr);

  return window.innerWidth < 650 ? (
    <section className='cardProducts'>
      {productCards.map((item, i) => (
        <section key={i} className={`cardProduct ${style}`}>
          <div className='cardProduct-img'>
            <img
              src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
              alt={item.data.photos.filename}
            />
            <div className='cardProduct-right'>
              <div
                onClick={async () => {
                  favorites.filter((i) => i._id === item.data._id)[0]
                    ? await favoritesAPI.removeFromFavorites({
                        token: localStorage.getItem('token'),
                        category: item.data.generalInfo.category,
                        productId: item.data._id,
                      })
                    : await favoritesAPI.addToFavorites({
                        token: localStorage.getItem('token'),
                        category: item.data.generalInfo.category,
                        productId: item.data._id,
                      });

                  getFavorites(localStorage.getItem('token'));
                }}
                className='cardProduct-icon'
              >
                <img
                  className='cardProduct-iconPhone'
                  src={
                    favorites.filter((i) => i._id === item.data._id)[0]
                      ? HeartRed
                      : Heart
                  }
                  alt='image'
                />
              </div>
              <div
                onClick={() =>
                  addChangeProduct({ ...item, compare: !item.compare })
                }
                className='cardProduct-icon'
              >
                <img
                  className='cardProduct-iconPhone'
                  src={item.compare ? ArrowsClockwiseR : ArrowsClockwise}
                  alt='image'
                />
              </div>
            </div>
          </div>
          <div className='cardProduct-infos'>
            <div className='cardProduct-comments'>
              <div className='cardProduct-commentsInfo'>
                <img
                  className='cardProduct-iconCommentsPhone'
                  src={ChatCircle}
                  alt='image'
                />
                <div className='cardProduct-commentsCount'>
                  {item.data.generalInfo.commentsAmount === null
                    ? 0
                    : item.data.generalInfo.commentsAmount}
                </div>
              </div>
              <ColorCount quantity={item.data.generalInfo.quantity} />
            </div>
            <div className='cardProduct-name'>
              <NavLink
                className='cardProduct-nameLink'
                to={`/product/${item.data.generalInfo.category}/${item.data._id}`}
              >
                <div className='cardProduct-nameBrand'>
                  {item.data.series.name}
                </div>
                {item.data.flavor}
              </NavLink>
            </div>
            <div className='cardProduct-pay'>
              <div className='cardProduct-payNum'>
                {item.data.generalInfo.price} ₽
              </div>
              <div
                onClick={() =>
                  addChangeProduct({ ...item, basket: !item.basket })
                }
                className={`cardProduct-iconShop ${
                  item.basket
                    ? 'cardProduct-basketTrue'
                    : 'cardProduct-basketFalse'
                }`}
              >
                <img
                  className='cardProduct-iconPhone'
                  src={Shopping}
                  alt='image'
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  ) : (
    <section className='cardProducts'>
      {productCards.map((item, i) => (
        <section key={i} className={`cardProduct ${style}`}>
          <div className='cardProduct-img'>
            <img
              src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
              alt={item.data.photos.filename}
            />
            <div className='cardProduct-right'>
              <div
                onClick={async () => {
                  favorites.filter((i) => i._id === item.data._id)[0]
                    ? await favoritesAPI.removeFromFavorites({
                        token: localStorage.getItem('token'),
                        category: item.data.generalInfo.category,
                        productId: item.data._id,
                      })
                    : await favoritesAPI.addToFavorites({
                        token: localStorage.getItem('token'),
                        category: item.data.generalInfo.category,
                        productId: item.data._id,
                      });
                  getFavorites(localStorage.getItem('token'));
                }}
                className='cardProduct-icon'
              >
                <img
                  className='cardProduct-iconPhone'
                  src={
                    favorites.filter((i) => i._id === item.data._id)[0]
                      ? HeartRed
                      : Heart
                  }
                  alt='image'
                />
              </div>
              <div
                onClick={() =>
                  addChangeProduct({ ...item, compare: !item.compare })
                }
                className='cardProduct-icon'
              >
                <img
                  className='cardProduct-iconPhone'
                  src={item.compare ? ArrowsClockwiseR : ArrowsClockwise}
                  alt='image'
                />
              </div>
            </div>
          </div>
          <div className='cardProduct-infos'>
            <div className='cardProduct-comments'>
              <div className='cardProduct-commentsInfo'>
                <img
                  className='cardProduct-iconCommentsPhone'
                  src={ChatCircle}
                  alt='image'
                />
                <div className='cardProduct-commentsCount'>
                  {item.data.generalInfo.commentsAmount === null
                    ? 0
                    : item.data.generalInfo.commentsAmount}
                </div>
              </div>
              <ColorCount quantity={item.data.generalInfo.quantity} />
            </div>
            <div className='cardProduct-name'>
              <NavLink
                className='cardProduct-nameLink'
                to={`/product/${item.data.generalInfo.category}/${item.data._id}`}
              >
                <div className='cardProduct-nameBrand'>
                  {item.data.series.name}
                </div>
                {item.data.flavor}
              </NavLink>
            </div>
            <div className='cardProduct-pay'>
              <div className='cardProduct-payNum'>
                {item.data.generalInfo.price} ₽
              </div>
              <div
                onClick={() =>
                  addChangeProduct({ ...item, basket: !item.basket })
                }
                className={`cardProduct-iconShop ${
                  item.basket
                    ? 'cardProduct-basketTrue'
                    : 'cardProduct-basketFalse'
                }`}
              >
                <img
                  className='cardProduct-iconPhone'
                  src={Shopping}
                  alt='image'
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default CardProduct;
