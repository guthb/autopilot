"use strict";

app.factory("FirebaseFactory", function($q, $http, $rootScope, firebaseURL){

  return {

    getAutosFromFirebase : function() {
      let autos = [];
      // let user = AuthFactory.getUser();
      let useruid = 1
      return $q( (resolve, reject) => {
        $http.get(`${firebaseURL}auto.json?orderBy="uid"&equalTo="${useruid}"`)
          .success( (returnObject) => {
            var autoCollection = returnObject;
              console.log("returnObject", returnObject);
            Object.keys(autoCollection).forEach( (key) => {
              autoCollection[key].id = key;
              autos.push(autoCollection[key]);
            });
            resolve(autos);
        })

        .error(function(error){
          reject(error);
        });
      })
    },

    getServiceFromSelectedAutoFromFirebase : function() {
      let services = [];
      let auto=$rootScope.selectedAuto
      // let user = AuthFactory.getUser();

      return $q( (resolve, reject) => {
        $http.get(`${firebaseURL}service.json?orderBy="vin"&equalTo="${auto.vin}"`)
          .success( (returnObject) => {
            var serviceCollection = returnObject;

            });
          Object.keys(serviceCollection).forEach( (key) => {

            serviceCollection[key].id = key;
            services.push(serviceCollection[key]);
          });
          resolve(autos);
        })
        .error(function(error){
          reject(error);
        });
    },




    putAutoIntoFirebase : function (autoId, newAuto) {
      //let user = AuthFactory.getUser();
      return $q(function(resolve,reject){

          $http.put(
            firebaseURL + `auto/${auto.id}.json`,
            JSON.stringify({
                year: auto.year,
                make: auto.make,
                model: auto.model,
                vin: auto.vin,
                color: auto.color,
                img: auto.img,
                uid: user.uid
            })
          )
          .success(function(response){
              resolve(response);
          });
      });
    },

    postServiceIntoFirebase : function (newService, selectedAutoVin) {
      //let user = AuthFactory.getUser();
      return $q(function(resolve,reject){

          $http.post(
            firebaseURL + `service.json`,
            JSON.stringify({
                vin:selectedAutoVin,
                date:newService.date,
                mileage:newService.mileage,
                cost:newService.cost,
                note:newService.note
            })
          )
          .success(function(response){
              resolve(response);
          });
      });
    },

    postAutoIntoFirebase : function (newAuto) {
      //let user = AuthFactory.getUser();
      return $q(function(resolve,reject){
          $http.post(
            firebaseURL + `auto.json`,
            JSON.stringify({
                  year:newAuto.year,
                  make:newAuto.make,
                  model:newAuto.model,
                  vin:newAuto.vin,
                  color: newAuto.color,
                  img: newAuto.img,
                  // uid:  user.uid,
                  uid:"1"
              }))
          .success(function(response){
              resolve(response);
          });
      });
    },

    deleteAutoFromFireBase : function(sentID) {
      console.log("sentID", sentID );
      return $q((resolve,reject) => {
          $http
          .delete(firebaseURL +`auto/${sentID}.json`)
          .success((response) => {
            resolve(response);
          });
        });
    }
  }; // end of return for functions
}); //end of factory




