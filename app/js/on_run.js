import * as axios from 'axios'

function OnRun($rootScope, AppSettings, storage) {
  'ngInject';
  axios.defaults.baseURL = AppSettings.apiUrl;
  var token = storage.get('token');
  if (token) {
    axios.defaults.headers = {
      'Authorization': `Bearer ${token}`
    };
  }
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
  // $rootScope.$on('$viewContentLoading',
  //   function () {
  //     $rootScope.isBusy = true;
  //   });
  // $rootScope.$on('$viewContentLoaded',
  //   function () {
  //     $rootScope.isBusy = false;
  //   });
  $rootScope.$on('$stateChangeStart',
    function () {
      $rootScope.isBusy = true;

    })
  $rootScope.$on('$stateChangeSuccess',
    function () {
      $rootScope.isBusy = !$rootScope.isBusy;

    })

}

export default OnRun;
