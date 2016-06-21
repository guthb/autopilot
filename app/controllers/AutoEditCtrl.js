'use strict';

app.controller("AutoEditCtrl", function($scope, $location, $rootScope, $routeParams, FirebaseFactory) {

  $scope.$watch($rootScope.landing);
  // $rootScope.selectedAuto = {};
  $rootScope.editMode =  true;
  $rootScope.landing = false;
  console.log("rootscope", $rootScope.landing);

  $scope.title ="Edit Auto";
  $scope.submitButtonText = "Re-Build Auto";
  $scope.newAuto = {};

  $scope.$watch($rootScope.editMode);

  FirebaseFactory.getSingleAutofromFireBase($rootScope.selectedAuto.id)
     .then(function successCallback(response){
      $scope.newAuto = response;
     })

  //calls the factory to add new vehicle to firebase
  $scope.addNewAuto = function (){
    FirebaseFactory.putSingleAuto($rootScope.selectedAuto.id, $scope.newAuto)
      .then(function successCallback(response) {
        console.log(response)
        $location.url("/garage/1");
      });
  };

});