'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  $http.get('/data/positionList.json').success(function(resp){
    $scope.list = resp;
  });

   $http.get('/api/fwshop/jsonData/hotGoods/hotGoodsList.json').success(function(resp){
    console.log(resp); 
  });
}]);
