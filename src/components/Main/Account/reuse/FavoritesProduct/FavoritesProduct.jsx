import './FavoritesProduct.scss';
import Shopping from './../../../../../images/header/Shopping.svg';
import { favoritesAPI } from '../../../../../api/info-api';

const FavoritesProduct = ({ data, addChangeProduct, getFavorites }) => {
  return (
    <section className='favoritesProducts'>
      {data.map((item, i) => (
        <section key={i} className='favoritesProduct'>
          <div
            onClick={() => {
              favoritesAPI.removeFromFavorites({
                token: localStorage.getItem('token'),
                category: item.data.generalInfo.category,
                productId: item.data._id,
              });
              getFavorites(localStorage.getItem('token'));
            }}
            className='favoritesProduct-delete'
          >
            &#10006;
          </div>
          <div className='favoritesProduct_info'>
            <img
              src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
              alt={item.data.photos.filename}
              className='buyProduct-img'
            />
            <div className='favoritesProduct_info-info'>
              <div>
                <div className='favoritesProduct_info-name'>
                  {item.data.series.name}
                </div>
                <div className='favoritesProduct_info-flavor'>
                  {item.data.flavor}
                </div>
              </div>
              <div className='favoritesProduct_info-infoBlock'>
                <div className='favoritesProduct_info-sum'>
                  {item.data.generalInfo.price} ₽
                </div>

                <div
                  onClick={() =>
                    addChangeProduct({ ...item, basket: !item.basket })
                  }
                  className={`favoritesProduct_info-shoppingBlock ${
                    item.basket
                      ? 'favoritesProduct_info-basketTrue'
                      : 'favoritesProduct_info-basketFalse'
                  }`}
                >
                  <img src={Shopping} alt='ShoppingImg' />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default FavoritesProduct;
