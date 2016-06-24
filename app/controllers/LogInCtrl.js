'use strict';

app.controller("LoginCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory){

  // $scope.welcome = "hello world";

  let ref = new Firebase(firebaseURL);
  // console.log("ref",  ref);


  // $scope.hasUser =false;


  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === '/logout'){
    ref.unauth();  //firebase method that kills token
    $rootScope.isActive = false;
  }

  $scope.register = () => {
    console.log("you clicked register");
    ref.createUser({
        email: $scope.account.email,
        password: $scope.account.password
    }, (error, userData) => {
          if(error){
            console.log(`Error creating user: ${error}`);
          } else{
            console.log(`Created user account with uid: ${userData.uid}`);
            $scope.login();
          }
        });
    };

 $scope.login = () => {
  console.log("you cliked login");
  AuthFactory
    .authenticate($scope.account)

    .then( () => {
      // $scope.hasUser =true;
      $location.path("/");
      $scope.$apply();
      $rootScope.isActive =true;
    });
 };

});