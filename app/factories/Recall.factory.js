"use strict";

app.factory("RecallFactory", function($q, $http){

  return {
    //Function to grab data from (json) NHTSA API
    getRecallsFromApi : function(auto){

      let recalls = [];

      return $q(function(resolve, reject){
        $http.get(`${recallURL}modelyear/${auto.year}/make/${auto.make}/model/${auto.model}?format=json`)
          .success(function(moviesJson){
            let recallObject = [];
            recallObject = recallJson.Search;
            Object.keys(recallObject).forEach(function(key){
              recalls.push(recallObject[key]);
            });
            resolve(getRecallsFromApi);
          })
          .error(function(error){
            reject(error);
          });
      });
    }



  };
});