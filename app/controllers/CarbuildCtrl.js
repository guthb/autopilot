'use strict';

app.controller("CarbuildCtrl", function($scope, $location, $rootScope, FirebaseFactory) {

  $scope.$watch( $rootScope.landing);
  $rootScope.editMode =  false;

  $rootScope.landing = false;

  $scope.title ="New Auto";
  $scope.submitButtonText = "Build Auto";
  $scope.clearButtonText = "Clear";
  $scope.garageButtonText = "Garage";

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
          Materialize.toast("Auto Added!", 3000,  "orange lighten-3");
        });
        //resets the values for next entry
      $scope.newAuto = {
        year: "",
        make: "",
        model: "",
        vin: "",
        color:"",
        uid:""
      };
  };

  // clears values if mistake noticed
  $scope.clearAutoData = function () {
    $scope.newAuto = {
      year: "",
      make: "",
      model: "",
      vin: "",
      color:"",
      uid:""
    };
  };


  // Takes you to garage
  $scope.goToGarage = function (){
    $location.url("/garage/:uid");
  };

}); //--->end of controller
