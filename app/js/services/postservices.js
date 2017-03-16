function postService(httpClient) {
  'ngInject';

  const service = {};

  service.getBy = function (id) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/posts/${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  service.getAll = function () {
    return new Promise((resolve, reject) => {
      httpClient.get('/posts')
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };
  service.getByCategory = function (id) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/posts/category/${id}`)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
  };
  service.getPostByCategory = function (id) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/api/GetPostByCategory/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  return service;
}
export default {
  name: 'postService',
  fn: postService
};
