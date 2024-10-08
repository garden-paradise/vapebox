const initialState = {
  menuOpen: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MENU_OPEN': {
      return {
        ...state,
        menuOpen: action.menuOpen,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setMenuOpen: (menuOpen) => ({
    type: 'SET_MENU_OPEN',
    menuOpen,
  }),
};

export const getMenuOpen = (menuOpen) => async (dispatch) => {
  dispatch(actions.setMenuOpen(menuOpen));
};

export default menuReducer;
