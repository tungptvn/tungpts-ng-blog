(function() {
  'use strict';
  angular.module('myApp.services', [])
    .factory('postsData', ['$http',  function($http){
        var dataFactory = {};
        dataFactory.getPosts = function(){
            return  $http.get('database/posts-mockdata.json').then(function(result){
                return _.take( result.data, 10);
            });
        };


        return dataFactory ;
    }]);
})();
