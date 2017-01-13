'use strict';

app.controller("AutoEditCtrl", function($scope, $location, $rootScope, $routeParams, FirebaseFactory) {

  $scope.$watch($rootScope.landing);
  $rootScope.editMode =  true;
  $rootScope.landing = false;

  $scope.title ="Edit Auto";
  $scope.submitButtonText = "Re-Build Auto";
  $scope.garageButtonText = "Cancel";
  $scope.newAuto = {};


  $scope.$watch($rootScope.editMode);
  //calls the factory to pull auto info from firebase
  FirebaseFactory.getSingleAutofromFireBase($rootScope.selectedAuto.id)
     .then(function successCallback(response){
      $scope.newAuto = response;
     });

  //calls the factory to add new vehicle to firebase
  $scope.addNewAuto = function (){
    FirebaseFactory.putSingleAuto($rootScope.selectedAuto.id, $scope.newAuto)
      .then(function successCallback(response) {
        $location.path("/garage/:uid");
      });
  };

  $scope.goToGarage = function (){
      $location.path("/garage/:uid");
  };

});