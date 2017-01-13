let isAuth = (AuthFactory) => new  Promise ((resolve, reject) =>  {
  if (AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

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


app.run(($location, FIREBASE_CONFIG, AuthFactory, $rootScope) => {
  firebase.initializeApp(FIREBASE_CONFIG);
  //firebase 2
  //let addressRef = new Firebase('https://ng-bg-pm.firebaseio.com/');
  //addressRef.unauth();
  //addressRef.onAuth( authData => {
  //  if(!authData) {
  //    $location.path('/login');
  //  }
  //}); //firebase 2 method end


  //watch method that fires on change of a route.  3 inputs.
        //event is a change event
        //currRoute is information about your current route
        //prevRoute is information about the route you came from
      $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
          // checks to see if there is a current user
          var logged = AuthFactory.isAuthenticated();

          var appTo;

          // to keep error from being thrown on page refresh
            if(currRoute.originalPath){
            // check if the user is going to the auth page = currRoute.originalPath
            // if user is on auth page then appTo is true
            // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
            appTo = currRoute.originalPath.indexOf('/login') !== -1;
          }

          //if not on /auth page AND not logged in redirect to /login
          if(!appTo && !logged) {
              event.preventDefault();
              $location.path('/login');
          }
      });
});
