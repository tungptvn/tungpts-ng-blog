function catSaveCtrl(catItem, categoriesService, $log) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.item = catItem;
  vm.title = function () {
    if (catItem.Id != 0) {
      return 'Edit'
    }
    return 'New';
  }
  vm.save = function () {
    switch (vm.item.Id) {
      case 0:
        categoriesService.post(vm.item).then(() => {
          swal('Success');
        }).catch(err => swal('Error', `${err}`, 'error'));
        break;

      default:
        categoriesService.put(vm.item.Id, vm.item).then(() => {
          swal('Success');
        }).catch(err => swal('Error', `${err}`, 'error'));
        break;
    }
    $log.debug('item', vm.item)

  }
}

export default {
  name: 'catSaveCtrl',
  fn: catSaveCtrl
};
