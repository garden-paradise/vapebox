import { instance } from './api';

export const productsAPI = {
  getNewProducts() {
    return instance
      .get(`get_all_new_products`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getQuantityNewProducts(quantity) {
    return instance
      .post(`get_new_products`, {
        quantity,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getPopularProducts() {
    return instance
      .get(`get_all_popular_products`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getQuantityPopularProducts(quantity) {
    return instance
      .post(`get_popular_products`, {
        quantity,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getProductsByIds(products) {
    return instance
      .post(`get_products_by_ids`, { products: products })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getProductsByCategory(category) {
    return instance
      .post(`get_products_by_category`, { category: category })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getProductsByBrand(brand) {
    return instance
      .post(`get_products_by_brand`, brand)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const articlesAPI = {
  getAllArticles() {
    return instance
      .get(`get_all_articles`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getArticlesQuantity(quantity) {
    return instance
      .post(`get_articles`, {
        quantity,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getArticle(articleId) {
    return instance
      .post(`get_article_by_id`, {
        articleId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const accountAPI = {
  getSignUp(signUp) {
    return instance
      .post(`sign_up`, signUp)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getSignIn(signIn) {
    return instance
      .post(`sign_in`, signIn)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
        }
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getAccountInformation(token) {
    return instance
      .post(`get_account_info`, { token: token })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  changeAccountInformation(accountInformation) {
    return instance
      .post(`change_account_info`, accountInformation)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getChangePassword(changePassword) {
    return instance
      .post(`change_password`, changePassword)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getRestorePassword(restorePassword) {
    return instance
      .post(`restore_password`, restorePassword)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getPasswordRestoreLink(restoreLink) {
    return instance
      .post(`get_password_restore_link`, restoreLink)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getConfirmation(email, token) {
    return instance
      .get(`confirmation/${email}/${token}`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const orderAPI = {
  makeOrder(order) {
    return instance
      .post(`make_order`, order)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  getOrders(token) {
    return instance
      .post(`get_orders`, { token: token })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const employeesAPI = {
  getAllEmployees() {
    return instance
      .get(`get_all_employees`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const searchAPI = {
  searchText(text) {
    return instance
      .post(`search_text`, text)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};

export const favoritesAPI = {
  getFavorites(token) {
    return instance
      .post(`get_favorites`, { token: token })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  addToFavorites(product) {
    return instance
      .post(`add_to_favorites`, product)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
  removeFromFavorites(text) {
    return instance
      .post(`remove_from_favorites`, text)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('Error: ' + e);
        return 'Error: ' + e;
      });
  },
};
