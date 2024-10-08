import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import products from './products-reducer';
import articles from './articles-reducer';
import auth from './auth-reducer';
import basket from './basket-reducer';
import menu from './menu-reducer';
import comments from './comments-reducer';
import favorites from './favorites-reducer';

const reducers = combineReducers({
  products,
  articles,
  basket,
  auth,
  menu,
  comments,
  favorites,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
