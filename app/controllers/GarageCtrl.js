'use strict';

app.controller("GarageCtrl", function($scope, $location, $rootScope, FirebaseFactory){

$scope.title = "Garage";
$scope.autos =[];
$rootScope.selectedAuto = {};
$scope.newAuto = {};
$rootScope.editMode = false;

  FirebaseFactory.getAutosFromFirebase().then(function(autoCollection){
    console.log("autoCollection from get promise", autoCollection);
    $scope.autos = autoCollection;
  });

  $scope.deleteAutoArrayItem = function (auto) {
    $rootScope.selectedAuto = auto;
      FirebaseFactory.deleteAutoFromFireBase(auto.id)
    .then(function () {
      FirebaseFactory.getAutosFromFirebase()
      .then(function(autoCollection) {
        $scope.autos = autoCollection;
      });
      FirebaseFactory.deleteServiceFromFireBase(auto.vin)
    .then(function () {
      console.log("deleted a service ?");
      });

    });
  };

  $scope.editAutoArrayItem = function (auto) {
    $rootScope.selectedAuto = auto;
      console.log("auto in edit array", auto);
        $location.url(`/edit/${auto.vin}`);
  };

  $scope.goToService = function (auto) {
    console.log("auto in service call", auto.vin);
    $rootScope.selectedAuto = auto;
      $location.path(`/service/${auto.vin}`);
  };


});


