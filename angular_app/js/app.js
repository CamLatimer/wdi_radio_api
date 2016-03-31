"use strict";

// module for the overall app --> includes here dependencies, routes, controllers, etc
(function(){
  angular
  .module('radioApp', [
    "ui.router",
    "songs"
  ])
  .config(['$stateProvider', RouteBuilder]);

  function RouteBuilder($stateProvider){

  }
}());
