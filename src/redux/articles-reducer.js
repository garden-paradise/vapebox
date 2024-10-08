import { articlesAPI } from '../api/info-api';

const initialState = {
  articles: null,
  article: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES': {
      return {
        ...state,
        articles: action.articles,
      };
    }
    case 'SET_ARTICLE': {
      return {
        ...state,
        article: action.article,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setArticles: (articles) => ({
    type: 'SET_ARTICLES',
    articles,
  }),
  setArticle: (article) => ({
    type: 'SET_ARTICLE',
    article,
  }),
};

export const getAllArticles = () => async (dispatch) => {
  const data = await articlesAPI.getAllArticles();
  dispatch(actions.setArticles(data));
};
export const getArticlesQuantum = (quantity) => async (dispatch) => {
  const data = await articlesAPI.getArticlesQuantity(quantity);
  dispatch(actions.setArticles(data));
};
export const getArticle = (articleId) => async (dispatch) => {
  const data = await articlesAPI.getArticle(articleId);
  dispatch(actions.setArticle(data));
};

export default articlesReducer;
