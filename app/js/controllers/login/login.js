function loginCtrl($log) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'this is login';
  vm.userCred ={};
  vm.login = function(){
    $log.info('asdasd');
    $log.debug(vm.userCred);
  }
}

export default {
  name: 'loginCtrl',
  fn: loginCtrl
};
