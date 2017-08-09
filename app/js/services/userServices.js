import * as axios from 'axios';
import co from 'co'

function userService($log) {
  'ngInject';
  const apiEntity = 'api/ApplicationUsers';

  const service = {};

  service.getBy = function (id) {
    return new Promise((resolve) => {
      axios.get(`${apiEntity}/${id}`)
        .then(res => {
          $log.debug(`userService res `, res);
          if (res.status == 404) {
            resolve({});
          }
          resolve(res.data)
        })
        .catch(err => {
          $log.debug(`userService err `, err);
          resolve({
            Id: 0
          })
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

  service.put = function (id, user) {
    return new Promise((resolve, reject) => {
      axios.put(apiEntity + `/${id}`, user).then(() => resolve()).catch(err => reject(err));
    })
  }
  service.delete = function (id) {
    return new Promise((reslove, reject) => {
      axios.delete(apiEntity + '/' + id).then(res => reslove(res.data)).catch(err => reject(err));
    })
  }
  service.activeOrDeactive = function (userId) {
    return new Promise((reslove, reject) => {
      axios.patch(`api/ApplicationUsers/ActiveOrDeactive/${userId}`)
        .then(rec => reslove(rec.data))
    })
  }
  service.updateInfo = function (user) {
    return new Promise((reslove, reject) => {
      axios.put(`api/ApplicationUsers/${user.Id}`, user)
        .then(rec => reslove(rec.data))
    })

  }
  service.getCurrentUserRoles = function () {
    return new Promise(reslove => {
      axios.get('api/ApplicationUsers/GetCurrentUserRoles')
        .then(rec => reslove(rec.data))
    })
  }
  return service;
}
export default {
  name: 'userService',
  fn: userService
};
