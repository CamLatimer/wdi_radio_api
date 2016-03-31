"use strict";

(function(){

  angular
  .module('songs')
  .factory('SongsFactory', [
    '$resource',
    SongsKitchen
  ]);

  function SongsKitchen($resource){
    return("http://localhost:3000/grumbles/:id", {}, {
      update: {method: "PUT"}
    });
    
  }

}());
