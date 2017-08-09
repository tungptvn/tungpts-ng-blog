function postMngCtrl(postList, catList, postService, $scope, $log) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.postList = postList;
  console.log('postList', postList);
  vm.catList = catList
  console.log('catList', vm.catList);
  vm.searchText = '';
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
                vm.postList = res;
              })
            });
          }).catch(err => swal(`Error`, `${err}`, `error`))
        } else {
          swal('Cancelled', 'The entity has is safe :)', 'error');
        }
      });

  }
  vm.ApproveOrCancelPost = function (id) {
    postService.ApproveOrCancelPost(id).then(_ => swal('success', 'action successfully :)', 'success')).then(_ => {
      postService.getAll().then(rec => {
        $scope.$apply(() => {
          vm.postList = rec
        })

      })
    })
  }
}

export default {
  name: 'postMngCtrl',
  fn: postMngCtrl
};
