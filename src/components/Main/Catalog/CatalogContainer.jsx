import { connect } from 'react-redux';
import { getFavorites } from '../../../redux/favorites-reducer';
import {
  getItemCountBasket,
  getNewProducts,
  getPopularProducts,
  getProductsByCategory,
} from '../../../redux/products-reducer';
import Catalog from './Catalog';

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    favoritesArr: state.favorites.favoritesArr,
  };
};

export default connect(mapStateToProps, {
  getNewProducts,
  getPopularProducts,
  getItemCountBasket,
  getProductsByCategory,
  getFavorites,
})(Catalog);
