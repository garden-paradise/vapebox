import { connect } from 'react-redux';
import { getBasketFormInfo } from '../../../redux/basket-reducer';
import Basket from './Basket';

export default connect(undefined, { getBasketFormInfo })(Basket);
