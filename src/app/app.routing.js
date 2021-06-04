"use strict";

import * as routes from "./app.states";

const appRouting = ($urlRouterProvider, $stateProvider) => {
  // Initializes every route for the router to handle
  Object.keys(routes).forEach(key => $stateProvider.state(routes[key]));
  
  // If none of the previous routes is used, redirects to /login
  $urlRouterProvider.otherwise("/login");
}

// Inject dependencies
appRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

export default appRouting;
