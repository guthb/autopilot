/* 'use strict';
app.factory("AuthFactory", function(firebaseURL) {
  let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  return {
    //
      Determine if the client is authenticated
     //
    isAuthenticated () {
      let authData = ref.getAuth();  //firebase method
      return (authData) ? true : false;
    },

    getUser () {
      return currentUserData;
    },

    //
      Authenticate the client via Firebase
     //
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({              //firebase method
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            currentUserData = authData;
            resolve(authData);
          }
        });
      });
    },

  //
      Store each Firebase user's id in the `users` collection

      //

    storeUser (authData) {
      let stringifiedUser = JSON.stringify({ uid: authData.uid });

      return new Promise((resolve, reject) => {
        $http
          .post(`${firebaseURL}/users.json`, stringifiedUser)
          .then(
            res => resolve(res),
            err => reject(err)
          );
      });
    }

  };  //---->end of return of auth factory
});
*/

"use strict";

app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {

  let currentUserData = null;


  //Firebase: Determine if user is authenticated.
  let isAuthenticated = () => {
      return firebase.auth().currentUser ? true : false;
  };

//Firebase: Return email, UID for user that is currently logged in.
  let getUser = () => {
    return firebase.auth().currentUser;
  };

// Kills browser cookie with firebase credentials
  let logout = () => {
    firebase.auth().signOut();
  };

//Firebase: Use input credentials to authenticate user.
  let authenticate = (credentials) => {
    return $q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((authData) =>{
          resolve(authData);
        })
        .catch((error)=>{
          reject(error);
        });
    });
  };

//Firebase: Register a new user with email and password
  let registerWithEmail = (user) => {
    console.log('this is being called')
     return $q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((authData) =>{
          console.log(authData)
          resolve(authData);
        })
        .catch((error)=>{
          console.log(error)
          reject(error);
        });
    });
  };

//Firebase: GOOGLE - Use input credentials to authenticate user.
  let authenticateGoogle = () => {
    return $q((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((authData) => {
          currentUserData = authData.user;
          resolve(currentUserData);
        }).catch((error)=> {
          reject(error);
        });
    });
  };

  return {isAuthenticated:isAuthenticated, getUser:getUser, logout:logout, registerWithEmail:registerWithEmail, authenticate:authenticate, authenticateGoogle: authenticateGoogle};
});
