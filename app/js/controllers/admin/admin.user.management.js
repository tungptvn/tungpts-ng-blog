import 'sweetalert';

function userMngCtrl(users, userService, $state, $log, $scope) {
  'ngInject';
  // ViewModel

  $log.info("$state", $state);
  const vm = this;
  vm.users = users;
  $log.info("users", vm.users)
  vm.title = 'User Management';
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
          userService.delete(Id).then((res) => {
            $log.debug("deleted", res);
            swal('Deleted', 'The entity has been deleted :)', 'success');
            userService.getAll().then(res => {
              $scope.$apply(() => {
                vm.users = res;
              })
            });
          }).catch(err => swal(`Error`, `${err}`, `error`))
        } else {
          swal('Cancelled', 'The entity has is safe :)', 'error');
        }
      });

  }
    vm.activeOrDeactive = function(id){
        swal({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel plx!',
        closeOnConfirm: false,
        closeOnCancel: false
      },
      (isConfirm) => {
        if (isConfirm) {
          userService.activeOrDeactive(id).then((res) => {
            $log.debug("Success", res);
            swal('Success', 'action Successfully :)', 'success');
            userService.getAll().then(res => {
              $scope.$apply(() => {
                vm.users = res;
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
  name: 'userMngCtrl',
  fn: userMngCtrl
};
