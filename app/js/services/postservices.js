import * as axios from 'axios';

function postService($log) {
  'ngInject';

  const service = {};
  let apiEntity = 'api/posts';
  service.getBy = function (id) {
    return new Promise((resolve) => {
      axios.get(`${apiEntity}/${id}`)
        .then(res => resolve(res.data))
        .catch(err => {
          resolve({
            Id: 0
          });
          $log.debug('err', err);
        });
    });
  };

  service.getAll = function () {
    return new Promise((resolve, reject) => {
      axios.get(apiEntity)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  service.getByCategory = function (id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/posts/category/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    })
  };
  service.getPostByCategory = function (id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/GetPostByCategory/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  service.post = function (newItem) {
    return new Promise((resolve, reject) => {
      axios.post(apiEntity, newItem)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  service.put = function (id, item) {
    return new Promise((resolve, reject) => {
      axios.put(`/api/posts/${id}`, item)
        .then(() => resolve({}))
        .catch(err => reject(err));
    });
  }

  service.delete = function (id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${apiEntity}/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }
   service.ApproveOrCancelPost = function (id) {
    return new Promise((reslove, reject) => {
      axios.patch(apiEntity + '/ApproveOrCancel/' + id).then(res => reslove(res.data)).catch(err => reject(err));
    })
  }
  return service;
}
export default {
  name: 'postService',
  fn: postService
};
