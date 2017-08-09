import * as axios from 'axios';

function categoriesService($log) {
  'ngInject';
  const apiEntity = 'api/Categories';

  const service = {};

  service.getBy = function (id) {
    return new Promise((resolve) => {
      axios.get(`${apiEntity}/${id}`)
        .then(res => {
          $log.debug(`categoriesService res `, res);
          if (res.status == 404) {
            resolve({});
          }
          resolve(res.data)
        })
        .catch(err => {
          $log.debug(`categoriesService err `, err);
          resolve({
            Id: 0
          })
        });
    });
  };
  service.getPostByCategory = function (id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/GetPostByCategory/${id}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  service.getAll = function () {
    return new Promise((resolve, reject) => {
      axios.get(apiEntity)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
  service.post = function (newCat) {
    return new Promise((resolve, reject) => {
      axios.post(apiEntity, newCat).then(res => resolve(res)).catch(err => reject(err));
    })
  }
  service.put = function (id, cat) {
    return new Promise((resolve, reject) => {
      axios.put(apiEntity + `/${id}`, cat).then(() => resolve()).catch(err => reject(err));
    })
  }
  service.delete = function (id) {
    return new Promise((reslove, reject) => {
      axios.delete(apiEntity + '/' + id).then(res => reslove(res)).catch(err => reject(err));
    })
  }
 
  return service;
}
export default {
  name: 'categoriesService',
  fn: categoriesService
};
