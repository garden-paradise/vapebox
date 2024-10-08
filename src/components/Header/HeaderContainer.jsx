import { connect } from 'react-redux';
import { getAccountInformation } from '../../redux/auth-reducer';
import { getFavorites } from '../../redux/favorites-reducer';
import { getMenuOpen } from '../../redux/menu-reducer';
import { getItemCountBasket, getOrders } from '../../redux/products-reducer';
import { searchText } from '../../redux/search-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    accountInfo: state.auth.accountInfo,
    itemCountBasket: state.products.itemCountBasket,
    myOrders: state.products.myOrders,
    menuOpen: state.menu.menuOpen,
  };
};

export default connect(mapStateToProps, {
  getAccountInformation,
  getOrders,
  getMenuOpen,
  getFavorites,
  searchText,
  getItemCountBasket,
})(Header);
