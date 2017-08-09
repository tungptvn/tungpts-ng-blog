function userSaveCtrl(user, userService, $log, $scope) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.item = user;
  vm.title = function () {
    return 'Save';
  }
  vm.save = function () {
    userService.put(vm.item.Id, vm.item).then(() => {
      swal('Success', 'Successfully save', 'success');
    }).catch(err => swal('Error', `${err}`, 'error'));
    $log.info('item', vm.item)

  }
}

export default {
  name: 'userSaveCtrl',
  fn: userSaveCtrl
};
