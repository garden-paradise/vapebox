import { orderAPI, productsAPI } from '../api/info-api';

const initialState = {
  products: null,
  productsById: null,

  quantityNewProducts: null,
  quantityPopularProducts: null,

  myOrders: null,
  itemCountBasket: 0,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {
        ...state,
        products: action.products,
      };
    }
    case 'SET_PRODUCTS_BY_ID': {
      return {
        ...state,
        productsById: action.productsById,
      };
    }

    case 'SET_QUANTITY_NEW_PRODUCTS': {
      return {
        ...state,
        quantityNewProducts: action.quantityNewProducts,
      };
    }
    case 'SET_QUANTITY_POPULAR_PRODUCTS': {
      return {
        ...state,
        quantityPopularProducts: action.quantityPopularProducts,
      };
    }

    case 'SET_ITEM_COUNT_BASKET': {
      return {
        ...state,
        itemCountBasket: action.itemCountBasket,
      };
    }
    case 'SET_MY_ORDERS': {
      return {
        ...state,
        myOrders: action.myOrders,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setProducts: (products) => ({
    type: 'SET_PRODUCTS',
    products,
  }),
  setProductsByIds: (productsById) => ({
    type: 'SET_PRODUCTS_BY_ID',
    productsById,
  }),

  setQuantityNewProducts: (quantityNewProducts) => ({
    type: 'SET_QUANTITY_NEW_PRODUCTS',
    quantityNewProducts,
  }),
  setQuantityPopularProducts: (quantityPopularProducts) => ({
    type: 'SET_QUANTITY_POPULAR_PRODUCTS',
    quantityPopularProducts,
  }),

  setItemCountBasket: (itemCountBasket) => ({
    type: 'SET_ITEM_COUNT_BASKET',
    itemCountBasket,
  }),
  setMyOrders: (myOrders) => ({
    type: 'SET_MY_ORDERS',
    myOrders,
  }),
};

export const getNewProducts = () => async (dispatch) => {
  const data = await productsAPI.getNewProducts();
  dispatch(actions.setProducts(data));
};
export const getQuantityNewProducts = (quantity) => async (dispatch) => {
  const data = await productsAPI.getQuantityNewProducts(quantity);
  dispatch(actions.setQuantityNewProducts(data));
};

export const getPopularProducts = () => async (dispatch) => {
  const data = await productsAPI.getPopularProducts();
  dispatch(actions.setProducts(data));
};
export const getQuantityPopularProducts = (quantity) => async (dispatch) => {
  const data = await productsAPI.getQuantityPopularProducts(quantity);
  dispatch(actions.setQuantityPopularProducts(data));
};

export const getProductsByIds = (productsById) => async (dispatch) => {
  const data = await productsAPI.getProductsByIds(productsById);
  dispatch(actions.setProductsByIds(data));
};

export const getOrders = (products) => async (dispatch) => {
  const data = await orderAPI.getOrders(products);
  dispatch(actions.setMyOrders(data));
};

export const getProductsByCategory = (category) => async (dispatch) => {
  const data = await productsAPI.getProductsByCategory(category);
  dispatch(actions.setProducts(data));
};

export const getItemCountBasket = (quantity) => async (dispatch) => {
  dispatch(actions.setItemCountBasket(quantity));
};

export default productsReducer;
