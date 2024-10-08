import { accountAPI } from '../api/info-api';

const initialState = {
  accountInfo: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_INFO': {
      return {
        ...state,
        accountInfo: action.accountInfo,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setAccountInfo: (accountInfo) => ({
    type: 'SET_ACCOUNT_INFO',
    accountInfo,
  }),
};

export const getAccountInformation = (token) => async (dispatch) => {
  const response = await accountAPI.getAccountInformation(token);
  if (response.status !== 200) {
    localStorage.setItem('token', null);
  }
  dispatch(actions.setAccountInfo(response.data));
};

export default authReducer;
