function adminCtrl(authService, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.logout = function () {
    authService.logout(function () {
      $state.transitionTo('default.home');
    })
  }
  vm.title = 'this is admin';
}

export default {
  name: 'adminCtrl',
  fn: adminCtrl
};
