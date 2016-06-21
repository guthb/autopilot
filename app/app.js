"use strict";

var app = angular.module("AutoPilot", ["ngRoute"])
.constant ('firebaseURL', 'https://ng-bg-pm.firebaseio.com/')
.constant ('recallURL', 'http://www.nhtsa.gov/webapi/api/Recalls/vehicle/')

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/landing.html",
      // controller: "",
      // resolve: {isAuth}
    }).
    when("/landing", {
      templateUrl: "partials/landing.html",
      // resolve: {isAuth}
    }).
    when("/new", {
      templateUrl: "partials/autocard.html",
      controller: "CarbuildCtrl",
      // resolve: {isAuth}
    }).
    when("/garage/:uid", {
      templateUrl: "partials/garage.html",
      controller: "GarageCtrl",
      // resolve: {isAuth}
    }).
    when("/edit/:autoVin", {
      templateUrl: "partials/autocard.html",
      controller: "AutoEditCtrl",
      // resolve: {isAuth}
    }).
    when("/service", {
      templateUrl: "partials/service.html",
      controller: "ServiceCtrl",
      // resolve: {isAuth}
    }).
    when("/log", {
      templateUrl: "partials/servicelog.html",
      controller: "",
      // resolve: {isAuth}
    }).
    when("/recall", {
      templateUrl: "partials/servicerecall.html",
      controller: "",
      // resolve: {isAuth}
    }).


    // when("/register", {
    //   templateUrl: "partials/login.html",
    //   controller: "LoginCtrl",
    // }).
    // when("/login", {
    //   templateUrl: "partials/login.html",
    //   controller: "LoginCtrl"
    // }).
    // when("/logout", {
    //   templateUrl: "partials/login.html",
    //   controller: "LoginCtrl"
    // }).
    otherwise("/");
});