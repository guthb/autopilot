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
      })
    })
  };

  $scope.editAutoArrayItem = function (auto) {
    $rootScope.selectedAuto = auto;
      console.log("auto in edit array", auto);
        $location.url(`/edit/${auto.vin}`);
  }

  $scope.gotToService = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.url("/serivce");
  }


});


