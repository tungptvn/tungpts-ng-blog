function postMngCtrl(postList,postService,$scope,$log) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.postList = postList;
  vm.searchText = 'asdas';
  vm.title = 'Posts Management';
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
          postService.delete(Id).then((res) => {
            $log.debug("deleted", res);
            swal('Deleted', 'The entity has been deleted :)', 'success');
            postService.getAll().then(res => {
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
  name: 'postMngCtrl',
  fn: postMngCtrl
};
