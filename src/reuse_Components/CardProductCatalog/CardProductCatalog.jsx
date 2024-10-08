import Heart from './../../images/header/Heart.svg';
import HeartRed from './../../images/header/HeartRed.svg';
import ArrowsClockwise from './../../images/header/ArrowsClockwise.svg';
import ArrowsClockwiseR from './../../images/header/ArrowsClockwiseR.svg';
import ChatCircle from './../../images/header/ChatCircle.svg';
import Shopping from './../../images/header/Shopping.svg';
import { NavLink } from 'react-router-dom';
import './CardProductCatalog.scss';
import ColorCount from '../../components/Main/Product/reuse/ColorCount/ColorCount';
import { useEffect, useState } from 'react';
import { favoritesAPI } from '../../api/info-api';

const CardProductCatalog = ({
  products,
  style,
  getItemCountBasket,
  favoritesArr,
  getFavorites,
}) => {
  const [productCards, setProductCards] = useState([]);
  const [favorites, setFavorites] = useState(favoritesArr);

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

    products = products.map((item) => {
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
    getItemCountBasket(
      myProducts.filter((item) => item.basket === true).length
    );
  }, [products]);
  useEffect(() => {
    setFavorites(favoritesArr);
  }, [favoritesArr]);

  return (
    productCards && (
      <section className='cardProductCatalogs'>
        {productCards.map((item, i) => (
          <section key={i} className={`cardProductCatalog ${style}`}>
            <div className='cardProductCatalog-img'>
              <img
                src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
                alt={item.data.photos.filename}
              />
              <div className='cardProductCatalog-right'>
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
                  className='cardProductCatalog-icon'
                >
                  <img
                    className='cardProductCatalog-iconPhone'
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
                  className='cardProductCatalog-icon'
                >
                  <img
                    className='cardProductCatalog-iconPhone'
                    src={item.compare ? ArrowsClockwiseR : ArrowsClockwise}
                    alt='image'
                  />
                </div>
              </div>
            </div>
            <div className='cardProductCatalog-infos'>
              <div className='cardProductCatalog-comments'>
                <div className='cardProductCatalog-commentsInfo'>
                  <img
                    className='cardProductCatalog-iconCommentsPhone'
                    src={ChatCircle}
                    alt='image'
                  />
                  <div className='cardProductCatalog-commentsCount'>
                    {item.data.generalInfo.commentsAmount === null
                      ? 0
                      : item.data.generalInfo.commentsAmount}
                  </div>
                </div>
                <ColorCount quantity={item.data.generalInfo.quantity} />
              </div>
              <div className='cardProductCatalog-name'>
                <NavLink
                  className='cardProductCatalog-nameLink'
                  to={`/product/${item.data.generalInfo.category}/${item.data._id}`}
                >
                  <div className='cardProductCatalog-nameBrand'>
                    {item.data.series.name}
                  </div>
                  {item.data.flavor}
                </NavLink>
              </div>
              <div className='cardProductCatalog-pay'>
                <div className='cardProductCatalog-payNum'>
                  {item.data.generalInfo.price} ₽
                </div>
                <div
                  onClick={() =>
                    addChangeProduct({ ...item, basket: !item.basket })
                  }
                  className={`cardProductCatalog-iconShop ${
                    item.basket
                      ? 'cardProductCatalog-basketTrue'
                      : 'cardProductCatalog-basketFalse'
                  }`}
                >
                  <img
                    className='cardProductCatalog-iconPhone'
                    src={Shopping}
                    alt='image'
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    )
  );
};

export default CardProductCatalog;
