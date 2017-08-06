import axios from 'axios';
import co from 'co'

function authService($http, storage, $log, AppSettings) {
  'ngInject';

  const service = {
    get isAuthenticated() {
      return !!storage.get('token');
    },
    get currentUser() {
      return JSON.parse(storage.get('userInfo')) || {}
    }
  };


  service.login = function (userCred) {

    return new Promise((resolve, reject) => {
      $http({
        method: 'POST',
        url: `${AppSettings.apiUrl}TOKEN`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: `grant_type=password&username=${userCred.username}&password=${userCred.password}`,
      }).then(function (res) {
        $log.info('response token');
        storage.set('token', res.data.access_token)
        storage.set('userInfo', JSON.stringify(res.data))
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

  /* eslint-disable */
  service.signIn = function (user) {
    return axios.post('/api/Account/Register', user)
      .then(_ => {
        let userCred = {
          username: user.Email,
          password: user.Password
        }
        return service.login(userCred)
      })
  }
  /* eslint-enable */

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
