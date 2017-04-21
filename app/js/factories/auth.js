import axios from 'axios';

function authService($http, storage, $log) {
  'ngInject';

  const service = {};

  service.isAuthenticated = function () {

  };

  service.login = function (userCred) {

    return new Promise((resolve, reject) => {
      axios({
          url: 'TOKEN',
          method: 'POST',
          data: `grant_type=password&username=${userCred.username}&password=${userCred.password}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(res => {
          $log.info('response token');
          storage.set('token', res.data.access_token);
          axios.defaults.headers = {
            'Authorization': `Bearer ${res.data.access_token}`
          };
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
          $log.error(err);
        })

    });

  }
  service.logout = function () {

  }

  return service;

}

export default {
  name: 'authService',
  fn: authService
};
