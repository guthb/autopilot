'use strict';

app.controller("CarbuildCtrl", function($scope, $location, $rootScope, FirebaseFactory) {

  $scope.welcome = "hello";
  $scope.$watch( $rootScope.landing);

  $rootScope.landing = false;
  console.log("rootscope", $rootScope.landing);

  $scope.title ="New Auto";
  $scope.submitButtonText = "Build Auto";
  $scope.clearButtonText = "Clear";

  $scope.newAuto = {
    year: "",
    make: "",
    model: "",
    vin: "",
    color:"",
    uid:""
  };


  //calls the factory to add new vehicle to firebase
  $scope.addNewAuto = function (){
    let newAuto = $scope.newAuto;
    FirebaseFactory.postAutoIntoFirebase(newAuto)
        .then(function successCallback(response) {
          console.log(response)
          $location.url("/garage/1");
        });
  };

  // resets values for entry of another automobile
  $scope.addAnotherAuto = function () {
    $scope.newAuto = {
      year: "",
      make: "",
      model: "",
      vin: "",
      color:"",
      uid:""
    };
  };

}); //--->end of controller

