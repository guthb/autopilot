"use strict";

app.factory("RecallFactory", function($q, $http, $rootScope, recallURL){

  return {
    //Function to grab data from (json) NHTSA API
    getRecallsFromApi : function(autoyear, automake, automodel){

      let recalls = [];

      return $q(function(resolve, reject){
        $http.get(`${recallURL}modelyear/${autoyear}/make/${automake}/model/${automodel}?format=json`)
          .success(function(recallJson){
            console.log("recallJson", recallJson );
            let recallObject = recallJson.Results;
            console.log("recall in factory", recallObject);
            resolve(recallObject);

          })
          .error(function(error){
            reject(error);
          });
      });
    }



  };
});


