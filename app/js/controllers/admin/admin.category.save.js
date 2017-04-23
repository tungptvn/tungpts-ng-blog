function catSaveCtrl(catItem, categoriesService, $log, $scope) {
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
          swal('Success', 'Successfully save', 'success');
        }).catch(err => swal('Error', `${err}`, 'error'));
        break;

      default:
        categoriesService.put(vm.item.Id, vm.item).then(() => {
          swal('Success', 'Successfully save', 'success');
        }).catch(err => swal('Error', `${err}`, 'error'));
        break;
    }
    $log.debug('item', vm.item)

  }

  function readFile() {

    if (this.files && this.files[0]) {

      var FR = new FileReader();

      FR.addEventListener("load", function (e) {
        document.getElementById("imgDisplay").src = e.target.result;
        $scope.$apply(() => {
          vm.item.Image = e.target.result;
        })
      });
      FR.readAsDataURL(this.files[0]);
    }

  }
  document.getElementById("imgFile").addEventListener("change", readFile);
}

export default {
  name: 'catSaveCtrl',
  fn: catSaveCtrl
};
