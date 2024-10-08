import { connect } from 'react-redux';
import { getArticlesQuantum } from '../../../redux/articles-reducer';
import { getFavorites } from '../../../redux/favorites-reducer';
import {
  getQuantityPopularProducts,
  getQuantityNewProducts,
  getItemCountBasket,
} from '../../../redux/products-reducer';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    quantityNewProducts: state.products.quantityNewProducts,
    quantityPopularProducts: state.products.quantityPopularProducts,
    articles: state.articles.articles,
    favoritesArr: state.favorites.favoritesArr,
  };
};

export default connect(mapStateToProps, {
  getQuantityNewProducts,
  getQuantityPopularProducts,
  getArticlesQuantum,
  getItemCountBasket,
  getFavorites,
})(Home);
