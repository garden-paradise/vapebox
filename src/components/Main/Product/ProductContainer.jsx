import { connect } from 'react-redux';
import {
  getItemCountBasket,
  getProductsByIds,
  getQuantityNewProducts,
} from '../../../redux/products-reducer';
import Product from './Product';

const mapStateToProps = (state) => {
  return {
    quantityNewProducts: state.products.quantityNewProducts,
    products: state.products.productsById,
  };
};

export default connect(mapStateToProps, {
  getQuantityNewProducts,
  getProductsByIds,
  getItemCountBasket,
})(Product);
