function storage(AppSettings, $window) {
  'ngInject';

  function Storage() {
    this.storage = AppSettings.storage || 'sessionStorage';
  }
  Storage.prototype.get = function (key) {
    return $window[this.storage].getItem(key);
  }
  Storage.prototype.set = function (key, value) {
    $window[this.storage].setItem(key, value);
  }
  Storage.prototype.remove = function (key) {
    $window[this.storage].removeItem(key);
  }
  return new Storage();
}

export default {
  name: 'storage',
  fn: storage
};
