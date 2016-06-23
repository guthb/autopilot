'use strict';

app.controller("ServiceLogCtrl", function($scope, $location, $rootScope, FirebaseFactory){

  $scope.$watch( $rootScope.landing);
  $scope.title ="Auto Service";

  $rootScope.landing = false;

  $scope.serviceAuto =  $rootScope.selectedAuto;
  $scope.serviceLog = {};
  console.log("rootScope into ServiceLog", $rootScope);
  FirebaseFactory.getServiceFromSelectedAutoFromFirebase().then(function(serviceCollection){
    console.log("autoCollection from get promise", serviceCollection);
    $scope.serviceLog = serviceCollection;
  });


 $scope.garage = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.path(`/garage/1`);
  };





});