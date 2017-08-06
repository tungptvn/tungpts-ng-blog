function adminCtrl(authService, currentUserRoles, $state) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.currentUserRoles = currentUserRoles
  vm.isAdmin = currentUserRoles.some(x => /Admin/.test(x.Name))
  console.log('isAdmin', vm.isAdmin)
  vm.currentUser = authService.currentUser
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
