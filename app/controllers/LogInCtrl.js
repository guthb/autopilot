'use strict';

app.controller("LoginCtrl", function($scope, $rootScope, $location, AuthFactory){
//app.controller("LoginCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory){
  //let ref = new Firebase(firebaseURL);

  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === '/logout'){
    //ref.unauth();  //firebase method that kills token

    $rootScope.isActive = false;
  }

  $scope.register = () => {
    AuthFactory.registerWithEmail({
        email: $scope.account.email,
        password: $scope.account.password
    }) .then(function (data){ Materialize.toast(`New User Created`, 3000,  "orange lighten-3");
              $scope.login();}).catch(function(error)
          {

            Materialize.toast(`${error.message}`, 3000,  "red lighten-3");
          } )
  };


  $scope.login = () => {

    AuthFactory
      .authenticate($scope.account)
      .then( () => {
        $location.path("/");
        //$scope.$apply();
        $rootScope.isActive =true;
      })
      .catch( (error) => {
        Materialize.toast(`${error.message}`, 5000,  "red lighten-3");
      });
  };

});
