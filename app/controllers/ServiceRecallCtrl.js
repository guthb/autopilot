'use strict';

app.controller("ServiceRecallCtrl", function($scope, $location, $rootScope, FirebaseFactory, RecallFactory){

  $scope.$watch( $rootScope.landing);
  $rootScope.landing = false;
  $scope.title ="Auto Recalls";

  $scope.serviceRecall = [];

  console.log("rootscope in Recall Ctrl",  $rootScope);

  $scope.serviceAuto =  $rootScope.selectedAuto;
  console.log("ServiceAuto", $scope.serviceAuto );

   $scope.getAutoRecalls = function () {
      RecallFactory.getRecallsFromApi($scope.serviceAuto.year, $scope.serviceAuto.make, $scope.serviceAuto.model)
      .then(function (response){
        console.log("response from RecallAPI", response );
        $scope.serviceRecall = response;
        $scope.recallCount = $scope.serviceRecall.length;
        console.log("length of recalls", $scope.serviceRecall.length);
      });
   };

   /* populate the count of recalls*/
   $scope.$watch($scope.recallCount);
});