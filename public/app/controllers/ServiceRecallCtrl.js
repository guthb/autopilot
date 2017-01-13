'use strict';

app.controller("ServiceRecallCtrl", function($scope, $location, $rootScope, FirebaseFactory, RecallFactory){

  $scope.$watch( $rootScope.landing);
  $rootScope.landing = false;
  $scope.title ="Auto Recalls";
  $scope.serviceRecall = [];
  $scope.serviceAuto =  $rootScope.selectedAuto;


  $scope.getAutoRecalls = function () {
    RecallFactory.getRecallsFromApi($scope.serviceAuto.year, $scope.serviceAuto.make, $scope.serviceAuto.model)
    .then(function (response){
      $scope.serviceRecall = response;
      $scope.recallCount = $scope.serviceRecall.length;
    });
   };
   /* populate the count of recalls*/
   $scope.$watch($scope.recallCount);
});