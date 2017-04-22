function postSaveCtrl(postService, $scope, postItem, $log) {
  'ngInject';
  const vm = this;
  vm.item = postItem;
  tinymce.baseURL='/vendor/tinymce'
  tinymce.init({
    selector: '#mytextarea',
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ]
  });
  vm.title = function () {
    if (postItem.Id != 0) {
      return 'Edit'
    }
    return 'New';
  }
  $log.debug($('#summernote')[0]);

  vm.save = function () {
    switch (vm.item.Id) {
      case 0:
        postService.post(vm.item).then(() => {
          swal('Success', 'Successfully save', 'success');
        }).catch(err => swal('Error', `${err}`, 'error'));
        break;

      default:
        postService.put(vm.item.Id, vm.item).then(() => {
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
  name: 'postSaveCtrl',
  fn: postSaveCtrl
};
