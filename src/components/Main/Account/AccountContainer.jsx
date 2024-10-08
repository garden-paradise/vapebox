import { connect } from 'react-redux';
import Account from './Account';
import { getItemCountBasket } from '../../../redux/products-reducer';
import { getFavorites } from '../../../redux/favorites-reducer';

const mapStateToProps = (state) => {
  return {
    accountInfo: state.auth.accountInfo,
    myOrders: state.products.myOrders,
    favoritesArr: state.favorites.favoritesArr,
  };
};

export default connect(mapStateToProps, { getItemCountBasket, getFavorites })(
  Account
);
