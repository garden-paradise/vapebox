import { favoritesAPI } from '../api/info-api';

const initialState = {
  favoritesArr: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITES': {
      return {
        ...state,
        favoritesArr: action.favoritesArr,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setFavorites: (favoritesArr) => ({
    type: 'SET_FAVORITES',
    favoritesArr,
  }),
};

export const getFavorites = (token) => async (dispatch) => {
  const response = await favoritesAPI.getFavorites(token);
  dispatch(actions.setFavorites(response.favoriteProducts));
};

export default favoritesReducer;
