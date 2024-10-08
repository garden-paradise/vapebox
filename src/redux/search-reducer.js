import { searchAPI } from '../api/info-api';

const initialState = {
  searchProducts: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_PRODUCTS': {
      return {
        ...state,
        searchProducts: action.searchProducts,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setSearchProducts: (searchProducts) => ({
    type: 'SET_SEARCH_PRODUCTS',
    searchProducts,
  }),
};

export const searchText = (text) => async (dispatch) => {
  const response = await searchAPI.searchText(text);
  dispatch(actions.setSearchProducts(response.data));
};

export default searchReducer;
