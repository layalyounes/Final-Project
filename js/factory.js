// Getter for our module. Anything in this file is being ran off the myModule module.
var app = angular.module('myModule');

app.factory('myFactory', function($http) {

  // This dataRetrieval function is KEY to this factory working.
  dataRetrieval = function() {

    // We return all this non-sense. In short, this returns our data from the http call.
    return (
      // This is making an http call.
      // We are using the method: GET, because we want to GET information from the url.
      // This is where we declare what url we are sending a request to.
      $http.get('https://www.reddit.com/r/aww.json')
        .then(function successCallback(response) {

          // We create a variable called redditJSON which stores our response(with a little dot notation).
          var redditJSON = response.data.data.children;

          // We RETURN this data
          return redditJSON;
      })

      // dataRetrieval function returns that object, which has a lot of information in it.
    );

  };

  return {

    dataRetrieval: dataRetrieval

  };

});
