import star from './../images/main/product/star.png';
import starColor from './../images/main/product/starColor.svg';

const initialState = {
  stars: [star, star, star, star, star],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STARS': {
      return {
        ...state,
        stars: action.stars,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setStars: (stars) => ({
    type: 'SET_STARS',
    stars,
  }),
};

export const getStars = (stars) => async (dispatch) => {
  dispatch(actions.setStars(stars));
};

export default commentsReducer;
