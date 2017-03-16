function categoriesService(httpClient) {
  'ngInject';

  const service = {};

  service.getBy = function (id) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/api/categories/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
 service.getPostByCategory = function (id) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/api/GetPostByCategory/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  service.getAll = function () {
    return new Promise((resolve, reject) => {
      httpClient.get('/api/categories')
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  return service;
}
export default {
  name: 'categoriesService',
  fn: categoriesService
};
