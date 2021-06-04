import uiRouter from "@uirouter/angularjs";
import angular from "angular";

import appComponent from "./app.component";
import appRouting from "./app.routing";
import ComponentsModule from "./components/components";
import AuthFactory from "./factories/auth.factory";
import LoginService from "./services/login.service";

angular.module("app", [ComponentsModule.name, uiRouter])
  .config(appRouting)
  .component("app", appComponent)
  .factory("AuthFactory", AuthFactory)
  .service("LoginService", LoginService);
