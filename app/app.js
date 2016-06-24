"use strict";

var app = angular.module("AutoPilot", ["ngRoute", "ui.materialize"])
.constant ('firebaseURL', 'https://ng-bg-pm.firebaseio.com/')
.constant ('recallURL', 'http://www.nhtsa.gov/webapi/api/Recalls/vehicle/');

let isAuth = (AuthFactory) => new  Promise ((resolve, reject) =>  {
  if (AuthFactory.isAuthenticated()){
    console.log("User is authenticated resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/landing.html",
      controller: "",
      resolve: {isAuth}
    }).
    when("/landing", {
      templateUrl: "partials/landing.html",
      resolve: {isAuth}
    }).
    when("/new", {
      templateUrl: "partials/autocard.html",
      controller: "CarbuildCtrl",
      resolve: {isAuth}
    }).
    when("/garage/:uid", {
      templateUrl: "partials/garage.html",
      controller: "GarageCtrl",
      resolve: {isAuth}
    }).
    when("/edit/:autoVin", {
      templateUrl: "partials/autocard.html",
      controller: "AutoEditCtrl",
      resolve: {isAuth}
    }).
    when("/service/:autoVin", {
      templateUrl: "partials/service.html",
      controller: "ServiceCtrl",
      resolve: {isAuth}
    }).
    when("/log/:autoVin", {
      templateUrl: "partials/servicelog.html",
      controller: "ServiceLogCtrl",
      resolve: {isAuth}
    }).
    when("/recall/:autoVin", {
      templateUrl: "partials/servicerecall.html",
      controller: "ServiceRecallCtrl",
      resolve: {isAuth}
    }).
    when("/register", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl",
    }).
    when("/login", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});


app.run(($location) => {
  let addressRef = new Firebase('https://ng-bg-pm.firebaseio.com/');
  addressRef.unauth();
  addressRef.onAuth( authData => {
    console.log("RUN");
    if(!authData) {
      console.log("after auth check");
      $location.path('/login');
    }
  }) //firebase method
});
