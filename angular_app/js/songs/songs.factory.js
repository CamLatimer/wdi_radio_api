"use strict";

(function(){

  angular
  .module('songs')
  .factory('SongsKitchen', [
    '$resource',
    SongsCooker
  ]);

  function SongsCooker($resource){
    return("http://localhost:3000/grumbles/:id", {}, {
      update: {method: "PUT"}
    });

  }

}());
