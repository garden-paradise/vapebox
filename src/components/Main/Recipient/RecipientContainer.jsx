import { connect } from 'react-redux';
import Recipient from './Recipient';

const mapStateToProps = (state) => {
  return {
    accountInfo: state.auth.accountInfo,
    basketFormInfo: state.basket.basketFormInfo,
  };
};

export default connect(mapStateToProps, { undefined })(Recipient);
