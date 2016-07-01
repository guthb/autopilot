'use strict';

app.controller("ServiceCtrl", function($scope, $location, $rootScope, FirebaseFactory){

  $scope.$watch( $rootScope.landing);
  $scope.title ="Auto Service";

  $rootScope.landing = false;

  $scope.serviceAuto = {};


  $scope.type = {
    value: "",
    choices: ["fuel", "oil", "maintenace", "tires"]
  };



  var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    $scope.disable = [false, 1, 7];
    $scope.today = 'Today';
    $scope.clear = 'Clear';
    $scope.close = 'Close';
    var days = 15;
    $scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.onStart = function () {
        // console.log('onStart');
    };
    $scope.onRender = function () {
        // console.log('onRender');
    };
    $scope.onOpen = function () {
        // console.log('onOpen');
    };
    $scope.onClose = function () {
        // console.log('onClose');
    };
    $scope.onSet = function () {
        // console.log('onSet');
    };
    $scope.onStop = function () {
        // console.log('onStop');
    };

    $scope.serviceLog = {
        vin:"",
        type:"",
        date:currentTime,
        mileage:"",
        cost:"",
        note:""
      };

  FirebaseFactory.getSingleAutofromFireBase($rootScope.selectedAuto.id, $scope.selectedAuto)
     .then(function successCallback(response){
      $scope.serviceAuto = response;
     });

  //calls the factory to add new service to firebase
  $scope.saveServiceLog = function (){
    FirebaseFactory.postServiceIntoFirebase($scope.serviceLog, $rootScope.selectedAuto.vin)
      .then(function successCallback(response) {
        console.log(response);
        $location.url(`/garage/:uid`);
      });
  };

  $scope.viewAutoServiceLogs = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.path(`/log/${$scope.serviceAuto.vin}`);
  };


 $scope.backToGarage = function (auto) {
    $rootScope.selectedAuto = auto;
      $location.path(`/garage/1`);
  };


  $scope.viewAutoRecalls= function (auto) {
    $rootScope.selectedAuto = auto;
      $location.path(`/recall/{$scope.serviceAuto.vin`);
  };



});