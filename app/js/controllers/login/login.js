function loginCtrl($log,authService) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'this is login';
  vm.userCred ={};
  vm.login = function(){
    $log.info('asdasd');
    $log.debug(vm.userCred);
    authService.login(vm.userCred);
  }
}

export default {
  name: 'loginCtrl',
  fn: loginCtrl
};
