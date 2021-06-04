import angular from "angular";

import ChatComponent from "./chat-component/chat.component";
import LoginFormComponent from "./login-form-component/login.form.component";

const ComponentsModule = angular.module("app.components", [])
  .component("loginForm", LoginFormComponent)
  .component('chat', ChatComponent);

export default ComponentsModule;
