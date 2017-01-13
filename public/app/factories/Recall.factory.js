"use strict";

app.factory("RecallFactory", function($q, $http, $rootScope, recallURL){

  return {
    //Function to grab data from (json) NHTSA API
    getRecallsFromApi : function(autoyear, automake, automodel){

      let recalls = [];

      return $q(function(resolve, reject){
        $http.get(`${recallURL}modelyear/${autoyear}/make/${automake}/model/${automodel}?format=json`)
          .success(function(recallJson){

            let recallObject = recallJson.Results;

            resolve(recallObject);

          })
          .error(function(error){
            reject(error);
          });
      });
    }



  };
});


