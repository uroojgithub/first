(function(){
  'use strict';
  angular.module("myApp", [])

  .controller("myController", function($scope){
    $scope.name="";
    $scope.count= 0;
    $scope.no = function(){
      var no = 0;
      $scope.count = no;
    };
    function calNo(string){

    }
  });

})();
