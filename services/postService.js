(function() {
  'use strict';
  angular.module('myApp.services', [])
    .factory('postsData', ['$http',  function($http){
        var dataFactory = {};
        dataFactory.getPosts = function(){
            return  $http.get('database/posts-mockdata.json').then(function(result){
                return _.take( result.data); // 1000 record
            });
        };
        dataFactory.getMorePosts = function( page, post_per_page ){
             return  $http.get('database/posts-mockdata.json').then(function(result){
                return _.take(_.drop(result.data, page*post_per_page), post_per_page); 
                
            });
        }


        return dataFactory ;
    }]);
})();