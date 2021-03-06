import 'sweetalert';

function catMngCtrl(catList, categoriesService, $state, $log, $scope) {
  'ngInject';
  // ViewModel

  $log.debug("$state", $state);
  const vm = this;
  vm.catList = catList;
  vm.title = 'Categories Management';
  vm.delete = function (Id) {
    swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel plx!',
        closeOnConfirm: false,
        closeOnCancel: false
      },
      (isConfirm) => {
        if (isConfirm) {
          categoriesService.delete(Id).then((res) => {
            $log.debug("deleted", res);
            swal('Deleted', 'The entity has been deleted :)', 'success');
            categoriesService.getAll().then(res => {
              $scope.$apply(() => {
                vm.catList = res;
              })
            });
          }).catch(err => swal(`Error`, `${err}`, `error`))
        } else {
          swal('Cancelled', 'The entity has is safe :)', 'error');
        }
      });

  }
}

export default {
  name: 'catMngCtrl',
  fn: catMngCtrl
};
