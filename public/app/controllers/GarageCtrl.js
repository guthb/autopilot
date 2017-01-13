'use strict';

app.controller("GarageCtrl", function($scope, $location, $rootScope, FirebaseFactory){

  $scope.title = "Garage";
  $scope.autos =[];
  $rootScope.selectedAuto = {};
  $scope.newAuto = {};
  $rootScope.editMode = false;

  FirebaseFactory.getAutosFromFirebase().then(function(autoCollection){
    $scope.autos = autoCollection;
  });


  $scope.deleteAutoArrayItem = function (auto) {
    $rootScope.selectedAuto = auto;
      FirebaseFactory.deleteAutoFromFireBase(auto.id)
    .then(function () {
      Materialize.toast(`You Deleted The ${auto.model}`, 5000,  "orange lighten-3");
      FirebaseFactory.getAutosFromFirebase()
      .then(function(autoCollection) {
        $scope.autos = autoCollection;
      });
      FirebaseFactory.deleteServiceFromFireBase(auto.vin)
    .then(function () {
      });

    });
  };

  $scope.editAutoArrayItem = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.url(`/edit/${auto.vin}`);
  };

  $scope.goToService = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.path(`/service/${auto.vin}`);
  };


});


