const initialState = {
  basketFormInfo: null,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BASKET_INFO': {
      return {
        ...state,
        basketFormInfo: action.basketFormInfo,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setBasketFormInfo: (basketFormInfo) => ({
    type: 'SET_BASKET_INFO',
    basketFormInfo,
  }),
};

export const getBasketFormInfo = (form) => async (dispatch) => {
  console.log(form);
  dispatch(actions.setBasketFormInfo(form));
};

export default basketReducer;
