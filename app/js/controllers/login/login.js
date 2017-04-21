function loginCtrl($log, authService,$state) {
  'ngInject';
  // ViewModel
  const vm = this;
  $log.info('promise', Promise.version);
  vm.title = 'this is login';
  vm.userCred = {};
  vm.login = function () {
    authService.login(vm.userCred).then(() => {
      if ($state.$current.name == 'login') {
        $state.transitionTo('admin');

      }
    });
  }
}

export default {
  name: 'loginCtrl',
  fn: loginCtrl
};
