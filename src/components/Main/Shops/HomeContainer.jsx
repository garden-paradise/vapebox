import { connect } from 'react-redux';
import { selectedItemsAC } from '../../../redux/product-reducer';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    productHome: state.product.productHome,
    toggleMenu: state.product.toggleMenu,
  };
};

export default connect(mapStateToProps, { selectedItemsAC })(Home);
