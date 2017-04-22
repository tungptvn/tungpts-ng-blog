import axios from 'axios';

function authService($http, storage, $log, AppSettings) {
  'ngInject';

  const service = {
    get isAuthenticated() {
      return !!storage.get('token');
    }
  };


  service.login = function (userCred) {

    return new Promise((resolve, reject) => {
      $http({
        method: 'POST',
        url: `${AppSettings.apiUrl}/TOKEN`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: `grant_type=password&username=${userCred.username}&password=${userCred.password}`,
      }).then(function (res) {
        $log.info('response token');
        storage.set('token', res.data.access_token);
        axios.defaults.headers = {
          'Authorization': `Bearer ${res.data.access_token}`
        };
        resolve(res.data);

      }, function (err) {
        reject(err.data);
        $log.error(err);
      });
    });

  }
  service.logout = function (cb) {
    storage.remove('token');
    cb();
  }

  return service;

}

export default {
  name: 'authService',
  fn: authService
};
